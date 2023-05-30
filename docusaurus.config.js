// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MapColonies Developer Portal',
  tagline: 'Developer Portal',
  favicon: 'img/libot_logo.ico',
  // Set the production url of your site here
  url: 'https://mapcolonies.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MapColonies', // Usually your GitHub org/user name.
  projectName: 'developer-portal', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  themes: ['@docusaurus/theme-mermaid'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    mapColoniesBaseURLS: {
      playground: process.env.PLAYGROUND_URL,
      puzzle: process.env.PUZZLE_URL,
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/MapColonies/developer-portal',
          blogSidebarCount: 'ALL',
          blogTitle: 'Release Notes',
          blogDescription: 'Discover MapColonies Releases!'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/openapi/vector/replica-server-openapi.yaml',
            route: '/docs/MapColonies/vector/services/replication/api',
          },
          {
            spec: 'static/openapi/raster/exporter-trigger-openapi.yaml',
            route: '/docs/MapColonies/raster/services/export/api',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MapColonies',
        logo: {
          alt: 'MapColonies',
          src: 'img/libot_logo.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: "left",
            label: "Getting Started"
          },
          {to: '/blog', label: 'Release Notes', position: 'left'},
          {to: process.env.PLAYGROUND_URL, label: 'Interactive Playground', position: 'right'},
          {to: process.env.CATALOG_APPLICATION_URL, label: 'Catalog App', position: 'right'},
          {to: process.env.PUZZLE_URL, label: 'Puzzle Game', position: 'right'},
          {
            type: 'docSidebar',
            sidebarId: 'ogcSidebar',
            position: 'left',
            label: 'OGC',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/MapColonies/Raster/Guides/raster-getting-started',
              },
              {
                label: 'Raster',
                to: '/docs/MapColonies/Raster/overview'
              },
              {
                label: 'Vector',
                to: '/docs/MapColonies/vector/vector-overview'
              },
              {
                label: '3D',
                to: '/docs/MapColonies/3D/3d-overview'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MapColonies, Inc. Built with Docusaurus with love ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
    }),
    markdown: {
      mermaid: true
    },
    plugins: [
      [require.resolve('@cmfcmf/docusaurus-search-local'), {}],
    ],
};

module.exports = config;
