import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Raster',
    Svg: require('@site/static/img/raster.svg').default,
    link: '/docs/MapColonies/Raster/overview',
    description: (
      <>
        An image is worth a thousand words, A map is worth a thousand <strong>images</strong>
      </>
    ),
  },
  {
    title: 'Vector',
    Svg: require('@site/static/img/vector/vector_logo.svg').default,
    link: '/docs/MapColonies/vector/vector-overview',
    description: (
      <>
        A coordinate-based data model that represents geographic features as points, lines, and polygons.
      </>
    ),
  },
  {
    title: '3D',
    Svg: require('@site/static/img/3d.svg').default,
    link: '/docs/MapColonies/3D/3d-overview',
    description: (
      <>
        A photorealistic 3D model<br/>
        Worth a thousand rasters
      </>
    ),
  },
  {
    title: 'DEM',
    Svg: require('@site/static/img/dem.svg').default,
    link: '/docs/MapColonies/DEM/dem-overview',
    description: (
      <>
        <strong>A Digital Elevation Model</strong> (DEM) is a representation of the topography of the Earth or another surface in digital format, that is, by coordinates and numerical descriptions of altitude
      </>
    ),
  },
];

function Feature({title, Svg, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
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
