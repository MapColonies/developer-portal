import { createHash } from 'node:crypto';
import type { AzimuthCorpus, CorpusOpenApiSpec, CorpusPage } from './types';

/** Serializes a value with object keys sorted at every depth, so equal content always yields identical text. */
export function canonicalJson(value: unknown): string {
  return JSON.stringify(sortKeys(value));
}

function sortKeys(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sortKeys);
  }
  if (value !== null && typeof value === 'object') {
    const sorted: Record<string, unknown> = {};
    for (const key of Object.keys(value).sort()) {
      sorted[key] = sortKeys((value as Record<string, unknown>)[key]);
    }
    return sorted;
  }
  return value;
}

/** The corpus version: sha256 of the canonical JSON of `{ pages, openapi }`. `generatedAt` is deliberately excluded. */
export function computeVersion(pages: CorpusPage[], openapi: CorpusOpenApiSpec[]): string {
  return createHash('sha256').update(canonicalJson({ pages, openapi })).digest('hex');
}

export function assembleCorpus(pages: CorpusPage[], openapi: CorpusOpenApiSpec[], generatedAt: Date): AzimuthCorpus {
  const sortedPages = [...pages].sort((a, b) => compare(a.path, b.path));
  const sortedSpecs = [...openapi].sort((a, b) => compare(a.id, b.id));
  return {
    schemaVersion: 1,
    version: computeVersion(sortedPages, sortedSpecs),
    generatedAt: generatedAt.toISOString(),
    pages: sortedPages,
    openapi: sortedSpecs,
  };
}

// Plain code point order rather than localeCompare, so the order does not depend on the build machine's locale.
function compare(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}
