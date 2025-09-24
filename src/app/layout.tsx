import './globals.scss'
import './variables.scss'

import type { Metadata } from 'next'
import { Bruno_Ace_SC } from 'next/font/google'

import Header from '@/components/Header'

const BrunoAceSCSans = Bruno_Ace_SC({
  weight: '400',
  variable: '--font-bruno-ace-sc',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Front-end developer portfolio using NEXT/TS/SCSS'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${BrunoAceSCSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
