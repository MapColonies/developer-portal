/**
 * The engine appends a Suggested request after its answer: a label line, "Suggested request (checked against the
 * <spec title> OpenAPI spec)" or "Suggested request (not checked: built from a documented example)", then the
 * request as a fenced code block. The widget needs no special event for it; it recognises the label line.
 */
const SUGGESTED_REQUEST_LABEL = /^Suggested request \([^\n]*\):?$/;

export function isSuggestedRequestLabel(text: string): boolean {
  return SUGGESTED_REQUEST_LABEL.test(text.trim());
}
