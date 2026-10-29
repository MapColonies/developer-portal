import type { Source } from './types';

/** Escapes a URL for use as a Markdown link destination written in angle brackets. */
function toDestination(url: string): string {
  return `<${url.replace(/[<>\s]/g, (c) => encodeURIComponent(c))}>`;
}

const MARKER = /\[(\d{1,3})\]/g;

function linkMarkers(text: string, byId: Map<number, Source>): string {
  return text.replace(MARKER, (match, digits: string, offset: number, whole: string) => {
    const source = byId.get(Number(digits));
    if (!source) {
      return match;
    }
    const before = whole[offset - 1];
    const after = whole[offset + match.length];
    // already a link text `[1](...)`, a definition `[1]: ...`, an escaped `\[1]` or an image `![1]`
    // (adjacent markers like `[1][2]` are both converted)
    if (before === '\\' || before === '!' || after === '(' || (after === ':' && offset === 0)) {
      return match;
    }
    return `[\\[${digits}\\]](${toDestination(source.url)})`;
  });
}

/**
 * Turns the answer's `[n]` markers into Markdown links to the cited Source. Markers that match no source,
 * and anything inside fenced or inline code, are left untouched. Pure string-to-string, so it also works on
 * the partial text of a stream (an incomplete `[1` is simply not a marker yet).
 */
export function linkCitationMarkers(markdown: string, sources: readonly Source[]): string {
  if (sources.length === 0) {
    return markdown;
  }
  const byId = new Map(sources.map((source) => [source.id, source]));
  const out: string[] = [];
  let fence: string | null = null;
  for (const line of markdown.split('\n')) {
    const fenceMatch = /^ {0,3}(`{3,}|~{3,})/.exec(line);
    if (fence === null) {
      if (fenceMatch) {
        fence = fenceMatch[1];
        out.push(line);
        continue;
      }
    } else {
      // a closing fence uses the same character and is at least as long as the opening one
      if (fenceMatch && fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length) {
        fence = null;
      }
      out.push(line);
      continue;
    }
    // outside fences: leave `inline code` spans alone
    out.push(
      line
        .split(/(`+[^`]*`+)/)
        .map((part, index) => (index % 2 === 1 ? part : linkMarkers(part, byId)))
        .join('')
    );
  }
  return out.join('\n');
}
