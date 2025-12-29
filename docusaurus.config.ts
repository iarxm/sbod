import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const config: Config = {
  title: 'SURFINGBODIES',
  tagline: 'Wiki for the SB surfing performance physical preperation system',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://iarxm.github.io',
  baseUrl: '/sbod/',
  organizationName: 'iarxm',
  projectName: 'sbod',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/iarxm/sbod',
            //'https://github.com/iarxm/sbod/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            //'https://github.com/iarxm/sbod/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/iarxm/sbod',

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SB',
      logo: {
        alt: 'SURFBODIES',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/iarxm/sbod',
          label: 'GitHub',
          position: 'right',
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
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/surfingbodies',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/surfingbodies',
            },
            {
              label: 'X',
              href: 'https://x.com/surfingbodies',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/surfingbodies',
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
            {
              label: 'GitHub',
              href: 'https://github.com/iarxm/sbod',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SurfingBodies. Iarom`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
