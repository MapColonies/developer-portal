import * as cheerio from 'cheerio';
import type { AnyNode, CheerioAPI, Element } from 'cheerio';
import { stripBaseUrl } from './paths';
import type { CorpusBlock, CorpusSection } from './types';

/**
 * Turns the server-rendered HTML of a Docusaurus doc page into corpus sections.
 *
 * Docusaurus renders every `<TabItem>` panel at build time (non-selected ones just carry `hidden`), so
 * all tab text is in the HTML. Selectors below were checked against real Docusaurus 3.5.2 output; the
 * CSS-module class names (`codeBlockTitle_xxxx`) are matched by their stable prefix.
 */

export interface ExtractOptions {
  baseUrl: string;
  siteUrl: string;
  /**
   * The page's title (front matter or first H1, as the docs plugin resolved it). Docusaurus renders the first
   * content `# heading` inside the article `<header>`; when its text differs from this title it is kept as a
   * level-1 heading so it is not lost.
   */
  title?: string;
}

/** The flat stream the walker produces; `buildSections` folds it into sections. */
type Item =
  | { kind: 'heading'; level: number; text: string; id?: string }
  | { kind: 'text'; md: string; tabs: string[] }
  | { kind: 'code'; language: string | null; code: string; title?: string; tabs: string[] };

interface Ctx {
  $: CheerioAPI;
  options: ExtractOptions;
  tabs: string[];
}

const ARTICLE_SELECTOR = 'article .theme-doc-markdown';
const HEADING = /^h([1-6])$/;
const SKIPPED_INLINE = new Set(['svg', 'button', 'script', 'style', 'noscript', 'template']);
const BLOCK_TAGS = new Set(['p', 'div', 'ul', 'ol', 'table', 'pre', 'blockquote', 'details', 'hr', 'figure', 'section', 'header', 'nav', 'aside', 'center', 'dl', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

/** Returns the page sections, or `null` when the HTML has no doc article. */
export function extractSections(html: string, options: ExtractOptions): CorpusSection[] | null {
  const $ = cheerio.load(html);
  const article = $(ARTICLE_SELECTOR).first();
  if (article.length === 0) {
    return null;
  }
  const ctx: Ctx = { $, options, tabs: [] };
  return buildSections(renderFlow(article.get(0)!.children, ctx));
}

// ---------------------------------------------------------------- sections

function buildSections(items: Item[]): CorpusSection[] {
  const sections: CorpusSection[] = [];
  const stack: { level: number; text: string }[] = [];
  let current: CorpusSection = { headingPath: [], blocks: [] };
  let currentLevel = 0;

  /**
   * A section without blocks is kept (headingPath and anchor only) unless it is the text-before-the-first-heading
   * placeholder, or `nested`: its heading is then the parent of the next section and already in that section's headingPath.
   */
  const close = (nested = false) => {
    if (current.blocks.length > 0 || (current.headingPath.length > 0 && !nested)) {
      sections.push(current);
    }
  };

  for (const item of items) {
    if (item.kind === 'heading') {
      close(item.level > currentLevel);
      currentLevel = item.level;
      while (stack.length > 0 && stack[stack.length - 1]!.level >= item.level) {
        stack.pop();
      }
      stack.push({ level: item.level, text: item.text });
      current = item.id ? { headingPath: stack.map((h) => h.text), anchor: item.id, blocks: [] } : { headingPath: stack.map((h) => h.text), blocks: [] };
    } else if (item.kind === 'text') {
      const last = current.blocks[current.blocks.length - 1];
      if (last?.type === 'text' && sameTabs(last.tabs, item.tabs)) {
        last.text += `\n\n${item.md}`;
      } else {
        current.blocks.push(withTabs({ type: 'text', text: item.md }, item.tabs));
      }
    } else {
      const block: CorpusBlock = { type: 'code', language: item.language, code: item.code };
      if (item.title) {
        block.title = item.title;
      }
      current.blocks.push(withTabs(block, item.tabs));
    }
  }
  close();
  return sections;
}

function withTabs<T extends CorpusBlock>(block: T, tabs: string[]): T {
  if (tabs.length > 0) {
    block.tabs = [...tabs];
  }
  return block;
}

function sameTabs(a: string[] | undefined, b: string[]): boolean {
  const left = a ?? [];
  return left.length === b.length && left.every((tab, i) => tab === b[i]);
}

// ---------------------------------------------------------------- block level

/** Renders a node's children: inline runs become paragraphs, block elements become items. */
function renderFlow(nodes: readonly AnyNode[], ctx: Ctx): Item[] {
  const items: Item[] = [];
  let run: AnyNode[] = [];

  const flushRun = () => {
    const md = inlineToMarkdown(run, ctx).trim();
    if (md) {
      items.push({ kind: 'text', md, tabs: ctx.tabs });
    }
    run = [];
  };

  for (const node of nodes) {
    if (node.type === 'tag' && isBlock(node)) {
      flushRun();
      items.push(...renderBlock(node, ctx));
    } else {
      run.push(node);
    }
  }
  flushRun();
  return items;
}

function isBlock(el: Element): boolean {
  return BLOCK_TAGS.has(el.tagName);
}

function renderBlock(el: Element, ctx: Ctx): Item[] {
  const { $ } = ctx;
  const node = $(el);
  const tag = el.tagName;

  const heading = HEADING.exec(tag);
  if (heading) {
    const text = inlineToMarkdown(el.children, ctx, { plain: true }).replace(/\s+/g, ' ').trim();
    return text ? [{ kind: 'heading', level: Number(heading[1]), text, id: node.attr('id') }] : [];
  }

  if (node.hasClass('tabs-container')) {
    return renderTabs(el, ctx);
  }
  if (node.hasClass('theme-code-block')) {
    return [renderCodeBlock(el, ctx)];
  }
  if (node.hasClass('theme-admonition')) {
    return renderAdmonition(el, ctx);
  }

  switch (tag) {
    case 'header':
      return renderHeader(el, ctx);
    case 'nav':
      return [];
    case 'pre':
      return [codeItem(el, null, undefined, ctx)];
    case 'ul':
    case 'ol':
      return renderList(el, ctx);
    case 'table': {
      const md = renderTable(el, ctx);
      return md ? [{ kind: 'text', md, tabs: ctx.tabs }] : [];
    }
    case 'blockquote':
      return renderQuote(el, ctx);
    case 'details':
      return renderDetails(el, ctx);
    case 'hr':
      return [{ kind: 'text', md: '---', tabs: ctx.tabs }];
    default:
      // p, div, figure, section, ...: a plain container, its children carry the content
      return renderFlow(el.children, ctx);
  }
}

/**
 * The article `<header>` holds the page's first content H1. When it merely repeats the page title it is dropped (the
 * title is stored as `title`); otherwise it is a real heading (a disambiguating title, or an outline heading such as
 * `# General`) and is kept as a level-1 heading.
 */
function renderHeader(el: Element, ctx: Ctx): Item[] {
  const { $ } = ctx;
  const title = ctx.options.title === undefined ? undefined : normalizeSpace(ctx.options.title);
  return $(el)
    .find('h1')
    .get()
    .flatMap((h1) => {
      const text = normalizeSpace(inlineToMarkdown(h1.children, ctx, { plain: true }));
      return text && text !== title ? [{ kind: 'heading' as const, level: 1, text, id: $(h1).attr('id') }] : [];
    });
}

function renderTabs(container: Element, ctx: Ctx): Item[] {
  const { $ } = ctx;
  const labels = $(container)
    .children('ul[role="tablist"]')
    .first()
    .children('li')
    .map((_, li) => normalizeSpace($(li).text()))
    .get();
  const panels = $(container).children('div').children('[role="tabpanel"]').get();

  const items: Item[] = [];
  panels.forEach((panel, i) => {
    const label = labels[i];
    const inner: Ctx = label ? { ...ctx, tabs: [...ctx.tabs, label] } : ctx;
    items.push(...renderFlow(panel.children, inner));
  });
  return items;
}

function renderCodeBlock(container: Element, ctx: Ctx): Item {
  const { $ } = ctx;
  const node = $(container);
  const language = /(?:^|\s)language-(\S+)/.exec(node.attr('class') ?? '')?.[1] ?? null;
  const title = normalizeSpace(node.find('[class*="codeBlockTitle"]').first().text()) || undefined;
  const pre = node.find('pre').first();
  return codeItem(pre.get(0) ?? container, language, title, ctx);
}

function codeItem(pre: Element, language: string | null, title: string | undefined, ctx: Ctx): Item {
  const { $ } = ctx;
  const lines = $(pre).find('.token-line');
  const code = lines.length > 0 ? lines.map((_, line) => $(line).text()).get().join('\n') : $(pre).text();
  const item: Item = { kind: 'code', language, code: code.replace(/\u200B/g, ''), tabs: ctx.tabs };
  if (title) {
    item.title = title;
  }
  return item;
}

function renderAdmonition(el: Element, ctx: Ctx): Item[] {
  const { $ } = ctx;
  const node = $(el);
  const heading = normalizeSpace(node.find('[class*="admonitionHeading"]').first().text());
  const label = heading ? heading.charAt(0).toUpperCase() + heading.slice(1) : 'Note';
  const content = node.find('[class*="admonitionContent"]').first();
  const items = renderFlow(content.length ? content.get(0)!.children : [], ctx);
  return prefixFirstText(items, `**${label}:** `, ctx);
}

function renderDetails(el: Element, ctx: Ctx): Item[] {
  const { $ } = ctx;
  const node = $(el);
  const summary = normalizeSpace(node.children('summary').first().text());
  const body = node.contents().filter((_, child) => !(child.type === 'tag' && child.tagName === 'summary'));
  const items = renderFlow(body.get(), ctx);
  return summary ? [{ kind: 'text', md: `**${summary}**`, tabs: ctx.tabs }, ...items] : items;
}

function renderQuote(el: Element, ctx: Ctx): Item[] {
  return renderFlow(el.children, ctx).map((item) => {
    if (item.kind === 'heading') {
      return { kind: 'text', md: quote(`**${item.text}**`), tabs: ctx.tabs };
    }
    return item.kind === 'text' ? { ...item, md: quote(item.md) } : item;
  });
}

const quote = (md: string) => md.split('\n').map((line) => `> ${line}`).join('\n');

function renderList(list: Element, ctx: Ctx): Item[] {
  const { $ } = ctx;
  const ordered = list.tagName === 'ol';
  const start = Number($(list).attr('start')) || 1;
  const out: Item[] = [];
  let pending: string[] = [];

  const flush = () => {
    if (pending.length > 0) {
      out.push({ kind: 'text', md: pending.join('\n'), tabs: ctx.tabs });
      pending = [];
    }
  };

  listItems(list).forEach((li, i) => {
    const marker = ordered ? `${start + i}. ` : '- ';
    const pad = ' '.repeat(marker.length);
    const items = renderFlow(li.children, ctx).map((item) => (item.kind === 'heading' ? ({ kind: 'text', md: `**${item.text}**`, tabs: ctx.tabs } as const) : item));

    let first = true;
    for (const item of items) {
      if (item.kind === 'text') {
        const lines = item.md.split('\n').map((line, n) => (first && n === 0 ? marker + line : pad + line));
        first = false;
        pending.push(...lines);
      } else {
        // A code block inside a list item cannot stay inside a text block: close the list text, emit the code, continue.
        if (first) {
          pending.push(marker.trimEnd());
          first = false;
        }
        flush();
        out.push(item);
      }
    }
    if (first) {
      pending.push(marker.trimEnd());
    }
  });

  flush();
  return out;
}

/**
 * The `li` children of a list. Authors sometimes wrap items in inline tags (`<ul><i><li>`), which the HTML parser
 * keeps as wrappers, so those are looked through; nested lists are not.
 */
function listItems(list: Element): Element[] {
  const items: Element[] = [];
  for (const child of list.children) {
    if (child.type !== 'tag') {
      continue;
    }
    if (child.tagName === 'li') {
      items.push(child);
    } else if (child.tagName !== 'ul' && child.tagName !== 'ol') {
      items.push(...listItems(child));
    }
  }
  return items;
}

function renderTable(table: Element, ctx: Ctx): string {
  const { $ } = ctx;
  const rows = $(table)
    .find('tr')
    .map((_, tr) =>
      [
        $(tr)
          .children('th, td')
          .map((__, cell) => cellToMarkdown(cell.children, ctx))
          .get(),
      ],
    )
    .get() as unknown as string[][];
  if (rows.length === 0) {
    return '';
  }

  const width = Math.max(...rows.map((row) => row.length));
  const line = (row: string[]) => `| ${Array.from({ length: width }, (_, i) => row[i] ?? '').join(' | ')} |`;
  const [header, ...body] = rows as [string[], ...string[][]];
  return [line(header), line(Array.from({ length: width }, () => '---')), ...body.map(line)].join('\n');
}

/** A table cell must stay on one line: line breaks and list items become `<br>`. */
function cellToMarkdown(nodes: readonly AnyNode[], ctx: Ctx): string {
  return inlineToMarkdown(nodes, ctx, { cell: true })
    .replace(/\s*\n\s*/g, '<br>')
    .replace(/(?:<br>\s*)+$/g, '')
    .replace(/^(?:\s*<br>)+/g, '')
    .replace(/\|/g, '\\|')
    .trim();
}

function prefixFirstText(items: Item[], prefix: string, ctx: Ctx): Item[] {
  const [first, ...rest] = items;
  if (first?.kind === 'text') {
    return [{ ...first, md: prefix + first.md }, ...rest];
  }
  return [{ kind: 'text', md: prefix.trimEnd(), tabs: ctx.tabs }, ...items];
}

// ---------------------------------------------------------------- inline

interface InlineMode {
  /** Headings: text only, no emphasis or links. */
  plain?: boolean;
  /** Table cells: `<br>` for breaks, lists flattened. */
  cell?: boolean;
}

function inlineToMarkdown(nodes: readonly AnyNode[], ctx: Ctx, mode: InlineMode = {}): string {
  let out = '';
  for (const node of nodes) {
    if (node.type === 'text') {
      out += node.data.replace(/\u200B/g, '').replace(/\s+/g, ' ');
    } else if (node.type === 'tag') {
      out += inlineElement(node, ctx, mode);
    }
  }
  return out.replace(/ *\n */g, '\n');
}

function inlineElement(el: Element, ctx: Ctx, mode: InlineMode): string {
  const { $ } = ctx;
  const tag = el.tagName;
  if (SKIPPED_INLINE.has(tag) || $(el).hasClass('hash-link')) {
    return '';
  }
  const children = () => inlineToMarkdown(el.children, ctx, mode);

  switch (tag) {
    case 'br':
      return '\n';
    case 'code':
      return mode.plain ? $(el).text() : codeSpan($(el).text());
    case 'strong':
    case 'b':
      return mode.plain ? children() : wrap(children(), '**');
    case 'em':
    case 'i':
      return mode.plain ? children() : wrap(children(), '*');
    case 'del':
    case 's':
    case 'strike':
      return mode.plain ? children() : wrap(children(), '~~');
    case 'a': {
      const text = children();
      const href = $(el).attr('href');
      if (mode.plain || !href || !text.trim()) {
        return text;
      }
      return `[${text.trim()}](${stripBaseUrl(href, ctx.options.baseUrl, ctx.options.siteUrl)})`;
    }
    case 'img': {
      const alt = normalizeSpace($(el).attr('alt') ?? '');
      const src = $(el).attr('src');
      if (mode.plain || !alt || !src) {
        return '';
      }
      // Inlined `data:` images (base64 icons) are payload, not text: keep only the alt text.
      return src.startsWith('data:') ? alt : `![${alt}](${stripBaseUrl(src, ctx.options.baseUrl, ctx.options.siteUrl)})`;
    }
    case 'ul':
    case 'ol':
      return mode.cell ? `\n${listInCell(el, ctx)}\n` : children();
    case 'p':
    case 'div':
      return mode.cell ? `${children()}\n` : children();
    default:
      return children();
  }
}

function listInCell(list: Element, ctx: Ctx): string {
  const ordered = list.tagName === 'ol';
  return listItems(list)
    .map((li, i) => `${ordered ? `${i + 1}.` : '•'} ${inlineToMarkdown(li.children, ctx, { cell: true }).trim()}`)
    .join('\n');
}

/** Emphasis markers must hug the text, so surrounding whitespace moves outside of them. */
function wrap(content: string, marker: string): string {
  const match = /^(\s*)([\s\S]*?)(\s*)$/.exec(content)!;
  return match[2] ? `${match[1]}${marker}${match[2]}${marker}${match[3]}` : content;
}

function codeSpan(text: string): string {
  const flat = text.replace(/\s+/g, ' ');
  if (!flat.trim()) {
    return flat;
  }
  const longest = Math.max(0, ...(flat.match(/`+/g) ?? []).map((run) => run.length));
  const fence = '`'.repeat(longest + 1);
  const pad = flat.startsWith('`') || flat.endsWith('`') ? ' ' : '';
  return `${fence}${pad}${flat}${pad}${fence}`;
}

function normalizeSpace(text: string): string {
  return text.replace(/\u200B/g, '').replace(/\s+/g, ' ').trim();
}
