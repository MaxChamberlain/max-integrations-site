import './globals.css'
import './animations.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../_components/Header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Integrations',
  description: 'Responsive Site Development and Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="@/_assets/icons/logo.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
