import type { ChatEvent, Outcome, Source, SourceKind } from './types';

/** One dispatched server-sent event, before the payload is interpreted. */
export interface SseMessage {
  event: string;
  data: string;
}

export interface SseParser {
  /** Feed the next decoded chunk (any size, split anywhere); returns the events completed by it. */
  push: (chunk: string) => SseMessage[];
}

const LINE_END = /\r\n|\n|\r/;

/**
 * Incremental parser for the `text/event-stream` format. Handles chunk boundaries inside lines, CRLF/CR/LF
 * line ends (including a CRLF split across chunks), `: comment` lines (the engine's keep-alive pings),
 * multi-line `data:` fields and a leading BOM. An event still incomplete when the stream ends is dropped.
 */
export function createSseParser(): SseParser {
  let buffer = '';
  let started = false;
  let eventName = '';
  let dataLines: string[] = [];

  const handleLine = (line: string, out: SseMessage[]): void => {
    if (line === '') {
      if (dataLines.length > 0) {
        out.push({ event: eventName || 'message', data: dataLines.join('\n') });
      }
      eventName = '';
      dataLines = [];
      return;
    }
    if (line.startsWith(':')) {
      return;
    }
    const colon = line.indexOf(':');
    const field = colon === -1 ? line : line.slice(0, colon);
    let value = colon === -1 ? '' : line.slice(colon + 1);
    if (value.startsWith(' ')) {
      value = value.slice(1);
    }
    if (field === 'event') {
      eventName = value;
    } else if (field === 'data') {
      dataLines.push(value);
    }
    // `id` and `retry` are not used by the engine
  };

  return {
    push(chunk: string): SseMessage[] {
      buffer += chunk;
      if (!started && buffer.length > 0) {
        started = true;
        if (buffer.charCodeAt(0) === 0xfeff) {
          buffer = buffer.slice(1);
        }
      }
      const out: SseMessage[] = [];
      for (;;) {
        const match = LINE_END.exec(buffer);
        if (!match) {
          break;
        }
        // a trailing lone CR may be the first half of a CRLF; wait for the next chunk to know
        if (match[0] === '\r' && match.index + 1 === buffer.length) {
          break;
        }
        handleLine(buffer.slice(0, match.index), out);
        buffer = buffer.slice(match.index + match[0].length);
      }
      return out;
    },
  };
}

const OUTCOMES: readonly string[] = ['answered', 'not_covered', 'refused', 'handoff'];
const KINDS: readonly string[] = ['page', 'openapi', 'worked_example'];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseSource(value: unknown): Source | null {
  if (!isRecord(value)) {
    return null;
  }
  const { id, title, section, url, kind } = value;
  if (typeof id !== 'number' || !Number.isInteger(id) || typeof title !== 'string' || typeof url !== 'string') {
    return null;
  }
  return {
    id,
    title,
    url,
    section: typeof section === 'string' && section !== '' ? section : undefined,
    kind: typeof kind === 'string' && KINDS.includes(kind) ? (kind as SourceKind) : 'page',
  };
}

function parseSources(value: unknown): Source[] | null {
  if (!Array.isArray(value)) {
    return null;
  }
  const sources: Source[] = [];
  for (const item of value) {
    const source = parseSource(item);
    if (source === null) {
      return null;
    }
    sources.push(source);
  }
  return sources;
}

/**
 * Interprets a dispatched SSE message as a contract event. Returns null for unknown event names, malformed JSON
 * or a payload that does not match the contract, so a bad event is skipped rather than crashing the widget.
 */
export function parseChatEvent(message: SseMessage): ChatEvent | null {
  let payload: unknown;
  try {
    payload = JSON.parse(message.data);
  } catch {
    return null;
  }
  if (!isRecord(payload)) {
    return null;
  }
  switch (message.event) {
    case 'sources': {
      const sources = parseSources(payload.sources);
      if (typeof payload.conversationId !== 'string' || typeof payload.messageId !== 'string' || sources === null) {
        return null;
      }
      return { type: 'sources', conversationId: payload.conversationId, messageId: payload.messageId, sources };
    }
    case 'text':
      return typeof payload.delta === 'string' ? { type: 'text', delta: payload.delta } : null;
    case 'done': {
      const citations = parseSources(payload.citations);
      if (
        typeof payload.conversationId !== 'string' ||
        typeof payload.messageId !== 'string' ||
        citations === null ||
        typeof payload.outcome !== 'string' ||
        !OUTCOMES.includes(payload.outcome)
      ) {
        return null;
      }
      return {
        type: 'done',
        conversationId: payload.conversationId,
        messageId: payload.messageId,
        citations,
        outcome: payload.outcome as Outcome,
      };
    }
    case 'error':
      return typeof payload.code === 'string' && typeof payload.message === 'string'
        ? { type: 'error', code: payload.code, message: payload.message }
        : null;
    default:
      return null;
  }
}
