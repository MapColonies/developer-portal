import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {CustomFields} from '@site/src/customFields';

type Attributes = Record<string, string | number | undefined>;

const VISITOR_KEY = 'pricing-visitor';

function randomHex(bytes: number) {
  return Array.from(crypto.getRandomValues(new Uint8Array(bytes)), (b) => b.toString(16).padStart(2, '0')).join('');
}

// Storage can throw (private mode, blocked site data); tracking must never break the page.
function nextVisit() {
  try {
    const saved = JSON.parse(localStorage.getItem(VISITOR_KEY) ?? 'null');
    const visitor = {id: saved?.id ?? randomHex(16), events: (saved?.events ?? 0) + 1};
    localStorage.setItem(VISITOR_KEY, JSON.stringify(visitor));
    return visitor;
  } catch {
    return {id: randomHex(16), events: 1};
  }
}

function toOtlp(attributes: Attributes) {
  return Object.entries(attributes)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([key, v]) => ({key, value: typeof v === 'number' ? {intValue: v} : {stringValue: v}}));
}

// The org collector only runs a traces pipeline, so each event is sent as a zero-length OTLP span.
export function sendEvent(url: string | undefined, name: string, attributes: Attributes) {
  if (!url) return;
  const visitor = nextVisit();
  const now = `${Date.now()}000000`;
  const span = {
    traceId: randomHex(16),
    spanId: randomHex(8),
    name,
    kind: 1,
    startTimeUnixNano: now,
    endTimeUnixNano: now,
    attributes: toOtlp({
      ...attributes,
      'visitor.id': visitor.id,
      'visitor.event_count': visitor.events,
      'page.url': window.location.href,
      'page.referrer': document.referrer,
      'user_agent.original': navigator.userAgent,
      'browser.language': navigator.language,
    }),
  };
  const body = {
    resourceSpans: [
      {
        resource: {attributes: toOtlp({'service.name': 'developer-portal'})},
        scopeSpans: [{scope: {name: 'pricing'}, spans: [span]}],
      },
    ],
  };
  fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body), keepalive: true}).catch(
    () => undefined,
  );
}

export function usePricingTelemetry() {
  const {mapColoniesBaseURLS} = useDocusaurusContext().siteConfig.customFields as CustomFields;
  return (name: string, attributes: Attributes) => sendEvent(mapColoniesBaseURLS.pricingTelemetry, name, attributes);
}
