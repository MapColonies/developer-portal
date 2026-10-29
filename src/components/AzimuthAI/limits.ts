/**
 * Client-side length hint. The engine's own limit (413 `question_too_long`) stays authoritative and is never
 * mirrored here: this soft limit only tells the writer early that a question is longer than the docs questions
 * AzimuthAI is meant for, and never blocks sending.
 */
export const QUESTION_SOFT_LIMIT = 2000;

/** the counter appears once the question is this close to the soft limit */
const HINT_FROM = 0.8;

export interface LengthHint {
  /** "1,700 / 2,000" */
  counter: string;
  /** set once the soft limit is passed */
  warning?: string;
}

/** Undefined while the question is comfortably short. Counts UTF-16 code units, like the engine does. */
export function lengthHint(text: string, softLimit: number = QUESTION_SOFT_LIMIT): LengthHint | undefined {
  const length = text.length;
  if (length < softLimit * HINT_FROM) {
    return undefined;
  }
  const counter = `${length.toLocaleString('en-US')} / ${softLimit.toLocaleString('en-US')}`;
  return length > softLimit
    ? { counter, warning: 'This is a long question. Shorter, focused questions work best.' }
    : { counter };
}
