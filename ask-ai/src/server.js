import fs from 'node:fs/promises';
import http from 'node:http';
import {config} from './config.js';
import {loadDocSections} from './docs.js';
import {chat, embedText, streamChat} from './litellm.js';
import {findTopChunks} from './search.js';

let docsIndex = [];
let indexMtimeMs = 0;

function getCorsOrigin(request) {
  const allowedOrigins = (process.env.ASK_AI_CORS_ORIGINS || process.env.ASK_AI_CORS_ORIGIN || 'http://localhost:3000,http://127.0.0.1:3000')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
  const origin = request.headers.origin || '';

  return allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
}

function sendJson(request, response, statusCode, body) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': getCorsOrigin(request),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  response.end(JSON.stringify(body));
}

function sendStreamEvent(response, event, data) {
  response.write(`event: ${event}\n`);
  response.write(`data: ${JSON.stringify(data)}\n\n`);
}

function startStream(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': getCorsOrigin(request),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
}

async function readRequestBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

function buildPrompt(question, excerpts) {
  const context = excerpts
    .map((excerpt, index) => `[Source ${index + 1}]\nTitle: ${excerpt.title}\nURL: ${excerpt.url}\nFile: ${excerpt.sourcePath}\nMatched section: ${excerpt.section}\nExcerpt:\n${excerpt.content}`)
    .join('\n\n');

  return [
    {
      role: 'system',
      content: 'You are the MapColonies Developer Portal assistant. Read the provided documentation excerpts before answering. Answer only using those excerpts. Cite source URLs inline when useful. If the excerpts do not contain the answer, say: "I could not find that in the docs." Do not infer from general knowledge.',
    },
    {
      role: 'user',
      content: `Documentation context:\n${context}\n\nQuestion:\n${question}`,
    },
  ];
}

function uniqueSources(chunks) {
  const sourcesByUrl = new Map();

  for (const chunk of chunks) {
    if (!sourcesByUrl.has(chunk.url)) {
      sourcesByUrl.set(chunk.url, {title: `${chunk.title} - ${chunk.section}`, url: chunk.url});
    }
  }

  return Array.from(sourcesByUrl.values()).slice(0, 5);
}

function getTopSourcePaths(chunks) {
  const sourcesByPath = new Map();

  for (const chunk of chunks) {
    const current = sourcesByPath.get(chunk.sourcePath);
    if (!current || chunk.score > current.score) {
      sourcesByPath.set(chunk.sourcePath, chunk);
    }
  }

  return Array.from(sourcesByPath.values())
    .sort((left, right) => right.score - left.score)
    .slice(0, config.contextDocs);
}

async function expandRetrievedContext(chunks) {
  const matchedSourceChunks = getTopSourcePaths(chunks);
  const excerpts = [];
  let remainingChars = config.maxContextChars;

  for (const matchedChunk of matchedSourceChunks) {
    try {
      const doc = await loadDocSections(matchedChunk.sourcePath);
      const matchedSectionIndex = Math.max(0, doc.sections.findIndex((section) => section.heading === matchedChunk.section));
      const startIndex = Math.max(0, matchedSectionIndex - 1);
      const endIndex = Math.min(doc.sections.length, matchedSectionIndex + 2);
      const content = doc.sections
        .slice(startIndex, endIndex)
        .map((section) => `## ${section.heading}\n${section.text}`)
        .join('\n\n')
        .slice(0, remainingChars);

      if (!content) {
        continue;
      }

      excerpts.push({
        title: doc.title,
        section: matchedChunk.section,
        sourcePath: doc.sourcePath,
        url: matchedChunk.url,
        content,
        score: matchedChunk.score,
      });
      remainingChars -= content.length;

      if (remainingChars <= 0) {
        break;
      }
    } catch (error) {
      console.warn(`Failed to expand Ask AI context for ${matchedChunk.sourcePath}: ${error.message}`);
      const content = matchedChunk.content.slice(0, remainingChars);
      excerpts.push({...matchedChunk, content});
      remainingChars -= content.length;
    }
  }

  return excerpts.length > 0 ? excerpts : chunks;
}

async function handleAskAi(request, response) {
  const body = await readRequestBody(request);
  const question = typeof body.question === 'string' ? body.question.trim() : '';

  if (!question) {
    sendJson(request, response, 400, {error: 'Missing question'});
    return;
  }

  await refreshIndex().catch((error) => {
    console.warn(`Ask AI docs index refresh failed: ${error.message}`);
  });

  if (docsIndex.length === 0) {
    sendJson(request, response, 503, {error: 'Docs index is empty. Run npm run index in ask-ai first.'});
    return;
  }

  const questionEmbedding = await embedText(question);
  const chunks = findTopChunks(docsIndex, questionEmbedding, config.topK, body.url || '');
  const excerpts = await expandRetrievedContext(chunks);
  const sources = uniqueSources(excerpts);

  if (body.stream === true) {
    startStream(request, response);
    sendStreamEvent(response, 'sources', sources);

    try {
      await streamChat(buildPrompt(question, excerpts), (token) => {
        sendStreamEvent(response, 'token', {token});
      });
      sendStreamEvent(response, 'done', {});
    } catch (error) {
      sendStreamEvent(response, 'error', {error: error instanceof Error ? error.message : 'Ask AI stream failed'});
    } finally {
      response.end();
    }
    return;
  }

  const answer = await chat(buildPrompt(question, excerpts));

  sendJson(request, response, 200, {
    answer,
    sources,
  });
}

async function loadIndex() {
  const indexPath = await getReadableIndexPath();
  const rawIndex = await fs.readFile(indexPath, 'utf8');
  const parsedIndex = JSON.parse(rawIndex);
  const nextIndex = Array.isArray(parsedIndex.chunks) ? parsedIndex.chunks : [];

  if (nextIndex.length === 0) {
    throw new Error(`Ask AI index at ${indexPath} has no chunks`);
  }

  const indexStats = await fs.stat(indexPath);
  docsIndex = nextIndex;
  indexMtimeMs = indexStats.mtimeMs;
  console.log(`Loaded ${docsIndex.length} Ask AI docs chunks from ${indexPath}`);
}

async function getReadableIndexPath() {
  try {
    await fs.access(config.indexPath);
    return config.indexPath;
  } catch {
    await fs.access(config.legacyIndexPath);
    return config.legacyIndexPath;
  }
}

async function refreshIndex() {
  const indexPath = await getReadableIndexPath();
  const indexStats = await fs.stat(indexPath);

  if (docsIndex.length > 0 && indexStats.mtimeMs <= indexMtimeMs) {
    return;
  }

  const currentIndex = docsIndex;
  const currentMtimeMs = indexMtimeMs;

  try {
    await loadIndex();
  } catch (error) {
    docsIndex = currentIndex;
    indexMtimeMs = currentMtimeMs;
    throw error;
  }
}

await loadIndex().catch((error) => {
  console.warn(`Ask AI docs index was not loaded: ${error.message}`);
});

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    sendJson(request, response, 204, {});
    return;
  }

  if (request.method === 'GET' && request.url === '/healthz') {
    sendJson(request, response, 200, {status: 'ok', chunks: docsIndex.length});
    return;
  }

  if (request.method === 'POST' && request.url === '/api/ask-ai') {
    try {
      await handleAskAi(request, response);
    } catch (error) {
      console.error(error);
      sendJson(request, response, 500, {error: error instanceof Error ? error.message : 'Ask AI failed'});
    }
    return;
  }

  sendJson(request, response, 404, {error: 'Not found'});
});

server.listen(config.port, config.host, () => {
  console.log(`Ask AI API listening on http://${config.host}:${config.port}`);
});
