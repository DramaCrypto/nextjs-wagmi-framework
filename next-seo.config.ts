import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s',
  defaultTitle: 'ShibamonGo',
  description:
    'hibamonGo is an ar game where you can capture Shibamon and collect treasure out in the world. It also helps to burn Shib!',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@shibamongo',
    site: '@shibamongo'
  },
  openGraph: {
    title: 'ShibamonGo',
    description:
      'hibamonGo is an ar game where you can capture Shibamon and collect treasure out in the world. It also helps to burn Shib!',
    images: [{ url: 'https://beta.shibamongo.com/hero.jpg' }],
  },
}
