import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import type { CorpusOpenApiSpec } from './types';
import { stripBaseUrl } from './paths';

/** The part of a loaded redocusaurus plugin that we read: its options, one plugin instance per spec. */
export interface RedocPluginLike {
  name: string;
  options: { spec?: unknown; route?: unknown };
}

export const REDOC_PLUGIN_NAME = 'docusaurus-plugin-redoc';

/**
 * Builds the corpus entries for every OpenAPI spec registered with redocusaurus, so the list is never hard-coded.
 * Specs must be local files that live in one of the site's static directories.
 */
export function loadOpenApiSpecs(plugins: readonly RedocPluginLike[], siteDir: string, staticDirs: readonly string[], baseUrl: string): CorpusOpenApiSpec[] {
  const specs: CorpusOpenApiSpec[] = [];
  const seen = new Set<string>();

  for (const plugin of plugins.filter((p) => p.name === REDOC_PLUGIN_NAME)) {
    const { spec, route } = plugin.options;
    if (typeof spec !== 'string' || typeof route !== 'string') {
      throw new Error(`[azimuth-corpus] redocusaurus entry without a string "spec" and "route": ${JSON.stringify(plugin.options)}`);
    }
    if (/^https?:\/\//.test(spec)) {
      throw new Error(`[azimuth-corpus] remote OpenAPI spec "${spec}" is not supported, use a file under static/`);
    }

    const file = path.resolve(siteDir, spec);
    const id = path.basename(file, path.extname(file));
    if (seen.has(id)) {
      throw new Error(`[azimuth-corpus] two OpenAPI specs share the id "${id}"`);
    }
    seen.add(id);

    const parsed = yaml.load(fs.readFileSync(file, 'utf8'), { schema: yaml.JSON_SCHEMA, filename: file });
    if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error(`[azimuth-corpus] ${spec} is not an OpenAPI document`);
    }
    const info = (parsed as { info?: { title?: unknown } }).info;
    if (typeof info?.title !== 'string') {
      throw new Error(`[azimuth-corpus] ${spec} has no info.title`);
    }

    specs.push({
      id,
      title: info.title,
      path: stripBaseUrl(route, baseUrl),
      specFile: staticPathOf(file, siteDir, staticDirs),
      spec: parsed as Record<string, unknown>,
    });
  }

  return specs;
}

function staticPathOf(file: string, siteDir: string, staticDirs: readonly string[]): string {
  for (const dir of staticDirs) {
    const relative = path.relative(path.resolve(siteDir, dir), file);
    if (!relative.startsWith('..') && !path.isAbsolute(relative)) {
      return '/' + relative.split(path.sep).join('/');
    }
  }
  throw new Error(`[azimuth-corpus] ${file} is not inside a static directory (${staticDirs.join(', ')}), so it is not served`);
}
