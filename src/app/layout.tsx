import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/sharedUI/Footer'
import MenuHead from '@/components/sharedUI/MenuHead'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://bauxt-des-sens.com'),
  description: "A la recherche d'un massage ou d'un moment propice à la détente sur Arles et la région des Alpilles ?... Baux'T des sens vous propose des séances de massage à domicile et d'initiation au Hata yoga.",
  openGraph: {
    title: "BauxT des sens, massages sur Arles, Camargue, Alpilles et alentours",
    description: "Baux'T des sens, massage à domicile et yoga Arles Alpilles & Baux de Provence.",
    images: ["https://zupimages.net/up/21/33/4t0a.jpg"],
    type: "website",
    locale: "fr"
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className} suppressHydrationWarning>
        <MenuHead/>
        {children}
        <Footer/> 
      </body>
    </html>
  )
}
