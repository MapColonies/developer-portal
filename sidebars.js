/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  ogcSidebar: [{type: 'autogenerated', dirName: 'ogc'}],
  docSidebar: [{ type: 'autogenerated', dirName: 'MapColonies'}],
  gettingStartedSidebar: [
    {
      type: 'category',
      label: "Getting Started",
      items: [
        {
          type: 'category',
          label: 'Raster',
          items: [
            {
              type: 'doc',
              label: 'Raster',
              id: 'MapColonies/Raster/Guides/raster-getting-started'
            },
            {
              type: 'doc',
              label: 'Raster Export',
              id: 'MapColonies/Raster/Guides/raster-export-guide'
            },
          ]
        },
        {
          type: 'category',
          label: '3D',
          collapsed: false,
          collapsible: true,
          items: [
            {
              type: 'doc',
              label: 'Getting Started',
              id: 'MapColonies/3D/Guides/3d-getting-started'
            },
            {
              type: 'doc',
              label: 'Extract Height from Mesh',
              id: 'MapColonies/3D/Guides/mesh-height-extraction'
            },
            {
              type: 'doc',
              label: 'Min Max Heigh Mesh Extraction',
              id: 'MapColonies/3D/Guides/mesh-min-max-height-extraction'
            },
            {
              type: 'doc',
              label: 'Enable Hardware Acceleration',
              id: 'MapColonies/3D/Guides/enable-hardware-acc'
            },
          ] 
        },
        {
          type: 'category',
          label: 'DEM',
          collapsed: false,
          collapsible: true,
          items: [
            {
              type: 'doc',
              label: 'Getting Started',
              id: 'MapColonies/DEM/Guides/dem-getting-started'
            },
          ] 
        },
      ]
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
