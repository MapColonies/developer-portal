/** Normalizes a route to a leading slash and no trailing slash (the root stays `/`). */
export function normalizePath(route: string): string {
  const trimmed = route.replace(/\/+$/, '');
  if (trimmed === '') {
    return '/';
  }
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

/**
 * Removes the site origin (`siteUrl`) and the baseUrl (e.g. `/developer-portal/`) from a path or URL,
 * leaving a path that starts with `/`. Anything outside the site is returned unchanged.
 * Query and hash are kept.
 */
export function stripBaseUrl(href: string, baseUrl: string, siteUrl = ''): string {
  const origin = siteUrl.replace(/\/+$/, '');
  let rest = href;
  if (origin && startsAtBoundary(rest, origin)) {
    rest = rest.slice(origin.length) || '/';
  }

  const base = baseUrl.replace(/\/+$/, '');
  if (base !== '' && startsAtBoundary(rest, base)) {
    rest = rest.slice(base.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return rest;
}

/** True when `value` is `prefix` or continues it with `/`, `?` or `#` (so `/developer-portal-x` does not match `/developer-portal`). */
function startsAtBoundary(value: string, prefix: string): boolean {
  return value === prefix || (value.startsWith(prefix) && '/?#'.includes(value.charAt(prefix.length)));
}
