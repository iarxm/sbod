import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SurfingBodies',
  description: 'Documentation site for the SurfingBodies physical preperation system targeted at surf performance',
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
        link: '/sbod/',
        children: [
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
