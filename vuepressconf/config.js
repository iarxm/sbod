import { pwaPlugin } from '@vuepress/plugin-pwa'

export default defineUserConfig({
  base: '/sbod/',
  plugins: [
    pwaPlugin({
      favicon: '/img/logo.png',
    }),
  ],
  theme: defaultTheme({
    repo: 'iarxm/sbod',
    logo: '/img/logo-x.png',
 
