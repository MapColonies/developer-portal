import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { CustomFields } from '@site/src/customFields';


export default function PlaygroundFrame(props): JSX.Element {
  const playgroundName = props.name;
  const { mapColoniesBaseURLS: { playground: playgroundURL} } = (useDocusaurusContext().siteConfig.customFields as CustomFields);
  return (
    <div className="container">
      <div>
          <iframe src={`${playgroundURL}/${playgroundName}`} title={`Playground - ${playgroundName}`} />
      </div>
    </div>
  );
}
