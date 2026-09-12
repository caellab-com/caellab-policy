// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '虚舟实验室 策略文档',
  tagline: '虚舟实验室 策略文档',
  favicon: 'https://www.caellab.com/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://policy.caellab.org',
  baseUrl: '/',
  projectName: 'policy',

  onBrokenLinks: 'warn',   // 改为 warn，不阻止构建

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // 公共策略文档实例
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'public-policy',
        path: 'public-policy',
        routeBasePath: 'public-policy',
        sidebarPath: require.resolve('./public-policy/sidebars.js'),
        remarkPlugins: [
          require('./src/remark/fix-external-links.js'),
        ],
      },
    ],
    // 官网文档实例
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'www',
        path: 'www',
        routeBasePath: 'www',
        sidebarPath: require.resolve('./www/sidebars.js'),
        remarkPlugins: [
          require('./src/remark/fix-external-links.js'),
        ],
      },
    ],
    // 论坛文档实例
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'forum',
        path: 'forum',
        routeBasePath: 'forum',
        sidebarPath: require.resolve('./forum/sidebars.js'),
        remarkPlugins: [
          require('./src/remark/fix-external-links.js'),
        ],
      },
    ],
    // CaelLabID 文档实例
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'id',
        path: 'id',
        routeBasePath: 'id',
        sidebarPath: require.resolve('./id/sidebars.js'),
        remarkPlugins: [
          require('./src/remark/fix-external-links.js'),
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'trust',
        path: 'trust',
        routeBasePath: 'trust',
        sidebarPath: require.resolve('./trust/sidebars.js'),
        remarkPlugins: [
          require('./src/remark/fix-external-links.js'),
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://www.caellab.com/static/image/icon/logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      externalLinks: {
        rel: ['noopener'],
      },
      navbar: {
        title: 'Caellab Policy',
        logo: {
          alt: 'Caellab Policy Logo',
          src: 'https://www.caellab.com/static/image/icon/logo.png',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'publicPolicySidebar',
            docsPluginId: 'public-policy',
            position: 'left',
            label: '公共策略',
          },
          {
            type: 'docSidebar',
            sidebarId: 'wwwSidebar',
            docsPluginId: 'www',
            position: 'left',
            label: '官网',
          },
          {
            type: 'docSidebar',
            sidebarId: 'forumSidebar',
            docsPluginId: 'forum',
            position: 'left',
            label: '论坛',
          },
          {
            type: 'docSidebar',
            sidebarId: 'idSidebar',
            docsPluginId: 'id',
            position: 'left',
            label: 'CaelLabID',
          },
          {
            type: 'docSidebar',
            sidebarId: 'trustSidebar',
            docsPluginId: 'trust',
            position: 'left',
            label: '信任',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 虚舟实验室 (CaelLab).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;