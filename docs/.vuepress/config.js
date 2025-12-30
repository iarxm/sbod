import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SurfingBodies',
  base: '/sbod/',
  description: 'Documentation site for the SurfingBodies physical preperation system. A fundamental tool for surf performance.',
  theme: defaultTheme({
    repo: 'iarxm/sbod',
    logo: '/img/logo-x.png',
    navbar: [
      {
        text: 'Docs',
        link: '/sbod/index'
      },
    ],
    sidebar: [
      {
        text: 'Docs',
        link: '/sbod/index.html',
        children: [
        {
          text: 'Introduction',
          link: '/sbod/index.html'
         },
         {
           text: 'Getting Started',
           link: 'get/',
           children: [
             {
             text: 'Getting Started',
             link: 'get/',
             },
             {
             text: 'Resources',
             link: '/sbod/get/links.html',
             },
            ],
         },
        {
          text: 'Resources',
          link: '/sbod/resources.html'
         },
        {
          text: 'Principles',
          link: '/sbod/principles.html'
        },
        ],
      },

    ],
  }),
  bundler: viteBundler(),
})
