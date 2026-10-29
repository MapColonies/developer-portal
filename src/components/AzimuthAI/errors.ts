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

/** Friendly message for a failure before the stream started (HTTP status plus the JSON error `code`, if any). */
export function errorFromHttp(status: number, code?: string): ChatErrorInfo {
  if (status === 429) {
    if (code === 'budget_exhausted') {
      return { kind: 'budget', message: 'AzimuthAI has reached its daily limit. Please try again tomorrow.' };
    }
    return { kind: 'busy', message: 'AzimuthAI is busy, try again in a minute.' };
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
    return { kind: 'too_long', message: 'That question is too long. Please shorten it and try again.' };
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
