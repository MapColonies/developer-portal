// Run with `npm test`. Covers the widget's pure logic: SSE parser, link allow-list, citation markers, error mapping and
// the fetch/stream plumbing (with a fake fetch). The React components are checked in a browser.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { chatUrl, ChatRequestError, streamChat, streamChatRecovering } from './api';
import { linkCitationMarkers } from './citations';
import { detectDirection, detectMessageDirection, proseOf } from './direction';
import { errorFromHttp, errorFromStreamEvent, formatWait, noteForMessage, outcomeNote, parseRetryAfter } from './errors';
import { lengthHint, QUESTION_SOFT_LIMIT } from './limits';
import { isSuggestedRequestLabel } from './suggested';
import { buildAllowedOrigins, isSiteRelative, resolveLink, type LinkContext } from './links';
import { createLocation, createPath } from 'history';
import { createSseParser, parseChatEvent } from './sse';
import type { ChatEvent, Source } from './types';

const sse = (event: string, data: unknown): string => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;

const SOURCE: Source = { id: 1, title: 'Elevation', section: 'Usage > Query', url: 'https://mapcolonies.github.io/developer-portal/docs/dem#usage', kind: 'page' };
const SOURCE_2: Source = { id: 2, title: 'API', url: 'https://mapcolonies.github.io/developer-portal/docs/api', kind: 'openapi' };

describe('createSseParser', () => {
  it('dispatches an event whose final blank line is a lone CR once the stream ends', () => {
    const parser = createSseParser();
    assert.deepEqual(parser.push('event: done\ndata: {}\r\r'), []);
    assert.deepEqual(parser.end(), [{ event: 'done', data: '{}' }]);
    assert.deepEqual(parser.end(), []);
  });

  it('parses events and ignores comment pings', () => {
    const parser = createSseParser();
    const out = parser.push(': ping\n\nevent: text\ndata: {"delta":"hi"}\n\n');
    assert.deepEqual(out, [{ event: 'text', data: '{"delta":"hi"}' }]);
  });

  it('reassembles events split at every possible byte boundary', () => {
    const stream = sse('sources', { a: 1 }) + ': ping\n\n' + sse('text', { delta: 'x' }) + sse('done', { b: 2 });
    for (let cut = 0; cut <= stream.length; cut += 1) {
      const parser = createSseParser();
      const out = [...parser.push(stream.slice(0, cut)), ...parser.push(stream.slice(cut))];
      assert.deepEqual(
        out.map((m) => m.event),
        ['sources', 'text', 'done'],
        `cut at ${cut}`
      );
    }
  });

  it('accepts CRLF and CR line ends, even a CRLF split across chunks', () => {
    const parser = createSseParser();
    assert.deepEqual(parser.push('event: text\r\ndata: 1\r\n\r'), []);
    // a bare trailing CR is held back until the next byte shows whether it is half of a CRLF
    assert.deepEqual(parser.push('\nevent: text\rdata: 2\r\r'), [{ event: 'text', data: '1' }]);
    assert.deepEqual(parser.push('x'), [{ event: 'text', data: '2' }]);
  });

  it('joins multi-line data, defaults the event name and strips one leading space only', () => {
    const parser = createSseParser();
    assert.deepEqual(parser.push('data: a\ndata:  b\n\n'), [{ event: 'message', data: 'a\n b' }]);
  });

  it('drops an incomplete trailing event and skips events without data', () => {
    const parser = createSseParser();
    assert.deepEqual(parser.push('event: text\n\nevent: text\ndata: {"delta"'), []);
  });

  it('ignores a leading BOM', () => {
    const parser = createSseParser();
    assert.deepEqual(parser.push('﻿event: text\ndata: {}\n\n'), [{ event: 'text', data: '{}' }]);
  });
});

describe('parseChatEvent', () => {
  it('maps the four contract events', () => {
    assert.deepEqual(parseChatEvent({ event: 'sources', data: JSON.stringify({ conversationId: 'c', messageId: 'm', sources: [SOURCE] }) }), {
      type: 'sources',
      conversationId: 'c',
      messageId: 'm',
      sources: [SOURCE],
    });
    assert.deepEqual(parseChatEvent({ event: 'text', data: '{"delta":"é"}' }), { type: 'text', delta: 'é' });
    assert.deepEqual(parseChatEvent({ event: 'done', data: JSON.stringify({ conversationId: 'c', messageId: 'm', citations: [SOURCE], outcome: 'answered' }) }), {
      type: 'done',
      conversationId: 'c',
      messageId: 'm',
      citations: [SOURCE],
      outcome: 'answered',
    });
    assert.deepEqual(parseChatEvent({ event: 'error', data: '{"code":"internal","message":"boom"}' }), { type: 'error', code: 'internal', message: 'boom' });
  });

  it('returns null for unknown events, bad JSON and payloads that break the contract', () => {
    assert.equal(parseChatEvent({ event: 'weird', data: '{}' }), null);
    assert.equal(parseChatEvent({ event: 'text', data: '{nope' }), null);
    assert.equal(parseChatEvent({ event: 'text', data: '{"delta":3}' }), null);
    assert.equal(parseChatEvent({ event: 'text', data: '[]' }), null);
    assert.equal(parseChatEvent({ event: 'done', data: JSON.stringify({ conversationId: 'c', messageId: 'm', citations: [], outcome: 'bogus' }) }), null);
    assert.equal(parseChatEvent({ event: 'sources', data: JSON.stringify({ conversationId: 'c', messageId: 'm', sources: [{ id: 'x' }] }) }), null);
  });

  it('defaults an unknown source kind to page', () => {
    const event = parseChatEvent({ event: 'sources', data: JSON.stringify({ conversationId: 'c', messageId: 'm', sources: [{ ...SOURCE, kind: 'new_kind' }] }) });
    assert.equal(event?.type === 'sources' && event.sources[0].kind, 'page');
  });
});

describe('link allow-list', () => {
  const context: LinkContext = {
    allowedOrigins: buildAllowedOrigins('https://mapcolonies.github.io', 'http://localhost:3000'),
    locationOrigin: 'http://localhost:3000',
    baseUrl: '/developer-portal/',
  };

  it('builds the allowed origins from the site URL and the page origin', () => {
    assert.deepEqual(buildAllowedOrigins('https://mapcolonies.github.io/', 'https://mapcolonies.github.io'), ['https://mapcolonies.github.io']);
    assert.deepEqual(buildAllowedOrigins('not a url', undefined), []);
  });

  it('allows the portal origin and the page origin', () => {
    assert.equal(resolveLink('https://mapcolonies.github.io/developer-portal/docs/x#y', context)?.href, 'https://mapcolonies.github.io/developer-portal/docs/x#y');
    assert.equal(resolveLink('http://localhost:3000/docs/x', context)?.href, '/developer-portal/docs/x');
  });

  it('allows site-relative links', () => {
    assert.deepEqual(resolveLink('/developer-portal/docs/x?a=1#y', context), { href: '/developer-portal/docs/x?a=1#y', internalPath: '/docs/x?a=1#y' });
  });

  it('treats portal links without the baseUrl, as the Corpus stores them, as pages of the site', () => {
    assert.deepEqual(resolveLink('/docs/MapColonies/authentication', context), {
      href: '/developer-portal/docs/MapColonies/authentication',
      internalPath: '/docs/MapColonies/authentication',
    });
    assert.deepEqual(resolveLink('/docs/x', { ...context, baseUrl: '/' }), { href: '/docs/x', internalPath: '/docs/x' });
    assert.deepEqual(resolveLink('/docs/x#a', { ...context, baseUrl: '/developer-portal' }), { href: '/developer-portal/docs/x#a', internalPath: '/docs/x#a' });
  });

  it('never produces a protocol-relative internal path from repeated slashes', () => {
    const rootContext = { ...context, baseUrl: '/' };
    for (const [href, ctx] of [
      ['/developer-portal//evil.example/x', context],
      ['/developer-portal///evil.example/x', context],
      ['http://localhost:3000/developer-portal//evil.example/x', context],
      ['/developer-portal/..//evil.example/x', context],
      ['/docs/..//evil.example/x', context],
      ['/.//evil.example/x', context],
      ['http://localhost:3000//evil.example/x', rootContext],
      ['http://localhost:3000///evil.example/x', rootContext],
    ] as const) {
      const link = resolveLink(href, ctx);
      assert.ok(link, href);
      assert.ok(link.internalPath !== undefined && /^\/(?![/\\])/.test(link.internalPath), `${href} -> ${link.internalPath}`);
      assert.ok(!link.href.startsWith('//'), `${href} -> ${link.href}`);
    }
    assert.equal(resolveLink('/developer-portal//evil.example/x', context)?.internalPath, '/evil.example/x');
    assert.equal(resolveLink('http://localhost:3000//evil.example/x', { ...context, baseUrl: '/' })?.internalPath, '/evil.example/x');
  });

  it('rejects paths that become unsafe once percent-decoded (history runs decodeURI on <Link to>)', () => {
    const origin = 'http://localhost:3000';
    for (const ctx of [{ ...context, baseUrl: '/' }, context]) {
      for (const href of [
        '/%5Cevil.example/x',
        '/%5c%5cevil.example/x',
        '/%09/evil.example/x',
        '/%0a/evil.example/x',
        '/%00evil.example',
        '/%255Cevil.example/x', // double-encoded
        '/docs/%5C..%5Cevil.example',
        `${origin}/%5Cevil.example/d`,
        '/developer-portal/%5Cevil.example/x',
        '/%C2%80/evil.example/x',
      ]) {
        assert.equal(resolveLink(href, ctx), null, `${ctx.baseUrl} ${href}`);
      }
    }
  });

  it('keeps every allowed link on the origin after the rendering <Link> decodes it', () => {
    const origin = 'http://localhost:3000';
    const hrefs = ['/docs/x', '/docs/a%20b', '/docs/x?q=%5C#%5C', '/developer-portal//evil.example/x', '/docs/%E2%9C%93', '/docs/x%2Fy', `${origin}//evil.example/x`];
    for (const baseUrl of ['/', '/developer-portal/']) {
      for (const href of hrefs) {
        const link = resolveLink(href, { ...context, baseUrl });
        assert.ok(link, `${baseUrl} ${href}`);
        if (link.internalPath === undefined) {
          continue;
        }
        // what Docusaurus <Link> + react-router do: prefix the baseUrl, createLocation (decodeURI), createPath
        const rendered = createPath(createLocation(`${baseUrl}${link.internalPath.slice(1)}`));
        assert.equal(new URL(rendered, origin).origin, origin, `${baseUrl} ${href} -> ${rendered}`);
      }
    }
  });

  it('renders files that are not routes as plain links', () => {
    assert.deepEqual(resolveLink('/developer-portal/openapi/dem/elevation-openapi.yaml', context), { href: '/developer-portal/openapi/dem/elevation-openapi.yaml' });
    assert.deepEqual(resolveLink('/azimuth-corpus.json', context), { href: '/developer-portal/azimuth-corpus.json' });
    assert.equal(resolveLink('/docs/v1.2/x', context)?.internalPath, '/docs/v1.2/x');
  });

  it('offers client-side routing only for pages of the running site under the base URL', () => {
    assert.equal(resolveLink('https://mapcolonies.github.io/developer-portal/docs/x', context)?.internalPath, undefined);
    assert.equal(resolveLink('https://mapcolonies.github.io/developer-portal/docs/x', context)?.href, 'https://mapcolonies.github.io/developer-portal/docs/x');
    assert.equal(resolveLink('http://localhost:3000/developer-portal/docs/x#a', context)?.internalPath, '/docs/x#a');
    assert.equal(resolveLink('http://localhost:3000/developer-portal', context)?.internalPath, '/');
  });

  it('rejects other origins, lookalikes and non-http schemes', () => {
    for (const href of [
      'https://evil.example/x',
      'https://mapcolonies.github.io.evil.example/x',
      'https://mapcolonies.github.io@evil.example/x',
      'http://mapcolonies.github.io/x', // same host, different scheme = different origin
      'javascript:alert(1)',
      'JaVaScRiPt:alert(1)',
      'data:text/html,<script>alert(1)</script>',
      'mailto:a@b.c',
      '//evil.example/x',
      '/\\evil.example/x',
      '\\\\evil.example/x',
      ' https://mapcolonies.github.io/x',
      'java\tscript:alert(1)',
      'docs/relative',
      '#anchor',
      '',
      undefined,
    ]) {
      assert.equal(resolveLink(href, context), null, String(href));
    }
  });

  it('classifies site-relative paths', () => {
    assert.equal(isSiteRelative('/docs'), true);
    assert.equal(isSiteRelative('//docs'), false);
    assert.equal(isSiteRelative('docs'), false);
  });
});

describe('linkCitationMarkers', () => {
  const sources = [SOURCE, SOURCE_2];

  it('links known markers to their source', () => {
    assert.equal(
      linkCitationMarkers('Use the elevation API [1] and its spec [2].', sources),
      `Use the elevation API [\\[1\\]](<${SOURCE.url}>) and its spec [\\[2\\]](<${SOURCE_2.url}>).`
    );
  });

  it('converts adjacent markers and leaves unknown numbers alone', () => {
    assert.equal(linkCitationMarkers('x [1][2] y [3]', sources), `x [\\[1\\]](<${SOURCE.url}>)[\\[2\\]](<${SOURCE_2.url}>) y [3]`);
  });

  it('leaves code, existing links, escapes and images alone', () => {
    const text = ['inline `a[1]` here', '```js', 'const x = a[1];', '```', '[1](https://x.example) \\[1] ![1](img.png)', '~~~', 'b[2]', '~~~'].join('\n');
    assert.equal(linkCitationMarkers(text, sources), text);
  });

  it('keeps going after a fence closes and handles longer fences', () => {
    const text = ['````', '```', 'a[1]', '```', '````', 'after [1]'].join('\n');
    assert.equal(linkCitationMarkers(text, sources), ['````', '```', 'a[1]', '```', '````', `after [\\[1\\]](<${SOURCE.url}>)`].join('\n'));
  });

  it('is a no-op without sources and does not touch a half-streamed marker', () => {
    assert.equal(linkCitationMarkers('see [1]', []), 'see [1]');
    assert.equal(linkCitationMarkers('see [', sources), 'see [');
    assert.equal(linkCitationMarkers('see [1', sources), 'see [1');
  });

  it('escapes characters that would break the link destination', () => {
    const odd: Source = { ...SOURCE, url: 'https://mapcolonies.github.io/a b>c' };
    assert.equal(linkCitationMarkers('[1]', [odd]), '[\\[1\\]](<https://mapcolonies.github.io/a%20b%3Ec>)');
  });
});

describe('error messages', () => {
  it('maps HTTP failures to friendly kinds', () => {
    assert.equal(errorFromHttp(429, 'rate_limited').kind, 'busy');
    assert.match(errorFromHttp(429, 'rate_limited').message, /busy, try again in a minute/);
    assert.equal(errorFromHttp(429, 'budget_exhausted').kind, 'budget');
    assert.equal(errorFromHttp(503, 'not_ready').kind, 'unavailable');
    assert.equal(errorFromHttp(502).kind, 'unavailable');
    assert.equal(errorFromHttp(413, 'question_too_long').kind, 'too_long');
    assert.equal(errorFromHttp(400, 'invalid_request').kind, 'invalid');
    assert.equal(errorFromHttp(500).kind, 'internal');
    const expired = errorFromHttp(404, 'conversation_not_found');
    assert.equal(expired.kind, 'conversation_expired');
    assert.equal(expired.resetConversation, true);
  });

  it('says how long to wait when the engine sends Retry-After', () => {
    assert.equal(errorFromHttp(429, 'rate_limited', 120).message, 'AzimuthAI is busy, try again in about 2 minutes.');
    assert.equal(errorFromHttp(429, 'rate_limited', 20).message, 'AzimuthAI is busy, try again in about 1 minute.');
    assert.equal(errorFromHttp(429, 'rate_limited', 61).message, 'AzimuthAI is busy, try again in about 2 minutes.');
    assert.equal(errorFromHttp(429, 'rate_limited').message, 'AzimuthAI is busy, try again in a minute.');
    assert.equal(errorFromHttp(429, undefined, 30).kind, 'busy');
    const budget = errorFromHttp(429, 'budget_exhausted', 5 * 3600);
    assert.equal(budget.kind, 'budget');
    assert.equal(budget.message, 'AzimuthAI has reached its daily limit. Please try again in about 5 hours.');
    assert.equal(errorFromHttp(429, 'budget_exhausted').message, 'AzimuthAI has reached its daily limit. Please try again tomorrow.');
    assert.match(errorFromHttp(429, 'budget_exhausted', 90 * 3600).message, /tomorrow/);
  });

  it('tells a busy engine from an exhausted budget and from a too long question', () => {
    const kinds = [errorFromHttp(429, 'rate_limited', 60), errorFromHttp(429, 'budget_exhausted', 60), errorFromHttp(413, 'question_too_long')].map((e) => e.kind);
    assert.deepEqual(kinds, ['busy', 'budget', 'too_long']);
    assert.match(errorFromHttp(413, 'question_too_long').message, /too long.*shorten/);
    assert.equal(errorFromHttp(413).kind, 'too_long');
  });

  it('maps stream error events', () => {
    assert.equal(errorFromStreamEvent('llm_unavailable').kind, 'unavailable');
    assert.equal(errorFromStreamEvent('budget_exhausted').kind, 'budget');
    assert.equal(errorFromStreamEvent('internal').kind, 'internal');
    assert.equal(errorFromStreamEvent('something_new').kind, 'internal');
  });

  it('has a note for every non-answer outcome', () => {
    assert.equal(outcomeNote('answered'), undefined);
    for (const outcome of ['not_covered', 'refused', 'handoff'] as const) {
      assert.ok(outcomeNote(outcome));
    }
  });
});

describe('Retry-After', () => {
  it('reads delta-seconds and HTTP dates', () => {
    assert.equal(parseRetryAfter('90'), 90);
    assert.equal(parseRetryAfter(' 7 '), 7);
    const now = Date.parse('2026-10-29T12:00:00Z');
    assert.equal(parseRetryAfter('Thu, 29 Oct 2026 12:05:00 GMT', now), 300);
    assert.equal(parseRetryAfter('Thu, 29 Oct 2026 11:00:00 GMT', now), undefined);
  });

  it('ignores a missing, zero or unreadable value', () => {
    for (const value of [null, undefined, '', '0', '-5', 'soon', '1.5']) {
      assert.equal(parseRetryAfter(value), undefined, String(value));
    }
  });

  it('formats a wait in minutes, then hours', () => {
    assert.equal(formatWait(1), 'about 1 minute');
    assert.equal(formatWait(3540), 'about 59 minutes');
    assert.equal(formatWait(3599), 'about 1 hour');
    assert.equal(formatWait(3600), 'about 1 hour');
    assert.equal(formatWait(10 * 3600), 'about 10 hours');
    assert.equal(formatWait(undefined), undefined);
    assert.equal(formatWait(0), undefined);
  });
});

describe('lengthHint', () => {
  it('stays quiet for short questions', () => {
    assert.equal(lengthHint(''), undefined);
    assert.equal(lengthHint('x'.repeat(QUESTION_SOFT_LIMIT * 0.8 - 1)), undefined);
  });

  it('shows a counter near the limit and a warning past it', () => {
    assert.deepEqual(lengthHint('x'.repeat(1700)), { counter: '1,700 / 2,000' });
    assert.deepEqual(lengthHint('x'.repeat(2000)), { counter: '2,000 / 2,000' });
    const over = lengthHint('x'.repeat(2001));
    assert.equal(over?.counter, '2,001 / 2,000');
    assert.match(over?.warning ?? '', /may be rejected/);
  });
});

describe('detectDirection', () => {
  it('is rtl for Hebrew and other right-to-left scripts, ltr for everything else', () => {
    assert.equal(detectDirection('איך מקבלים טוקן?'), 'rtl');
    assert.equal(detectDirection('كيف أحصل على رمز؟'), 'rtl');
    assert.equal(detectDirection('How do I get a token?'), 'ltr');
    assert.equal(detectDirection('Как получить токен?'), 'ltr');
    assert.equal(detectDirection('漢字'), 'ltr');
  });

  it('decides on the first strong character, ignoring digits, punctuation, spaces and emoji before it', () => {
    assert.equal(detectDirection('  (1) "שלום" hello'), 'rtl');
    assert.equal(detectDirection('123 - hello שלום'), 'ltr');
    assert.equal(detectDirection('🙂 !? 42 שלום'), 'rtl');
    assert.equal(detectDirection('WMTS לא מחזיר תמונות'), 'ltr');
    assert.equal(detectDirection('ה-API לא עובד'), 'rtl');
  });

  it('treats Hebrew with points and presentation forms as rtl, and explicit marks as strong', () => {
    assert.equal(detectDirection('\u05E9\u05B8\u05C1\u05DC\u05D5\u05B9\u05DD'), 'rtl');
    assert.equal(detectDirection('\uFB2A'), 'rtl');
    assert.equal(detectDirection('\u200F123 hello'), 'rtl');
    assert.equal(detectDirection('\u200E\u05E9'), 'ltr');
  });

  it('is ltr when there is no strong character', () => {
    assert.equal(detectDirection(''), 'ltr');
    assert.equal(detectDirection('123 ... !'), 'ltr');
    assert.equal(detectDirection('٣٤٥'), 'ltr');
  });
});

describe('detectMessageDirection', () => {
  it('ignores code, links and citation markers that come before the prose', () => {
    assert.equal(detectMessageDirection('```bash\ncurl https://x.test\n```\nכדי לקבל טוקן'), 'rtl');
    assert.equal(detectMessageDirection('`GET /layers` מחזיר רשימה'), 'rtl');
    assert.equal(detectMessageDirection('[1] https://mapcolonies.github.io/developer-portal/docs שלום'), 'rtl');
    assert.equal(detectMessageDirection('[Elevation API](https://x.test/docs) מתאר זאת'), 'ltr');
    assert.equal(detectMessageDirection('```bash\ncurl x\n```\nHere is how'), 'ltr');
  });

  it('keeps a half-streamed answer stable: an open fence hides the code, not the prose before it', () => {
    assert.equal(detectMessageDirection('שלום\n\n```http\nGET /x HTTP/1.1\nHost: api'), 'rtl');
    assert.equal(detectMessageDirection('```http\nGET /x'), 'ltr');
    assert.equal(detectMessageDirection(''), 'ltr');
  });

  it('does not let tilde or longer fences end early', () => {
    assert.equal(proseOf('~~~\nא\n```\nב\n~~~\nok').trim(), 'ok');
    assert.equal(proseOf('````\nא\n```\nב\n````\nok').trim(), 'ok');
  });

  it('leaves the citation markers and URLs out of the prose', () => {
    assert.equal(proseOf('see [1] and https://a.test/b, [2]').replace(/\s+/g, ' ').trim(), 'see and');
  });
});

describe('Suggested request label', () => {
  it('recognises the two labels the engine writes', () => {
    assert.ok(isSuggestedRequestLabel('Suggested request (checked against the Elevation OpenAPI spec)'));
    assert.ok(isSuggestedRequestLabel('Suggested request (not checked: built from a documented example)'));
    assert.ok(isSuggestedRequestLabel('  Suggested request (checked against the X OpenAPI spec):  '));
  });

  it('does not match ordinary prose', () => {
    assert.ok(!isSuggestedRequestLabel('Suggested request'));
    assert.ok(!isSuggestedRequestLabel('A Suggested request (see below) is shown'));
    assert.ok(!isSuggestedRequestLabel('Suggested request (a)\nmore text'));
  });
});

describe('outcome notes', () => {
  it('shows a note only when the message has no text of its own, so the user sees one message', () => {
    assert.equal(noteForMessage('not_covered', 'Sorry, this is not covered by the docs.'), undefined);
    assert.equal(noteForMessage('handoff', 'Please contact the team.'), undefined);
    assert.equal(noteForMessage('refused', 'I can only help with MapColonies.'), undefined);
    assert.equal(noteForMessage('refused', ''), outcomeNote('refused'));
    assert.equal(noteForMessage('handoff', '  \n'), outcomeNote('handoff'));
    assert.equal(noteForMessage('answered', ''), undefined);
    assert.equal(noteForMessage(undefined, ''), undefined);
  });
});

describe('streamChat', () => {
  const encoder = new TextEncoder();

  /** a fetch answering with an SSE body delivered in the given chunks */
  const sseFetch =
    (chunks: string[], init: ResponseInit = { status: 200 }): typeof fetch =>
    async () =>
      new Response(
        new ReadableStream({
          start(controller) {
            for (const chunk of chunks) {
              controller.enqueue(encoder.encode(chunk));
            }
            controller.close();
          },
        }),
        { ...init, headers: { 'Content-Type': 'text/event-stream' } }
      );

  const collect = async (fetchImpl: typeof fetch, extra: Partial<Parameters<typeof streamChat>[0]> = {}): Promise<ChatEvent[]> => {
    const events: ChatEvent[] = [];
    await streamChat({ endpoint: 'http://engine.test/', message: 'hi', fetchImpl, ...extra }, (e) => events.push(e));
    return events;
  };

  const full = [
    sse('sources', { conversationId: 'c1', messageId: 'm1', sources: [SOURCE] }),
    sse('text', { delta: 'Hello ' }),
    sse('text', { delta: 'wörld [1]' }),
    sse('done', { conversationId: 'c1', messageId: 'm1', citations: [SOURCE], outcome: 'answered' }),
  ].join('');

  it('builds the URL without doubling slashes', () => {
    assert.equal(chatUrl('http://engine.test/'), 'http://engine.test/v1/chat');
    assert.equal(chatUrl('http://engine.test'), 'http://engine.test/v1/chat');
  });

  it('streams events in order, decoding multi-byte characters split across chunks', async () => {
    const bytes = encoder.encode(full);
    const cut = bytes.indexOf(0xc3) + 1; // between the two bytes of "ö"
    assert.ok(cut > 0);
    const chunks: Uint8Array[] = [bytes.slice(0, cut), bytes.slice(cut)];
    const fetchImpl: typeof fetch = async () =>
      new Response(
        new ReadableStream({
          start(controller) {
            chunks.forEach((c) => controller.enqueue(c));
            controller.close();
          },
        }),
        { status: 200 }
      );
    const events = await collect(fetchImpl);
    assert.deepEqual(
      events.map((e) => e.type),
      ['sources', 'text', 'text', 'done']
    );
    assert.equal(events.filter((e): e is Extract<ChatEvent, { type: 'text' }> => e.type === 'text').map((e) => e.delta).join(''), 'Hello wörld [1]');
  });

  it('posts the message and the conversation id as JSON', async () => {
    let seen: { url: string; init?: RequestInit } | undefined;
    const fetchImpl: typeof fetch = async (url, init) => {
      seen = { url: String(url), init };
      return sseFetch([full])(url, init);
    };
    await collect(fetchImpl, { conversationId: 'c9' });
    assert.equal(seen?.url, 'http://engine.test/v1/chat');
    assert.equal(seen?.init?.method, 'POST');
    assert.deepEqual(JSON.parse(String(seen?.init?.body)), { message: 'hi', conversationId: 'c9' });
    await collect(fetchImpl);
    assert.deepEqual(JSON.parse(String(seen?.init?.body)), { message: 'hi' });
  });

  it('reports a pre-stream HTTP error with its friendly message', async () => {
    const fetchImpl: typeof fetch = async () => new Response(JSON.stringify({ code: 'rate_limited', message: 'x' }), { status: 429, headers: { 'Content-Type': 'application/json' } });
    await assert.rejects(collect(fetchImpl), (error: unknown) => error instanceof ChatRequestError && error.info.kind === 'busy');
  });

  it('passes the Retry-After header on to the friendly message', async () => {
    const fetchImpl: typeof fetch = async () =>
      new Response(JSON.stringify({ code: 'rate_limited', message: 'x' }), { status: 429, headers: { 'Content-Type': 'application/json', 'Retry-After': '180' } });
    await assert.rejects(collect(fetchImpl), (error: unknown) => error instanceof ChatRequestError && /about 3 minutes/.test(error.info.message));
    const tooLong: typeof fetch = async () => new Response(JSON.stringify({ code: 'question_too_long', message: 'x' }), { status: 413 });
    await assert.rejects(collect(tooLong), (error: unknown) => error instanceof ChatRequestError && error.info.kind === 'too_long');
  });

  it('treats 503 and a non-JSON proxy error as unavailable', async () => {
    await assert.rejects(collect(async () => new Response('{"code":"not_ready"}', { status: 503 })), (e: unknown) => e instanceof ChatRequestError && e.info.kind === 'unavailable');
    await assert.rejects(collect(async () => new Response('<html>bad gateway</html>', { status: 502 })), (e: unknown) => e instanceof ChatRequestError && e.info.kind === 'unavailable');
  });

  it('treats a network failure as engine unavailable', async () => {
    const fetchImpl: typeof fetch = async () => {
      throw new TypeError('Failed to fetch');
    };
    await assert.rejects(collect(fetchImpl), (e: unknown) => e instanceof ChatRequestError && e.info.kind === 'unavailable');
  });

  it('reports a stream that ends without a terminal event as interrupted', async () => {
    const partial = full.slice(0, full.indexOf('event: done'));
    await assert.rejects(collect(sseFetch([partial])), (e: unknown) => e instanceof ChatRequestError && e.info.kind === 'interrupted');
  });

  it('delivers an in-stream error event and ignores anything after the terminal event', async () => {
    const events = await collect(sseFetch([sse('text', { delta: 'a' }), sse('error', { code: 'llm_unavailable', message: 'down' }), sse('text', { delta: 'late' })]));
    assert.deepEqual(
      events.map((e) => e.type),
      ['text', 'error']
    );
  });

  it('delivers a terminal event whose closing blank line is a lone CR at the end of the stream', async () => {
    const donePayload = JSON.stringify({ conversationId: 'c', messageId: 'm', outcome: 'answered', citations: [] });
    const events = await collect(sseFetch([`event: done\ndata: ${donePayload}\r\r`]));
    assert.deepEqual(
      events.map((e) => e.type),
      ['done']
    );
  });

  it('settles right after the terminal event even if the server keeps the connection open', async () => {
    let cancelled = false;
    const fetchImpl: typeof fetch = async () =>
      new Response(
        new ReadableStream({
          start(c) {
            c.enqueue(encoder.encode(full)); // never closed
          },
          cancel() {
            cancelled = true;
          },
        }),
        { status: 200 }
      );
    const events = await Promise.race([
      collect(fetchImpl),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error('still waiting on the open connection')), 2000)),
    ]);
    assert.equal(events[events.length - 1]?.type, 'done');
    assert.ok(cancelled);
  });

  it('rethrows the AbortError, not a ChatRequestError, when the caller aborts', async () => {
    const controller = new AbortController();
    const fetchImpl: typeof fetch = async (_url, init) =>
      new Response(
        new ReadableStream({
          start(c) {
            c.enqueue(encoder.encode(sse('text', { delta: 'a' })));
            init?.signal?.addEventListener('abort', () => c.error(new DOMException('aborted', 'AbortError')));
          },
        }),
        { status: 200 }
      );
    const events: ChatEvent[] = [];
    const run = streamChat({ endpoint: 'http://engine.test', message: 'hi', fetchImpl, signal: controller.signal }, (e) => {
      events.push(e);
      controller.abort();
    });
    await assert.rejects(run, (e: unknown) => !(e instanceof ChatRequestError) && (e as Error).name === 'AbortError');
    assert.equal(events.length, 1);
  });
});

describe('streamChatRecovering', () => {
  const encoder = new TextEncoder();
  const notFound = (): Response =>
    new Response(JSON.stringify({ code: 'conversation_not_found', message: 'x' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  const stream = (): Response =>
    new Response(
      encoder.encode(
        sse('sources', { conversationId: 'c2', messageId: 'm', sources: [] }) +
          sse('done', { conversationId: 'c2', messageId: 'm', citations: [], outcome: 'answered' })
      ),
      { status: 200 }
    );

  it('retries once without the conversation id when the engine does not know it', async () => {
    const bodies: unknown[] = [];
    const fetchImpl: typeof fetch = async (_url, init) => {
      bodies.push(JSON.parse(String(init?.body)));
      return bodies.length === 1 ? notFound() : stream();
    };
    const events: ChatEvent[] = [];
    let expired = 0;
    await streamChatRecovering({ endpoint: 'http://engine.test', message: 'hi', conversationId: 'old', fetchImpl }, (e) => events.push(e), () => (expired += 1));
    assert.deepEqual(bodies, [{ message: 'hi', conversationId: 'old' }, { message: 'hi' }]);
    assert.equal(expired, 1);
    assert.deepEqual(
      events.map((e) => e.type),
      ['sources', 'done']
    );
  });

  it('does not retry more than once', async () => {
    let calls = 0;
    const fetchImpl: typeof fetch = async () => {
      calls += 1;
      return notFound();
    };
    await assert.rejects(
      streamChatRecovering({ endpoint: 'http://engine.test', message: 'hi', conversationId: 'old', fetchImpl }, () => undefined, () => undefined),
      (e: unknown) => e instanceof ChatRequestError && e.info.kind === 'conversation_expired'
    );
    assert.equal(calls, 2);
  });

  it('does not retry a request that carried no conversation id, nor other errors', async () => {
    let calls = 0;
    const fetchImpl: typeof fetch = async () => {
      calls += 1;
      return notFound();
    };
    await assert.rejects(streamChatRecovering({ endpoint: 'http://engine.test', message: 'hi', fetchImpl }, () => undefined, () => assert.fail('no retry')));
    assert.equal(calls, 1);
    const busy: typeof fetch = async () => new Response(JSON.stringify({ code: 'rate_limited' }), { status: 429 });
    await assert.rejects(
      streamChatRecovering({ endpoint: 'http://engine.test', message: 'hi', conversationId: 'old', fetchImpl: busy }, () => undefined, () => assert.fail('no retry')),
      (e: unknown) => e instanceof ChatRequestError && e.info.kind === 'busy'
    );
  });

  it('does not retry after the caller aborted', async () => {
    const controller = new AbortController();
    const fetchImpl: typeof fetch = async () => {
      controller.abort();
      return notFound();
    };
    await assert.rejects(
      streamChatRecovering({ endpoint: 'http://engine.test', message: 'hi', conversationId: 'old', fetchImpl, signal: controller.signal }, () => undefined, () => assert.fail('no retry')),
      (e: unknown) => e instanceof ChatRequestError
    );
  });
});
