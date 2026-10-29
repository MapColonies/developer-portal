import fs from 'node:fs';
import path from 'node:path';
import logger from '@docusaurus/logger';
import type { LoadContext, Plugin, Props } from '@docusaurus/types';
import { assembleCorpus } from './corpus';
import { extractSections } from './html';
import { loadOpenApiSpecs, type RedocPluginLike } from './openapi';
import { normalizePath, stripBaseUrl } from './paths';
import type { CorpusPage } from './types';

export const CORPUS_FILE_NAME = 'azimuth-corpus.json';

const DOCS_PLUGIN_NAME = 'docusaurus-plugin-content-docs';

/** The part of a loaded doc that we read (docusaurus-plugin-content-docs `LoadedContent`). */
interface DocLike {
  title: string;
  permalink: string;
  draft?: boolean;
  unlisted?: boolean;
  frontMatter: { description?: unknown };
}

interface DocsContentLike {
  loadedVersions: { docs: DocLike[] }[];
}

/**
 * Writes `azimuth-corpus.json` (contract v1, see ./types.ts) into the build output, so GitHub Pages serves it at
 * `<site url><baseUrl>azimuth-corpus.json`. Used by the AzimuthAI chatbot instead of Docusaurus's lunr index.
 */
export default function azimuthCorpusPlugin(_context: LoadContext): Plugin {
  return {
    name: 'azimuth-corpus',

    async postBuild(props: Props) {
      const { outDir, baseUrl, siteDir, siteConfig, plugins } = props;
      const options = { baseUrl, siteUrl: siteConfig.url };

      const docs = plugins
        .filter((plugin) => plugin.name === DOCS_PLUGIN_NAME)
        .flatMap((plugin) => (plugin.content as DocsContentLike | undefined)?.loadedVersions ?? [])
        .flatMap((version) => version.docs);
      if (docs.length === 0) {
        throw new Error('[azimuth-corpus] the docs plugin loaded no documents');
      }

      const pages: CorpusPage[] = [];
      for (const doc of docs) {
        if (doc.draft || doc.unlisted) {
          continue;
        }
        const pagePath = normalizePath(stripBaseUrl(doc.permalink, baseUrl));
        const htmlFile = path.join(outDir, pagePath, 'index.html');
        if (!fs.existsSync(htmlFile)) {
          throw new Error(`[azimuth-corpus] no built HTML for ${doc.permalink} (expected ${htmlFile})`);
        }
        const sections = extractSections(fs.readFileSync(htmlFile, 'utf8'), { ...options, title: doc.title });
        if (sections === null) {
          throw new Error(`[azimuth-corpus] ${htmlFile} has no "article .theme-doc-markdown", did the theme markup change?`);
        }

        const page: CorpusPage = { path: pagePath, title: doc.title, sections };
        if (typeof doc.frontMatter.description === 'string' && doc.frontMatter.description.trim()) {
          page.description = doc.frontMatter.description.trim();
        }
        pages.push(page);
      }

      const staticDirs = siteConfig.staticDirectories;
      const openapi = loadOpenApiSpecs(plugins as unknown as RedocPluginLike[], siteDir, staticDirs, baseUrl);

      const corpus = assembleCorpus(pages, openapi, new Date());
      const target = path.join(outDir, CORPUS_FILE_NAME);
      fs.writeFileSync(target, JSON.stringify(corpus));

      const kib = (fs.statSync(target).size / 1024).toFixed(0);
      logger.success`[azimuth-corpus] wrote ${CORPUS_FILE_NAME}: ${corpus.pages.length} pages, ${corpus.openapi.length} OpenAPI specs, ${kib} KiB, version ${corpus.version.slice(0, 12)}`;
    },
  };
}
