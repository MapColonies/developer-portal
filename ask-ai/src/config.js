import path from 'node:path';
import {fileURLToPath} from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const askAiRoot = path.resolve(currentDir, '..');
const repoRoot = path.resolve(askAiRoot, '..');

export const config = {
  askAiRoot,
  repoRoot,
  docsRoot: process.env.DOCS_ROOT || path.join(repoRoot, 'docs'),
  indexPath: process.env.ASK_AI_INDEX_PATH || path.join(askAiRoot, 'data', 'docs-index-current.json'),
  legacyIndexPath: path.join(askAiRoot, 'data', 'docs-index.json'),
  indexVersionsDir: process.env.ASK_AI_INDEX_VERSIONS_DIR || path.join(askAiRoot, 'data', 'indexes'),
  indexKeepVersions: Number(process.env.ASK_AI_INDEX_KEEP_VERSIONS || 3),
  indexCheckpointInterval: Number(process.env.ASK_AI_INDEX_CHECKPOINT_INTERVAL || 10),
  host: process.env.ASK_AI_HOST || '0.0.0.0',
  port: Number(process.env.ASK_AI_PORT || 8787),
  litellmBaseUrl: (process.env.LITELLM_BASE_URL || 'http://localhost:8088/v1').replace(/\/$/, ''),
  chatModel: process.env.LITELLM_CHAT_MODEL || 'ollama/qwen2.5:0.5b',
  embeddingModel: process.env.LITELLM_EMBEDDING_MODEL || 'ollama/nomic-embed-text',
  embeddingConcurrency: Number(process.env.ASK_AI_EMBEDDING_CONCURRENCY || 2),
  contextDocs: Number(process.env.ASK_AI_CONTEXT_DOCS || 3),
  maxContextChars: Number(process.env.ASK_AI_MAX_CONTEXT_CHARS || 14000),
  topK: Number(process.env.ASK_AI_TOP_K || 6),
};
