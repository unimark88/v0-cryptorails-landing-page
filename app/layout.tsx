import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Crypto Payment Gateway | USDT Payment Gateway | CryptoRails',
  description: 'CryptoRails is a scalable crypto payment gateway and wallet infrastructure platform for businesses. Accept USDT and multi-chain crypto payments, generate segregated wallets, and automatically consolidate funds into a secure treasury wallet.',
  generator: 'v0.app',
  keywords: [
    'crypto payment gateway',
    'USDT payment gateway',
    'cryptocurrency payments',
    'crypto wallet infrastructure',
    'multi-chain payments',
    'blockchain payments',
    'crypto payment API',
    'USDT payment processing',
    'crypto treasury management',
    'segregated wallets',
    'crypto payment solution',
    'enterprise crypto payments',
    'stablecoin payments',
    'web3 payments',
    'crypto payment integration'
  ],
  authors: [{ name: 'CryptoRails' }],
  creator: 'CryptoRails',
  publisher: 'CryptoRails',
  metadataBase: new URL('https://cryptorails.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cryptorails.io',
    siteName: 'CryptoRails',
    title: 'CryptoRails - Crypto Payment Gateway & Wallet Infrastructure',
    description: 'Accept USDT and multi-chain crypto payments with CryptoRails. Enterprise-grade crypto payment gateway with segregated wallets, automatic fund consolidation, and treasury management.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'CryptoRails - Crypto Payment Gateway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoRails - Crypto Payment Gateway & Wallet Infrastructure',
    description: 'Accept USDT and multi-chain crypto payments with CryptoRails. Enterprise-grade payment infrastructure for businesses.',
    images: ['/logo.png'],
    creator: '@cryptorails',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#050816]">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
