/** Link policy for model-written Markdown: only the portal's own pages may be linked. */

/** Control characters and whitespace that browsers strip or tolerate inside URLs, a classic way to dodge checks. */
// eslint-disable-next-line no-control-regex
const UNSAFE_CHARS = /[\u0000- \u007f-\u009f\\]/;

/** `/docs/x` yes; `//evil.example` (protocol-relative), `/\evil.example`, `docs/x` and `#x` no. */
export function isSiteRelative(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//') && !UNSAFE_CHARS.test(href);
}

/** Origins that count as "the portal": the configured site URL and the origin the page is being served from. */
export function buildAllowedOrigins(siteUrl: string, locationOrigin?: string): string[] {
  const origins: string[] = [];
  for (const candidate of [siteUrl, locationOrigin]) {
    if (!candidate) {
      continue;
    }
    try {
      const { origin } = new URL(candidate);
      if (origin !== 'null' && !origins.includes(origin)) {
        origins.push(origin);
      }
    } catch {
      // an unparsable origin simply allows nothing
    }
  }
  return origins;
}

export interface LinkContext {
  allowedOrigins: string[];
  /** window.location.origin; where site-relative links resolve to */
  locationOrigin: string;
  /** the site's baseUrl, e.g. "/developer-portal/" (or "/") */
  baseUrl: string;
}

export interface ResolvedLink {
  /** safe to put in an `href` */
  href: string;
  /** set when the target is a page of the running site: baseUrl-relative path (+ search and hash) for client-side routing */
  internalPath?: string;
}

/** Returns the link to render, or null when the URL is not allowed and must be shown as plain text. */
export function resolveLink(href: string | undefined, context: LinkContext): ResolvedLink | null {
  if (!href || UNSAFE_CHARS.test(href)) {
    return null;
  }
  let url: URL;
  try {
    if (isSiteRelative(href)) {
      url = new URL(href, context.locationOrigin);
    } else {
      url = new URL(href);
      if ((url.protocol !== 'http:' && url.protocol !== 'https:') || !context.allowedOrigins.includes(url.origin)) {
        return null;
      }
    }
  } catch {
    return null;
  }
  const resolved: ResolvedLink = { href: isSiteRelative(href) ? href : url.href };
  const base = context.baseUrl.endsWith('/') ? context.baseUrl : `${context.baseUrl}/`;
  if (url.origin === context.locationOrigin && (url.pathname.startsWith(base) || url.pathname === base.slice(0, -1))) {
    resolved.internalPath = `/${url.pathname.slice(base.length)}${url.search}${url.hash}`;
  }
  return resolved;
}
