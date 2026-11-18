import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { CustomFields } from '@site/src/customFields';

import styles from './styles.module.css';

export default function PlaygroundFrame(props): JSX.Element {
  const playgroundName = props.name;
  const { mapColoniesBaseURLS: { playground: playgroundURL} } = (useDocusaurusContext().siteConfig.customFields as CustomFields);
  const src = `${playgroundURL}/${playgroundName}`;
  return (
    <div className={styles.frame}>
      <div className={styles.bar}>
        <span>Playground · {playgroundName}</span>
        <a href={src} target="_blank" rel="noopener noreferrer">
          Open in new tab ↗
        </a>
      </div>
      <iframe src={src} title={`Playground - ${playgroundName}`} className={styles.iframe} />
    </div>
  );
}
