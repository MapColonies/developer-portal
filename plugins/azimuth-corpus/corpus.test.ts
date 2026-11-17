// Run with `npm test`. Uses the node:test runner; jiti (already a Docusaurus dependency) compiles the TypeScript.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { assembleCorpus, canonicalJson, computeVersion } from './corpus';
import { extractSections } from './html';
import { normalizePath, stripBaseUrl } from './paths';
import type { CorpusPage } from './types';

const options = { baseUrl: '/developer-portal/', siteUrl: 'https://mapcolonies.github.io', title: 'Title' };

const article = (inner: string) => `<html><body><article><div class="theme-doc-markdown markdown"><header><h1>Title</h1></header>${inner}</div></article></body></html>`;

const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const codeBlock = (language: string | null, lines: string[], title?: string) =>
  `<div class="${language ? `language-${language} ` : ''}codeBlockContainer_x theme-code-block">${title ? `<div class="codeBlockTitle_x">${title}</div>` : ''}` +
  `<div class="codeBlockContent_x"><pre tabindex="0" class="prism-code language-${language ?? 'text'}"><code>` +
  lines.map((line) => `<span class="token-line"><span class="token plain">${escapeHtml(line)}</span><br></span>`).join('') +
  `</code></pre></div></div>`;

describe('extractSections', () => {
  it('returns null when the page has no doc article', () => {
    assert.equal(extractSections('<html><body><main>nope</main></body></html>', options), null);
  });

  it('splits sections by heading with the heading path, anchor and text before the first heading', () => {
    const html = article(
      '<p>Intro</p><h2 id="a">A<a href="#a" class="hash-link">​</a></h2><p>In A</p><h3 id="a1">A1</h3><p>In A1</p><h2 id="b">B</h2><p>In B</p>',
    );
    assert.deepEqual(extractSections(html, options), [
      { headingPath: [], blocks: [{ type: 'text', text: 'Intro' }] },
      { headingPath: ['A'], anchor: 'a', blocks: [{ type: 'text', text: 'In A' }] },
      { headingPath: ['A', 'A1'], anchor: 'a1', blocks: [{ type: 'text', text: 'In A1' }] },
      { headingPath: ['B'], anchor: 'b', blocks: [{ type: 'text', text: 'In B' }] },
    ]);
  });

  it('keeps a first content H1 that differs from the page title as the outermost heading', () => {
    const html = `<html><body><article><div class="theme-doc-markdown markdown"><header><h1 id="general">General</h1></header><p>Intro</p><h2 id="a">A</h2><p>In A</p><h1 id="d">Domain</h1><p>In D</p></div></article></body></html>`;
    assert.deepEqual(extractSections(html, options), [
      { headingPath: ['General'], anchor: 'general', blocks: [{ type: 'text', text: 'Intro' }] },
      { headingPath: ['General', 'A'], anchor: 'a', blocks: [{ type: 'text', text: 'In A' }] },
      { headingPath: ['Domain'], anchor: 'd', blocks: [{ type: 'text', text: 'In D' }] },
    ]);
  });

  it('keeps headings without content, except parents that are already in the next headingPath', () => {
    const html = article('<h2 id="p">Parent</h2><h3 id="c">Child</h3><p>text</p><h3 id="e">Types of things</h3><h3 id="n">Next</h3><p>more</p><h2 id="last">Only diagram</h2>');
    assert.deepEqual(extractSections(html, options), [
      { headingPath: ['Parent', 'Child'], anchor: 'c', blocks: [{ type: 'text', text: 'text' }] },
      { headingPath: ['Parent', 'Types of things'], anchor: 'e', blocks: [] },
      { headingPath: ['Parent', 'Next'], anchor: 'n', blocks: [{ type: 'text', text: 'more' }] },
      { headingPath: ['Only diagram'], anchor: 'last', blocks: [] },
    ]);
  });

  it('reduces inlined data: images to their alt text and keeps normal images', () => {
    const html = article('<table><tr><th>Icon</th></tr><tr><td><img alt="Artwork-14.svg" src="data:image/png;base64,iVBORw0KGgo="></td></tr></table><p><img alt="Diagram" src="/developer-portal/img/d.png"></p>');
    const [section] = extractSections(html, options)!;
    assert.deepEqual(section!.blocks, [{ type: 'text', text: '| Icon |\n| --- |\n| Artwork-14.svg |\n\n![Diagram](/img/d.png)' }]);
  });

  it('keeps every tab panel, hidden ones included, labelled by the tab', () => {
    const html = article(
      '<div class="tabs-container"><ul role="tablist" class="tabs"><li role="tab" aria-selected="true">Specific Layer</li><li role="tab">Fetch All Layers</li></ul>' +
        '<div class="margin-top--md"><div role="tabpanel"><p>one layer</p></div><div role="tabpanel" hidden=""><p>all layers</p>' +
        codeBlock('xml', ['<a>', '  <b/>', '</a>']) +
        '</div></div></div><p>after</p>',
    );
    const [section] = extractSections(html, options)!;
    assert.deepEqual(section!.blocks, [
      { type: 'text', text: 'one layer', tabs: ['Specific Layer'] },
      { type: 'text', text: 'all layers', tabs: ['Fetch All Layers'] },
      { type: 'code', language: 'xml', code: '<a>\n  <b/>\n</a>', tabs: ['Fetch All Layers'] },
      { type: 'text', text: 'after' },
    ]);
  });

  it('keeps the language, title, line breaks and blank lines of code blocks, and null for a fence without language', () => {
    const html = article(codeBlock('bash', ['curl -X POST \\', '  --data "{}"', '', 'echo done'], 'Request') + codeBlock(null, ['<URL>/x?a=1&b=2']));
    const [section] = extractSections(html, options)!;
    assert.deepEqual(section!.blocks, [
      { type: 'code', language: 'bash', code: 'curl -X POST \\\n  --data "{}"\n\necho done', title: 'Request' },
      { type: 'code', language: null, code: '<URL>/x?a=1&b=2' },
    ]);
  });

  it('renders admonitions, inline markup, lists and tables as Markdown and strips the baseUrl from links', () => {
    const html = article(
      '<div class="theme-admonition theme-admonition-info alert"><div class="admonitionHeading_x">info</div><div class="admonitionContent_x"><p>Mind the <code>token</code>.</p></div></div>' +
        '<p>See <a href="/developer-portal/docs/a/b#c">the page</a>, <a href="https://mapcolonies.github.io/developer-portal/docs/x">x</a> and <a href="https://example.com/">ext</a>. <strong>Bold</strong> &lt;TOKEN&gt;</p>' +
        '<ul><li>one</li><li>two<ul><li>nested</li></ul></li></ul>' +
        '<table><thead><tr><th>Name</th><th>Info</th></tr></thead><tbody><tr><td><code>a|b</code></td><td>x<br>y</td></tr></tbody></table>',
    );
    const [section] = extractSections(html, options)!;
    assert.deepEqual(section!.blocks, [
      {
        type: 'text',
        text: [
          '**Info:** Mind the `token`.',
          'See [the page](/docs/a/b#c), [x](/docs/x) and [ext](https://example.com/). **Bold** <TOKEN>',
          '- one\n- two\n  - nested',
          '| Name | Info |\n| --- | --- |\n| `a\\|b` | x<br>y |',
        ].join('\n\n'),
      },
    ]);
  });

  it('emits a code block inside a list item as its own block', () => {
    const html = article('<ul><li>run:' + codeBlock('sh', ['ls']) + '</li><li>done</li></ul>');
    const [section] = extractSections(html, options)!;
    assert.deepEqual(section!.blocks, [
      { type: 'text', text: '- run:' },
      { type: 'code', language: 'sh', code: 'ls' },
      { type: 'text', text: '- done' },
    ]);
  });
});

describe('paths', () => {
  it('strips the baseUrl and the site origin', () => {
    assert.equal(stripBaseUrl('/developer-portal/docs/a', '/developer-portal/'), '/docs/a');
    assert.equal(stripBaseUrl('/developer-portal', '/developer-portal/'), '/');
    assert.equal(stripBaseUrl('/developer-portal#x', '/developer-portal/'), '/#x');
    assert.equal(stripBaseUrl('https://mapcolonies.github.io/developer-portal/docs/a?b=1', '/developer-portal/', 'https://mapcolonies.github.io'), '/docs/a?b=1');
    assert.equal(stripBaseUrl('/developer-portal-other/x', '/developer-portal/'), '/developer-portal-other/x');
    assert.equal(stripBaseUrl('/docs/a', '/'), '/docs/a');
  });

  it('normalizes routes', () => {
    assert.equal(normalizePath('docs/a/'), '/docs/a');
    assert.equal(normalizePath('/'), '/');
  });
});

describe('corpus version', () => {
  const page = (path: string, text: string): CorpusPage => ({ path, title: path, sections: [{ headingPath: [], blocks: [{ type: 'text', text }] }] });
  const spec = { id: 's', title: 'S', path: '/s/api', specFile: '/openapi/s.yaml', spec: { openapi: '3.0.0', info: { title: 'S' } } };

  it('is stable across builds: generatedAt and key order do not matter', () => {
    const a = assembleCorpus([page('/a', 'x')], [spec], new Date('2026-01-01T00:00:00Z'));
    const b = assembleCorpus([page('/a', 'x')], [{ ...spec, spec: { info: { title: 'S' }, openapi: '3.0.0' } }], new Date('2026-02-02T00:00:00Z'));
    assert.match(a.version, /^[0-9a-f]{64}$/);
    assert.equal(a.version, b.version);
    assert.notEqual(a.generatedAt, b.generatedAt);
  });

  it('changes when a page or a spec changes', () => {
    const base = assembleCorpus([page('/a', 'x')], [spec], new Date()).version;
    assert.notEqual(base, assembleCorpus([page('/a', 'x!')], [spec], new Date()).version);
    assert.notEqual(base, assembleCorpus([page('/a', 'x')], [{ ...spec, title: 'T' }], new Date()).version);
    assert.notEqual(base, assembleCorpus([page('/a', 'x'), page('/b', 'y')], [spec], new Date()).version);
  });

  it('sorts pages by path and specs by id', () => {
    const corpus = assembleCorpus([page('/b', 'x'), page('/a', 'x')], [{ ...spec, id: 'z' }, spec], new Date());
    assert.deepEqual(corpus.pages.map((p) => p.path), ['/a', '/b']);
    assert.deepEqual(corpus.openapi.map((s) => s.id), ['s', 'z']);
    assert.equal(corpus.version, computeVersion(corpus.pages, corpus.openapi));
  });

  it('serializes canonically', () => {
    assert.equal(canonicalJson({ b: [{ d: 1, c: 2 }], a: null }), '{"a":null,"b":[{"c":2,"d":1}]}');
  });
});
