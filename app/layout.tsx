import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import './nqx.css'

const _cormorant = Cormorant_Garamond({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const _manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const siteUrl = 'https://la16casino.vercel.app/'
const siteTitle =
  'La Casino — официальный сайт, зеркало и вход для игры онлайн с телефона вечером.'
const siteDescription =
  'La Casino и Ля казино — один бренд. Официальный сайт, рабочее зеркало и спокойный вход с телефона: как отличить настоящий адрес, где касса и с чего начать, если домен вдруг молчит. Без обещаний удачи.'

const keywords = [
  'La Casino',
  'La Casino зеркало',
  'La Casino играть',
  'La Casino официальный',
  'La Casino официальный сайт',
  'La казино',
  'Ля казино',
  'Ля казино зеркало',
  'Ля казино зеркало рабочее',
  'Ля казино играть',
  'Ля казино онлайн',
  'Ля казино официальный',
  'Ля казино официальный сайт',
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords,
  authors: [{ name: 'La Casino', url: siteUrl }],
  alternates: {
    canonical: siteUrl,
    languages: { ru: siteUrl },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'La Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/felt-edge.jpg',
        width: 960,
        height: 524,
        alt: 'Латунная фишка на зелёном сукне',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/felt-edge.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C4A3C',
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: siteTitle,
  description: siteDescription,
  url: siteUrl,
  inLanguage: 'ru',
  isPartOf: {
    '@type': 'WebSite',
    name: 'La Casino',
    url: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${_cormorant.variable} ${_manrope.variable} bg-background`}>
      <head>
        <meta name="author" content="La Casino" />
        <meta name="language" content="ru" />
        <meta httpEquiv="content-language" content="ru" />
        <meta name="yandex-verification" content="b5408941af5affa4" />
        <link rel="author" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Дополнительные пользовательские теги: вставляйте свои meta, link и verification ниже этой строки. */}
      </head>
      <body className={`${_manrope.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
