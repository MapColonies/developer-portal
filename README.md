# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

In order for the search bar to be visible run:
```
$ npm run build && npm start
```

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Ask AI Local Development

The Ask AI widget is mounted globally and calls `ASK_AI_ENDPOINT`, which defaults to `http://localhost:8787/api/ask-ai`.

Local testing uses Ollama, LiteLLM, an Nginx auth-injecting proxy, and a small Node API with a file-based docs index. Real LiteLLM tokens must not be exposed through Docusaurus/browser environment variables.

Start the full local stack:

```
$ docker compose -f docker-compose.ask-ai.yml up
```

This starts Docusaurus, the Ask AI API, LiteLLM, an Nginx auth-injecting proxy, Ollama, and a one-shot docs indexer. The compose stack pulls these Ollama models:

```
qwen2.5:0.5b
nomic-embed-text
```

The first indexing run can take a while because every docs chunk needs an embedding. Later runs reuse cached embeddings and skip indexing entirely when the docs are unchanged. At answer time, the API uses vector search to find relevant chunks, then reads the matched source docs from disk and sends surrounding sections to the model for better context.

The indexer writes versioned index files under `ask-ai/data/indexes/` and publishes `ask-ai/data/docs-index-current.json` only after a reindex completes successfully. The API keeps serving the previous active index while a new one is being generated.

Force a full re-index when needed:

```
$ FORCE_REINDEX=true docker compose -f docker-compose.ask-ai.yml up ask-ai-index
```

Open Docusaurus after the services finish starting:

```
http://localhost:3000
```

Useful local endpoints:

```
Ask AI API: http://localhost:8787/api/ask-ai
LiteLLM proxy: http://localhost:8088/v1
Ollama: http://localhost:11434
```

Test Ask AI streaming directly:

```
$ curl -N -X POST http://localhost:8787/api/ask-ai \
  -H "Content-Type: application/json" \
  -d '{"question":"What is MapColonies?","stream":true}'
```

Production should use the same security shape: browser -> internal Ask AI API/proxy -> RAG/index -> LiteLLM. Keep the LiteLLM auth token only in the proxy/backend environment.

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
