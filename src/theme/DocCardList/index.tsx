import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
  findFirstSidebarItemLink,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';
import type {Props} from '@theme/DocCardList';
import styles from './styles.module.css';

const PageSymbol = () => (
  <svg viewBox="0 0 48 32" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="4" width="40" height="24" />
    <path d="M17 4v24M30 4v24M4 16h40" />
  </svg>
);

const SectionSymbol = () => (
  <svg viewBox="0 0 48 32" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="10" width="32" height="18" />
    <path d="M9 10V5h32v18h-5" />
  </svg>
);

function Row({href, symbol, title, description, kind}: {
  href: string;
  symbol: React.ReactNode;
  title: string;
  description?: string;
  kind: string;
}) {
  return (
    <Link href={href} className={styles.row}>
      {symbol}
      <span className={styles.text}>
        <b>{title}</b>
        {description && <span>{description}</span>}
      </span>
      <span className={styles.kind}>{kind}</span>
    </Link>
  );
}

function ItemRow({item}: {item: PropSidebarItem}) {
  const doc = useDocById(item.type === 'link' ? item.docId ?? undefined : undefined);
  if (item.type === 'category') {
    const href = findFirstSidebarItemLink(item);
    if (!href) {
      return null;
    }
    const count = item.items.length;
    return (
      <Row
        href={href}
        symbol={<SectionSymbol />}
        title={item.label}
        description={item.description}
        kind={count === 1 ? '1 item' : `${count} items`}
      />
    );
  }
  if (item.type === 'link') {
    return (
      <Row href={item.href} symbol={<PageSymbol />} title={item.label} description={item.description ?? doc?.description} kind="page" />
    );
  }
  return null;
}

function CurrentCategoryList({className}: Props) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList({items, className}: Props): JSX.Element {
  if (!items) {
    return <CurrentCategoryList className={className} />;
  }
  return (
    <section className={clsx(styles.rows, className)}>
      {filterDocCardListItems(items).map((item, index) => (
        <ItemRow key={index} item={item} />
      ))}
    </section>
  );
}
