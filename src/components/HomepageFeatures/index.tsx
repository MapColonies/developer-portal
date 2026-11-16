import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Raster',
    Svg: require('@site/static/img/raster.svg').default,
    description: 'Imagery and orthophotos served as map tiles.',
    to: '/docs/MapColonies/Raster/overview',
  },
  {
    title: 'Vector',
    Svg: require('@site/static/img/vector/vector_logo.svg').default,
    description: 'Geographic features as points, lines and polygons.',
    to: '/docs/MapColonies/vector/vector-overview',
  },
  {
    title: '3D',
    Svg: require('@site/static/img/3d.svg').default,
    description: '3D models of terrain and buildings as 3D Tiles.',
    to: '/docs/MapColonies/3D/3d-overview',
  },
  {
    title: 'DEM',
    Svg: require('@site/static/img/dem.svg').default,
    description: 'Digital elevation models: the height of the ground at every point.',
    to: '/docs/MapColonies/DEM/dem-overview',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map(({title, Svg, description, to}) => (
            <Link key={title} to={to} className={styles.card}>
              <Svg className={styles.featureSvg} role="img" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
              <span className={styles.more}>Read the docs →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
