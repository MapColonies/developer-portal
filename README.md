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

### AzimuthAI corpus (`azimuth-corpus.json`)

Every build also writes `azimuth-corpus.json` into the build root (local plugin in `plugins/azimuth-corpus/`), so it is published to GitHub Pages with each portal release, e.g. `https://mapcolonies.github.io/developer-portal/azimuth-corpus.json`. The AzimuthAI chatbot ingests it instead of Docusaurus's lunr search index, which drops non-default tabs, browser-rendered components and the structure of code blocks.

The plugin parses the server-rendered HTML of every doc page (all tab panels are in it, hidden or not) and reads the OpenAPI specs registered with `redocusaurus`. The TypeScript contract is in [`plugins/azimuth-corpus/types.ts`](plugins/azimuth-corpus/types.ts):

- `schemaVersion: 1`. Consumers must reject unknown versions.
- `version`: sha256 of the canonical JSON of `{ pages, openapi }`. It changes if and only if the content changes (`generatedAt` is not part of it), so consumers can skip a re-ingest when it is unchanged.
- `pages[]`: `{ path, title, description?, sections[] }`, sorted by `path`. `path` has no baseUrl and no trailing slash (`/docs/MapColonies/DEM/Services/elevation`).
- `sections[]`: `{ headingPath, anchor?, blocks[] }` in document order. A block is either `{ type: 'text', text, tabs? }` (Markdown) or `{ type: 'code', language, code, title?, tabs? }` (original line breaks, `language` is `null` when the fence has none). `tabs` lists the labels of the enclosing tab panels, outermost first.
- `openapi[]`: `{ id, title, path, specFile, spec }`, sorted by `id`, with the full parsed document in `spec`.

Known gaps: content that only exists in the browser is not in the server-rendered HTML, so Mermaid diagrams and the Special Phrases data grid are absent.

Run the plugin's tests with `npm test`.
