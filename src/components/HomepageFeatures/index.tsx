import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Raster',
    Svg: require('@site/static/img/raster.svg').default,
    description: (
      <>
        An image worth a thousand words, A map worths a thousand of <strong>images</strong>
      </>
    ),
  },
  {
    title: 'Vector',
    Svg: require('@site/static/img/vector_logo.svg').default,
    description: (
      <>
        A coordinate-based data model that represents geographic features as points, lines, and polygons.
      </>
    ),
  },
  {
    title: '3D',
    Svg: require('@site/static/img/3d.svg').default,
    description: (
      <>
        Worths a thousand of rasters
      </>
    ),
  },
  {
    title: 'DEM',
    Svg: require('@site/static/img/dem.svg').default,
    description: (
      <>
        <strong>A Digital Elevation Model</strong> (DEM) is a representation of the topography of the Earth or another surface in digital format, that is, by coordinates and numerical descriptions of altitude
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
