import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LayerStack from '@site/src/components/LayerStack';

import styles from './index.module.css';

const steps = [
  {title: 'Get a token', text: 'Ask our team for a token with the permissions you need.', to: '/docs/MapColonies/authentication'},
  {title: 'Find a layer', text: 'Search the catalog for the layer you need, then get its metadata and the link to the service you want.'},
  {
    title: 'Make a request',
    text: 'Call WMTS, WFS or 3D Tiles. Send the token in the x-api-key header or the token query parameter.',
  },
];

// Decorative graticule labels on the frame, not real coordinates of the drawing.
const ticks = [
  {side: 'top', at: '18%', label: '34°45′E'},
  {side: 'top', at: '48%', label: '34°50′E'},
  {side: 'top', at: '78%', label: '34°55′E'},
  {side: 'left', at: '30%', label: '32°05′N'},
  {side: 'left', at: '72%', label: '32°00′N'},
];

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="MapColonies developer portal">
      <main className="container">
        <div className={styles.sheet}>
          {ticks.map((t) => (
            <span
              key={t.label}
              aria-hidden="true"
              className={t.side === 'top' ? styles.tickTop : styles.tickLeft}
              style={t.side === 'top' ? {left: t.at} : {top: t.at}}>
              {t.label}
            </span>
          ))}
          <header className={styles.hero}>
            <div className={styles.copy}>
              <h1 className={styles.title}>The world, in layers.</h1>
              <p>
                From the ground up: elevation, imagery, features and 3D models, each served on open OGC standards. Get a
                token and call your first layer in minutes.
              </p>
              <div className={styles.buttons}>
                <Link className="button button--primary button--lg" to="/docs/MapColonies/Raster/Guides/raster-getting-started">
                  Get started
                </Link>
                <Link className={`button button--lg ${styles.outline}`} to="/docs/MapColonies/Raster/overview">
                  Browse docs
                </Link>
              </div>
              <p className={styles.standards}>Raster · Vector · 3D · DEM · OGC</p>
            </div>
            <LayerStack />
          </header>
          <section className={styles.route}>
            <h2>How it works</h2>
            <ol>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.waypoint}>{i + 1}</span>
                  <b>{s.to ? <Link to={s.to}>{s.title}</Link> : s.title}</b>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
    </Layout>
  );
}
