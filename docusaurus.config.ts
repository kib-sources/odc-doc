import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ODC-DOC',
  tagline: 'ODC документация: протокол, движение, база по CBDC.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://odc.kib.su',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KIB', // Usually your GitHub org/user name.
  projectName: 'odc-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kib-sources/odc-doc',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ODC',
      logo: {
        alt: 'KIB logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'dcSidebar',
          position: 'left',
          label: 'База',
        },
        {
          type: 'docSidebar',
          sidebarId: 'communitySidebar',
          position: 'left',
          label: 'Движение ODC',
        },
        {
          type: 'docSidebar',
          sidebarId: 'project3Sidebar',
          position: 'left',
          label: 'ODCv3',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Архив (разобрать)',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/kib-sources/odc-doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Короткие видео',
          items: [
            {
              label: 'Приём с банкомата',
              href: 'https://rutube.ru/video/private/1d5964f131f17c8d7bbc8e1a62e650f6/?p=5UAJqBakZcq8sgWozPyB6g',
            },
            {
              label: 'Online передача',
              href: 'https://rutube.ru/video/private/1d5964f131f17c8d7bbc8e1a62e650f6/?p=5UAJqBakZcq8sgWozPyB6g',
            },
            {
              label: 'Offline передача (без сервера)',
              href: 'https://rutube.ru/video/private/1d5964f131f17c8d7bbc8e1a62e650f6/?p=5UAJqBakZcq8sgWozPyB6g',
            },
            {
              label: 'Эмиссия банкнот',
              href: 'https://rutube.ru/video/private/1d5964f131f17c8d7bbc8e1a62e650f6/?p=5UAJqBakZcq8sgWozPyB6g',
            },
          ],
        },
        {
          title: 'Примеры анализа цифровых следов ODCv3',
          items: [
            {
              label: 'Кейс 1',
              href: 'https://rutube.ru/video/private/1d5964f131f17c8d7bbc8e1a62e650f6/?p=5UAJqBakZcq8sgWozPyB6g',
            },
            {
              label: 'Кейс 2',
              href: 'https://rutube.ru/video/private/1d5964f131f17c8d7bbc8e1a62e650f6/?p=5UAJqBakZcq8sgWozPyB6g',
            },
            {
              label: 'Кейс 3',
              href: 'https://rutube.ru/video/private/1d5964f131f17c8d7bbc8e1a62e650f6/?p=5UAJqBakZcq8sgWozPyB6g',
            },
          ],
        },
        {
          title: 'Движение ODC',
          items: [
            {
              label: 'Вводная статья',
              to: '/docs/community/intro',
            },
            {
              label: 'Канал ODC',
              href: 'https://t.me/odc_kib',
            },
            {
              label: 'Как вступить в движение',
              to: '/docs/community/participants/join-to-us',
            },
            {
              label: 'LGPL исходники ODC',
              to: '/docs/project3/fraimworks/',
            },
          ],
        },
        {
          title: 'КИБ',
          items: [
            {
              label: 'Канал КИБ',
              href: 'https://t.me/kibinfo',
            },
            {
              label: 'Сайт КИБ',
              href: 'http://kib.su',
            },
          ],
        },
      ],
      copyright: `Copyleft 🄯 ${new Date().getFullYear()} ODC, КИБ`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
