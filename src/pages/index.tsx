import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const steps = [
  {title: 'Get a token', text: 'Ask our team for a token with the permissions you need.', to: '/docs/MapColonies/authentication'},
  {title: 'Find a layer', text: 'Search the catalog for the layer you need, then get its metadata and the link to the service you want.'},
  {
    title: 'Make a request',
    text: 'Call WMTS, WFS or 3D Tiles. Send the token in the x-api-key header or the token query parameter.',
  },
];

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="MapColonies developer portal">
      <header className="hero-glow">
        <div className="container">
          <span className="eyebrow">Developer portal</span>
          <h1 className="display-title">Maps, terrain and 3D data for your apps.</h1>
          <p className={styles.subtitle}>
            Raster, Vector, 3D and DEM services behind open OGC standards. Pick a domain, get a token and make your
            first request in minutes.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/MapColonies/Raster/Guides/raster-getting-started">
              Get started
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/MapColonies/Raster/overview">
              Browse docs
            </Link>
          </div>
          <p className={styles.standards}>WGS 84 · EPSG:4326 · WMTS · WFS · 3D Tiles</p>
        </div>
      </header>
      <main>
        <HomepageFeatures />
        <section className="container margin-bottom--xl">
          <h2 className={styles.stepsTitle}>How it works</h2>
          <ol className={styles.steps}>
            {steps.map((s) => (
              <li key={s.title}>
                <b>{s.to ? <Link to={s.to}>{s.title}</Link> : s.title}</b>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </Layout>
  );
}
