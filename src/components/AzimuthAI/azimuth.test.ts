// Run with `npm test`. Covers the widget's pure logic: SSE parser, link allow-list, citation markers, error mapping and
// the fetch/stream plumbing (with a fake fetch). The React components are checked in a browser.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { chatUrl, ChatRequestError, streamChat } from './api';
import { linkCitationMarkers } from './citations';
import { errorFromHttp, errorFromStreamEvent, outcomeNote } from './errors';
import { buildAllowedOrigins, isSiteRelative, resolveLink, type LinkContext } from './links';
import { createSseParser, parseChatEvent } from './sse';
import type { ChatEvent, Source } from './types';

const sse = (event: string, data: unknown): string => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;

const SOURCE: Source = { id: 1, title: 'Elevation', section: 'Usage > Query', url: 'https://mapcolonies.github.io/developer-portal/docs/dem#usage', kind: 'page' };
const SOURCE_2: Source = { id: 2, title: 'API', url: 'https://mapcolonies.github.io/developer-portal/docs/api', kind: 'openapi' };

describe('createSseParser', () => {
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
    assert.equal(resolveLink('http://localhost:3000/docs/x', context)?.href, 'http://localhost:3000/docs/x');
  });

  it('allows site-relative links', () => {
    assert.deepEqual(resolveLink('/developer-portal/docs/x?a=1#y', context), { href: '/developer-portal/docs/x?a=1#y', internalPath: '/docs/x?a=1#y' });
    assert.deepEqual(resolveLink('/other/page', context), { href: '/other/page' });
  });

  it('offers client-side routing only for pages of the running site under the base URL', () => {
    assert.equal(resolveLink('https://mapcolonies.github.io/developer-portal/docs/x', context)?.internalPath, undefined);
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
