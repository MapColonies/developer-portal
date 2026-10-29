import React, { isValidElement, useMemo, type ReactNode } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import { linkCitationMarkers } from './citations';
import { buildAllowedOrigins, resolveLink, type LinkContext } from './links';
import type { Source } from './types';
import styles from './styles.module.css';

interface MarkdownProps {
  text: string;
  /** the passages offered to the LLM; `[n]` markers in `text` link to the matching one */
  sources: Source[];
  /** siteConfig.url */
  siteUrl: string;
  /** siteConfig.baseUrl */
  baseUrl: string;
}

const remarkPlugins = [remarkGfm];

const CITATION_TEXT = /^\[\d+\]$/;

function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(textOf).join('');
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textOf(node.props.children);
  }
  return '';
}

/**
 * Renders the model's Markdown. No raw HTML is ever interpreted (react-markdown escapes it, and no rehype-raw
 * is installed). Links survive only when resolveLink() allows them; images are never fetched.
 */
export default function Markdown({ text, sources, siteUrl, baseUrl }: MarkdownProps): JSX.Element {
  const linkContext = useMemo<LinkContext>(() => {
    const locationOrigin = typeof window === 'undefined' ? '' : window.location.origin;
    return { allowedOrigins: buildAllowedOrigins(siteUrl, locationOrigin), locationOrigin, baseUrl };
  }, [siteUrl, baseUrl]);

  const components = useMemo<Components>(
    () => ({
      a({ href, children }) {
        const link = resolveLink(href, linkContext);
        if (link === null) {
          return <span>{children}</span>;
        }
        const source = sources.find((s) => s.url === href);
        const isMarker = CITATION_TEXT.test(textOf(children));
        const props = {
          className: isMarker ? styles.citationMarker : undefined,
          'aria-label': isMarker && source ? `Source ${source.id}: ${source.title}` : undefined,
          title: isMarker && source ? source.title : undefined,
        };
        return link.internalPath !== undefined ? (
          <Link to={link.internalPath} {...props}>
            {children}
          </Link>
        ) : (
          <a href={link.href} rel="noopener noreferrer" {...props}>
            {children}
          </a>
        );
      },
      img({ alt }) {
        return <span>{alt}</span>;
      },
      pre({ children }) {
        const code = React.Children.toArray(children).find((child) => isValidElement(child));
        const props = isValidElement<{ className?: string; children?: ReactNode }>(code) ? code.props : {};
        const language = /language-([^\s]+)/.exec(props.className ?? '')?.[1];
        return (
          // code is always left-to-right, even inside a right-to-left message
          <div dir="ltr" className={styles.code}>
            <CodeBlock language={language}>{textOf(props.children).replace(/\n$/, '')}</CodeBlock>
          </div>
        );
      },
      table({ children }) {
        return (
          <div className={styles.tableWrap}>
            <table>{children}</table>
          </div>
        );
      },
    }),
    [linkContext, sources]
  );

  const markdown = useMemo(() => linkCitationMarkers(text, sources), [text, sources]);

  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
      {markdown}
    </ReactMarkdown>
  );
}
