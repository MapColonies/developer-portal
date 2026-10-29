/** Link policy for model-written Markdown: only the portal's own pages may be linked. */

/** Control characters and whitespace that browsers strip or tolerate inside URLs, a classic way to dodge checks. */
// eslint-disable-next-line no-control-regex
const UNSAFE_CHARS = /[\u0000- \u007f-\u009f\\]/;

/**
 * Characters that must not survive percent-decoding of a path. Docusaurus <Link> hands the path to history, which runs
 * decodeURI on it, so "%5C" and "%09" turn into a backslash and a tab, which browsers read as "/" and strip, turning
 * "/%5Cevil.example" into the off-origin "//evil.example". A space is fine here (it is encoded again by the browser).
 */
// eslint-disable-next-line no-control-regex
const UNSAFE_DECODED = /[\u0000-\u001f\u007f-\u009f\\]/;

/** Static files served next to the pages (OpenAPI specs, the Corpus, images): not routes, so never client-side links. */
const STATIC_FILE = /\.(?:ya?ml|json|pdf|zip|gz|tgz|txt|csv|xml|png|jpe?g|gif|svg|webp|ico|map|js|css|woff2?)$/i;

/** A still-encoded dot ("%2e"), which a later decoding pass would turn into a "." or ".." path segment. */
const ENCODED_DOT = /%2e/i;

/** True when some path segment is "." or "..", which would climb out of the baseUrl once a router resolves it. */
function hasDotSegment(path: string): boolean {
  return path.split('/').some((segment) => segment === '.' || segment === '..');
}

/**
 * True when the path, however many times it is percent-decoded, stays an ordinary path: no control or backslash
 * characters, no leading "//", and no "." or ".." segments. The URL parser already resolves literal and single-encoded
 * dot segments, but a double-encoded one ("/%252e%252e/x") only turns into "/%2e%2e/x" and then "/../x" after the
 * decoding that history applies, so a "%2e" left in the path is rejected too.
 */
function isSafeAfterDecoding(path: string): boolean {
  let current = path;
  for (let i = 0; i < 4; i += 1) {
    if (UNSAFE_DECODED.test(current) || current.startsWith('//')) {
      return false;
    }
    if (ENCODED_DOT.test(current) || hasDotSegment(current)) {
      return false;
    }
    let decoded: string;
    try {
      decoded = decodeURI(current);
    } catch {
      return false;
    }
    if (decoded === current) {
      return true;
    }
    current = decoded;
  }
  return false;
}

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
  /**
   * Set when the target is a page of the running site (not a static file such as an OpenAPI spec): the path without
   * the baseUrl (plus search and hash), for Docusaurus <Link to>, which adds the baseUrl back and keeps client-side
   * routing. It always starts with exactly one "/", so <Link> can never mistake it for a protocol-relative URL.
   */
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
  if (url.origin !== context.locationOrigin) {
    // another allowed origin (the production site while previewing elsewhere): a plain link
    return { href: url.href };
  }
  // A page of the running site. The Corpus stores portal links without the baseUrl ("/docs/x"), the model may also
  // write them with it ("/developer-portal/docs/x"); both mean the same page. Repeated slashes are collapsed first so
  // "/developer-portal//evil.example" cannot turn into the protocol-relative "//evil.example".
  const base = context.baseUrl.endsWith('/') ? context.baseUrl : `${context.baseUrl}/`;
  const pathname = url.pathname.replace(/\/{2,}/g, '/');
  let rest = pathname;
  if (pathname.startsWith(base)) {
    rest = pathname.slice(base.length);
  } else if (pathname === base.slice(0, -1)) {
    rest = '';
  }
  const path = `/${rest.replace(/^\/+/, '')}`;
  if (!isSafeAfterDecoding(path)) {
    return null;
  }
  const internalPath = `${path}${url.search}${url.hash}`;
  const resolvedHref = `${base}${internalPath.slice(1)}`;
  if (STATIC_FILE.test(path)) {
    // a file, not a page of the single-page app: a client-side route would show its 404 page
    return { href: resolvedHref };
  }
  return { href: resolvedHref, internalPath };
}
