/**
 * Corpus contract v1: the shape of `azimuth-corpus.json`, published at
 * `<site url><baseUrl>azimuth-corpus.json` on every portal build and consumed by the AzimuthAI engine.
 *
 * The engine keeps its own copy of these types and rejects unknown `schemaVersion` values.
 */
export interface AzimuthCorpus {
  schemaVersion: 1;
  /** Hex sha256 of the canonical JSON of `{ pages, openapi }`; changes if and only if the content changes. */
  version: string;
  /** ISO-8601 build time. Informational only, NOT part of `version`. */
  generatedAt: string;
  /** Sorted by `path`. */
  pages: CorpusPage[];
  /** Sorted by `id`. */
  openapi: CorpusOpenApiSpec[];
}

export interface CorpusPage {
  /** Route without baseUrl, with a leading slash and no trailing slash, e.g. `/docs/MapColonies/DEM/Services/elevation`. */
  path: string;
  title: string;
  /** Only present when the page sets `description` in its front matter. */
  description?: string;
  /** In document order. The first may have an empty `headingPath` (text before the first heading). */
  sections: CorpusSection[];
}

export interface CorpusSection {
  /**
   * Heading texts leading to this section, outermost first. The page title is not repeated; a first content H1 that
   * differs from the title (e.g. `# General`, or a longer descriptive title) is the outermost entry.
   */
  headingPath: string[];
  /** Id of the section's heading, for deep links. */
  anchor?: string;
  /** May be empty: a heading with no content of its own (e.g. followed directly by a sibling heading, or only a diagram). */
  blocks: CorpusBlock[];
}

export type CorpusBlock = CorpusTextBlock | CorpusCodeBlock;

/** Markdown: paragraphs, lists, tables, inline code, links (portal links are path-only), admonitions as `**Note:** ...`. */
export interface CorpusTextBlock {
  type: 'text';
  text: string;
  /** Labels of the enclosing tab panels, outermost first, e.g. `["Fetch All Layers (Pagination)"]`. */
  tabs?: string[];
}

/** Code with its original line breaks, unescaped. */
export interface CorpusCodeBlock {
  type: 'code';
  /** Language of the fence, or `null` when the fence has none. */
  language: string | null;
  code: string;
  title?: string;
  tabs?: string[];
}

export interface CorpusOpenApiSpec {
  /** Stable id from the file name, e.g. `elevation-openapi`. */
  id: string;
  /** `info.title` of the spec. */
  title: string;
  /** The redocusaurus route without baseUrl, e.g. `/docs/MapColonies/dem/services/elevation/api`. */
  path: string;
  /** Static path of the spec file without baseUrl, e.g. `/openapi/dem/elevation-openapi.yaml`. */
  specFile: string;
  /** The full parsed OpenAPI document. */
  spec: Record<string, unknown>;
}
