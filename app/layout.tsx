import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eduardo Machado | Desenvolvedor Fullstack',
  description:
    'Portfólio de Eduardo Henrique Cioli Machado — Desenvolvedor Fullstack com foco em PHP/Laravel, Nuxt.js e PostgreSQL. Criando soluções de ponta a ponta.',
  metadataBase: new URL('https://eduardomachado-machadoeduardos-projects.vercel.app'),
  openGraph: {
    title: 'Eduardo Machado | Desenvolvedor Fullstack',
    description:
      'Desenvolvedor Fullstack com foco em PHP/Laravel, Nuxt.js e PostgreSQL. Veja meus projetos e entre em contato.',
    url: 'https://eduardomachado.vercel.app',
    siteName: 'Eduardo Machado',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eduardo Machado — Desenvolvedor Fullstack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduardo Machado | Desenvolvedor Fullstack',
    description:
      'Desenvolvedor Fullstack com foco em PHP/Laravel, Nuxt.js e PostgreSQL.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/logo-32px.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-32px.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
