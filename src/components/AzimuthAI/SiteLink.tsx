import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import type { ResolvedLink } from './links';

interface SiteLinkProps {
  /** a link that resolveLink() allowed */
  link: ResolvedLink;
  className?: string;
  title?: string;
  'aria-label'?: string;
  children: ReactNode;
}

/**
 * Pages of the running site go through Docusaurus <Link> (client-side routing, so the chat and its conversation
 * survive the click); other allowed origins are plain links.
 */
export default function SiteLink({ link, children, ...props }: SiteLinkProps): JSX.Element {
  return link.internalPath !== undefined ? (
    <Link to={link.internalPath} {...props}>
      {children}
    </Link>
  ) : (
    <a href={link.href} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
