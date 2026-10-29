export type TextDirection = 'ltr' | 'rtl';

/** a letter of a right-to-left script (Hebrew, Arabic, Syriac, Thaana, N'Ko, ...) */
const RTL_LETTER =
  /^[\p{Script=Hebrew}\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Nko}\p{Script=Samaritan}\p{Script=Mandaic}]$/u;
const LETTER = /^\p{L}$/u;

const RLM = '‏';
const LRM = '‎';

/** a word: a run of letters, marks, digits and underscores that holds at least one letter */
const WORD = /[\p{L}\p{N}_][\p{L}\p{M}\p{N}_]*/gu;

/**
 * Direction of plain text. The first strong character decides, as in the Unicode bidi algorithm and `dir="auto"`:
 * the first letter of a right-to-left script gives 'rtl', any other letter 'ltr' (an explicit LRM/RLM mark counts as
 * strong too). One exception: text that opens with a left-to-right word but is mostly right-to-left, such as a
 * Hebrew sentence that starts with an English identifier ("WMTS לא מחזיר תמונות"), is 'rtl' when strictly more than
 * half of its words are right-to-left. Digits, punctuation and symbols are neutral; text without any strong
 * character is 'ltr'.
 */
export function detectDirection(text: string): TextDirection {
  let first: TextDirection | undefined;
  for (const char of text) {
    if (char === RLM) {
      return 'rtl';
    }
    if (char === LRM) {
      return 'ltr';
    }
    if (LETTER.test(char)) {
      first = RTL_LETTER.test(char) ? 'rtl' : 'ltr';
      break;
    }
  }
  if (first !== 'ltr') {
    return first ?? 'ltr';
  }
  let rtlWords = 0;
  let words = 0;
  for (const word of text.match(WORD) ?? []) {
    const letters = Array.from(word).filter((char) => LETTER.test(char));
    if (letters.length === 0) {
      continue;
    }
    words += 1;
    if (letters.some((char) => RTL_LETTER.test(char))) {
      rtlWords += 1;
    }
  }
  return rtlWords * 2 > words ? 'rtl' : 'ltr';
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

/** Direction of one chat message (an answer in Markdown, or a plain question): see detectDirection, on its prose. */
export function detectMessageDirection(markdown: string): TextDirection {
  return detectDirection(proseOf(markdown));
}
