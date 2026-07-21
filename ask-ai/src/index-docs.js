import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import path from 'node:path';
import {config} from './config.js';
import {loadDocChunks} from './docs.js';
import {embedText} from './litellm.js';

function hashText(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function getChunkHash(chunk) {
  return hashText(`${chunk.title}\n${chunk.section}\n${chunk.content}`);
}

function getDocsHash(chunks) {
  return hashText(chunks.map((chunk) => `${chunk.id}:${chunk.contentHash}`).sort().join('\n'));
}

function createVersion() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function getCacheKey(chunk) {
  return `${config.embeddingModel}:${chunk.id}:${chunk.contentHash}`;
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

async function writeJsonAtomic(filePath, data) {
  await fs.mkdir(path.dirname(filePath), {recursive: true});
  const tempPath = `${filePath}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(data, null, 2));
  await fs.rename(tempPath, filePath);
}

async function getVersionFiles() {
  try {
    const entries = await fs.readdir(config.indexVersionsDir, {withFileTypes: true});
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
      .map((entry) => path.join(config.indexVersionsDir, entry.name))
      .sort()
      .reverse();
  } catch {
    return [];
  }
}

async function addIndexToCache(filePath, chunkCache) {
  try {
    const parsedIndex = await readJson(filePath);
    const chunks = Array.isArray(parsedIndex.chunks) ? parsedIndex.chunks : [];

    for (const chunk of chunks) {
      if (chunk.id && chunk.contentHash && Array.isArray(chunk.embedding)) {
        const key = `${parsedIndex.embeddingModel || config.embeddingModel}:${chunk.id}:${chunk.contentHash}`;
        if (!chunkCache.has(key)) {
          chunkCache.set(key, chunk);
        }
      }
    }

    return parsedIndex;
  } catch {
    return null;
  }
}

async function loadExistingIndexes() {
  const chunkCache = new Map();
  const activeIndex = await addIndexToCache(config.indexPath, chunkCache);

  if (!activeIndex) {
    await addIndexToCache(config.legacyIndexPath, chunkCache);
  }

  for (const versionFile of await getVersionFiles()) {
    await addIndexToCache(versionFile, chunkCache);
  }

  return {activeIndex, chunkCache};
}

async function cleanupOldVersions(activeVersionPath) {
  const versionFiles = await getVersionFiles();
  const completedVersions = [];

  for (const versionFile of versionFiles) {
    const parsedIndex = await readJson(versionFile).catch(() => null);
    if (parsedIndex?.complete === true) {
      completedVersions.push(versionFile);
    }
  }

  const versionsToDelete = completedVersions
    .filter((versionFile) => versionFile !== activeVersionPath)
    .slice(Math.max(0, config.indexKeepVersions - 1));

  await Promise.all(versionsToDelete.map((versionFile) => fs.unlink(versionFile).catch(() => undefined)));
}

async function writeVersion(versionPath, version, docsHash, chunks, complete) {
  await writeJsonAtomic(versionPath, {
    version,
    createdAt: new Date().toISOString(),
    docsHash: complete ? docsHash : '',
    inProgressDocsHash: complete ? undefined : docsHash,
    complete,
    embeddingModel: config.embeddingModel,
    chunks: chunks.filter(Boolean),
  });
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(Array.from({length: Math.max(1, concurrency)}, () => worker()));
  return results;
}

async function main() {
  const chunks = (await loadDocChunks()).map((chunk) => ({
    ...chunk,
    contentHash: getChunkHash(chunk),
  }));
  const docsHash = getDocsHash(chunks);
  const existingIndexes = await loadExistingIndexes();

  if (existingIndexes.activeIndex?.complete === true && existingIndexes.activeIndex.docsHash === docsHash && process.env.FORCE_REINDEX !== 'true') {
    console.log(`Docs index is already up to date at ${config.indexPath}`);
    return;
  }

  const version = createVersion();
  const versionPath = path.join(config.indexVersionsDir, `docs-index-${version}.json`);
  let reusedCount = 0;
  let embeddedCount = 0;
  const chunksToEmbed = [];
  const indexedChunks = chunks.map((chunk, index) => {
    const cachedChunk = existingIndexes.chunkCache.get(getCacheKey(chunk));

    if (cachedChunk && process.env.FORCE_REINDEX !== 'true') {
      reusedCount += 1;
      return {...chunk, embedding: cachedChunk.embedding};
    }

    chunksToEmbed.push({...chunk, targetIndex: index});
    return null;
  });

  console.log(`Indexing ${chunks.length} documentation chunks into version ${version}...`);
  console.log(`Reusing ${reusedCount} cached embeddings; embedding ${chunksToEmbed.length} changed chunks.`);

  await writeVersion(versionPath, version, docsHash, indexedChunks, false);

  await mapWithConcurrency(chunksToEmbed, config.embeddingConcurrency, async (chunk) => {
    const embedding = await embedText(`${chunk.title}\n${chunk.section}\n${chunk.content}`);
    indexedChunks[chunk.targetIndex] = {...chunk, targetIndex: undefined, embedding};
    embeddedCount += 1;

    if (embeddedCount % config.indexCheckpointInterval === 0 || embeddedCount === chunksToEmbed.length) {
      console.log(`Embedded ${embeddedCount}/${chunksToEmbed.length}; writing checkpoint.`);
      await writeVersion(versionPath, version, docsHash, indexedChunks, false);
    }
  });

  if (indexedChunks.some((chunk) => !chunk)) {
    throw new Error('Failed to build complete docs index');
  }

  await writeVersion(versionPath, version, docsHash, indexedChunks, true);
  await writeJsonAtomic(config.indexPath, await readJson(versionPath));
  await cleanupOldVersions(versionPath);
  console.log(`Published docs index version ${version} to ${config.indexPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
