export type TextDirection = 'ltr' | 'rtl';

/** a letter of a right-to-left script (Hebrew, Arabic, Syriac, Thaana, N'Ko, ...) */
const RTL_LETTER = /^[\p{Script=Hebrew}\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Nko}\p{Script=Samaritan}\p{Script=Mandaic}]$/u;
const LETTER = /^\p{L}$/u;

const RLM = '‏';
const LRM = '‎';

/**
 * Direction of plain text from its first strong character, as the Unicode bidi algorithm and `dir="auto"` do: the
 * first letter of a right-to-left script gives 'rtl', the first letter of any other script 'ltr' (an explicit
 * LRM/RLM mark counts as strong too). Digits, punctuation and symbols are neutral; text without any strong
 * character is 'ltr'.
 */
export function detectDirection(text: string): TextDirection {
  for (const char of text) {
    if (char === RLM) {
      return 'rtl';
    }
    if (char === LRM) {
      return 'ltr';
    }
    if (LETTER.test(char)) {
      return RTL_LETTER.test(char) ? 'rtl' : 'ltr';
    }
  }
  return 'ltr';
}

/**
 * Removes what is not prose from Markdown, so that it cannot decide the direction: fenced code (an unclosed fence,
 * as in a half-streamed answer, runs to the end), inline code, link destinations, bare URLs and `[n]` citation
 * markers. A Hebrew answer that opens with a code block or a link still reads as Hebrew.
 */
export function proseOf(markdown: string): string {
  const lines: string[] = [];
  let fence: string | null = null;
  for (const line of markdown.split('\n')) {
    const match = /^ {0,3}(`{3,}|~{3,})/.exec(line);
    if (fence === null) {
      if (match) {
        fence = match[1];
        continue;
      }
      lines.push(line);
    } else if (match && match[1][0] === fence[0] && match[1].length >= fence.length) {
      fence = null;
    }
  }
  return lines
    .join('\n')
    .replace(/`+[^`]*`+/g, ' ')
    .replace(/\]\([^)\s]*\)/g, ']')
    .replace(/\b(?:https?:\/\/|www\.)\S+/gi, ' ')
    .replace(/\[\d{1,3}\]/g, ' ');
}

/** Direction of one chat message written in Markdown (an answer): the first strong character of its prose. */
export function detectMessageDirection(markdown: string): TextDirection {
  return detectDirection(proseOf(markdown));
}
