import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
// import { SessionProvider } from "next-auth/react"

import './globals.css'
import NextAuthProvider from './auth-provider/auth-provider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'TransAppT',
  description: 'Aplicacion de transporte maritimo',
}

export const revalidate = 0;

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${font.className} antialiased`}>
        <NextAuthProvider >
          <Sidebar >
            {children}
          </Sidebar>
        </NextAuthProvider>
      </body>
    </html>
  )
}