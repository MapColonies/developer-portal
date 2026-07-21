# Ask AI Integration TODO

## Setup

- [x] Create `AGENTS.md` with repo-specific instructions.
- [x] Create `todo.md` to track Ask AI integration work.

## Phase 1: Frontend Widget

- [x] Add Ask AI custom fields to `docusaurus.config.ts`.
- [x] Update `src/customFields.ts` with Ask AI config types.
- [x] Create `src/components/AskAI/index.tsx`.
- [x] Create `src/components/AskAI/styles.module.css`.
- [x] Mount Ask AI globally from `src/theme/Root.js`.
- [x] Support OpenAI-compatible LiteLLM responses.
- [x] Support wrapped backend responses shaped as `{ answer, sources }`.

## Phase 2: Local LiteLLM/Ollama Stack

- [x] Add `docker-compose.ask-ai.yml`.
- [x] Add LiteLLM config for `ollama/qwen2.5:0.5b`.
- [x] Add embedding model config for `ollama/nomic-embed-text`.
- [x] Add Nginx proxy config that injects LiteLLM auth.
- [x] Use strict local CORS for Docusaurus dev origins.
- [x] Remove root Ask AI npm scripts.
- [x] Add Docusaurus service to the local compose stack.
- [x] Add one-shot docs indexing service to the local compose stack.
- [x] Cache Ask AI embeddings by chunk hash to speed up repeated compose starts.
- [x] Skip Ask AI indexing when docs are unchanged.
- [x] Publish versioned Ask AI indexes without replacing the active index until reindex completion.

## Phase 3: No-DB RAG Backend

- [x] Add `ask-ai/` Node backend.
- [x] Add `/api/ask-ai` endpoint.
- [x] Add docs loader for `docs/**/*.md` and `docs/**/*.mdx`.
- [x] Convert Docusaurus doc paths to public URLs.
- [x] Strip frontmatter and MDX-only syntax.
- [x] Split docs into heading-aware chunks.
- [x] Generate embeddings through LiteLLM.
- [x] Store local index at `ask-ai/data/docs-index.json`.
- [x] Load index into memory on backend startup.
- [x] Implement cosine similarity retrieval.
- [x] Build grounded prompt using top matching chunks.
- [x] Return answer and source links.
- [x] Stream Ask AI answers with `stream: true` and `text/event-stream`.
- [x] Expand retrieved chunks by reading matched docs and surrounding sections before answering.
- [x] Use Docusaurus frontmatter `slug` and doc-level source links for Ask AI sources.

## Phase 4: Documentation

- [x] Update `README.md` with local Ask AI startup instructions.
- [x] Document required local models.
- [x] Document production architecture.
- [x] Warn that production LiteLLM tokens must not be exposed in frontend env vars.
- [x] Document direct curl test for Ask AI streaming.

## Phase 5: Verification

- [x] Run `npm run typecheck`.
- [x] Run `npm run build`.
- [ ] Start local Docker stack.
- [ ] Build or refresh docs index.
- [ ] Test Ask AI from Docusaurus UI.
- [ ] Test unavailable backend error state.
- [ ] Test at least one docs-grounded question with sources.

Notes:

- `npm run typecheck` passed.
- `npm run build` passed with existing docs/blog warnings and broken-link warnings.
- Backend syntax check passed with `node --check`.
- Docker compose config validation passed.
