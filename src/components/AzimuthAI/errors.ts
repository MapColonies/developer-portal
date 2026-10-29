import type { Outcome } from './types';

export type ChatErrorKind =
  | 'busy'
  | 'budget'
  | 'unavailable'
  | 'conversation_expired'
  | 'too_long'
  | 'invalid'
  | 'interrupted'
  | 'internal';

export interface ChatErrorInfo {
  kind: ChatErrorKind;
  /** friendly, user-facing */
  message: string;
  /** the engine no longer knows the conversation: the widget must start a new one */
  resetConversation?: boolean;
}

const UNAVAILABLE = 'AzimuthAI is unavailable right now. Please try again later.';
const INTERNAL = 'Something went wrong while answering. Please try again.';

/**
 * Seconds to wait from a `Retry-After` header value: delta-seconds or an HTTP date. Undefined when absent,
 * unparseable or not in the future.
 */
export function parseRetryAfter(value: string | null | undefined, now: number = Date.now()): number | undefined {
  const text = value?.trim();
  if (!text) {
    return undefined;
  }
  const seconds = /^\d+$/.test(text) ? Number(text) : (Date.parse(text) - now) / 1000;
  return Number.isFinite(seconds) && seconds > 0 ? Math.ceil(seconds) : undefined;
}

/** "about 3 minutes", "about 5 hours"; undefined when there is no usable wait (or it is longer than a day and a half). */
export function formatWait(seconds: number | undefined): string | undefined {
  if (seconds === undefined || !Number.isFinite(seconds) || seconds <= 0) {
    return undefined;
  }
  const minutes = Math.max(1, Math.ceil(seconds / 60));
  if (minutes < 60) {
    return `about ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
  }
  const hours = Math.round(minutes / 60);
  return hours <= 36 ? `about ${hours} ${hours === 1 ? 'hour' : 'hours'}` : undefined;
}

/**
 * Friendly message for a failure before the stream started: the HTTP status, the JSON error `code` if there was one
 * and the `Retry-After` wait in seconds if the response carried one.
 */
export function errorFromHttp(status: number, code?: string, retryAfterSeconds?: number): ChatErrorInfo {
  if (status === 429) {
    const wait = formatWait(retryAfterSeconds);
    if (code === 'budget_exhausted') {
      return {
        kind: 'budget',
        message: `AzimuthAI has reached its daily limit. Please try again ${wait ? `in ${wait}` : 'tomorrow'}.`,
      };
    }
    return { kind: 'busy', message: `AzimuthAI is busy, try again in ${wait ?? 'a minute'}.` };
  }
  if (status === 503 || status === 502 || status === 504) {
    return { kind: 'unavailable', message: UNAVAILABLE };
  }
  if (status === 404 && code === 'conversation_not_found') {
    return {
      kind: 'conversation_expired',
      message: 'This conversation has expired. Your next question starts a new one.',
      resetConversation: true,
    };
  }
  if (status === 413) {
    return { kind: 'too_long', message: 'That question is too long. Please shorten it, or split it into smaller questions, and try again.' };
  }
  if (status === 400) {
    return { kind: 'invalid', message: 'AzimuthAI could not read that question. Please rephrase it and try again.' };
  }
  return { kind: 'internal', message: INTERNAL };
}

/** Friendly message for the in-stream `error` event. */
export function errorFromStreamEvent(code: string): ChatErrorInfo {
  switch (code) {
    case 'budget_exhausted':
      return errorFromHttp(429, 'budget_exhausted');
    case 'llm_unavailable':
      return { kind: 'unavailable', message: 'The AI service behind AzimuthAI is unavailable right now. Please try again later.' };
    default:
      return { kind: 'internal', message: INTERNAL };
  }
}

/** Shown with the answer when the engine had forgotten the conversation and the question was sent again as a new one. */
export const CONVERSATION_EXPIRED_NOTICE = 'This conversation expired; starting a new one';

/** The request never produced an HTTP response (offline, DNS, CORS, engine down). */
export const NETWORK_ERROR: ChatErrorInfo = { kind: 'unavailable', message: UNAVAILABLE };

/** The stream closed without a `done` or `error` event. */
export const INTERRUPTED_ERROR: ChatErrorInfo = {
  kind: 'interrupted',
  message: 'The connection was interrupted before the answer was complete. Please try again.',
};

/** Note shown with the answer text for outcomes other than a normal answer. */
export function outcomeNote(outcome: Outcome): string | undefined {
  switch (outcome) {
    case 'not_covered':
      return 'This does not seem to be covered by the developer portal documentation.';
    case 'refused':
      return 'AzimuthAI cannot help with that request.';
    case 'handoff':
      return 'This question needs a person. Please contact the MapColonies team.';
    default:
      return undefined;
  }
}

/**
 * The one note to show under a finished message. The engine already writes the text of a not_covered, refused or
 * handoff answer, so the widget's own note is only a fallback for a message that has no text.
 */
export function noteForMessage(outcome: Outcome | undefined, text: string): string | undefined {
  return outcome && text.trim() === '' ? outcomeNote(outcome) : undefined;
}
