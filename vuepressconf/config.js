import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { pwaPlugin } from '@vuepress/plugin-pwa'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SurfingBodies',
  base: '/sbod/',
  description: 'Documentation site for the SurfingBodies physical preperation system. A fundamental tool for surf performance.',
  //head: [
  //  ['link', { rel: 'icon', href: '/img/logo.png'}],
  //],
  plugins: [
    pwaPlugin({
      favicon: '/img/logo.png',
    }),
  ],
  theme: defaultTheme({
    repo: 'iarxm/sbod',
    logo: '/img/logo-x.png',
    navbar: [
      {
        text: 'Docs',
        link: '/docs/index'
      },
    ],
    sidebar: [
      {
        text: 'Docs',
        link: '/docs/index.html',
        children: [
        {
          text: 'Introduction',
          link: '/docs/index.html'
         },
         {
           text: 'Getting Started',
           link: 'docs/get/index.html',
           children: [
             {
             text: 'Getting Started',
             link: 'docs/get/index.html',
             },
             {
             text: 'Resources',
             link: 'docs/get/links.html',
             },
            ],
         },
        {
          text: 'Resources',
          link: 'docs/resources.html'
         },
        {
          text: 'Principles',
          link: 'docs/principles.html'
        },
        ],
      },

    ],
  }),
  bundler: viteBundler(),
})
