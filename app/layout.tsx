import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
// import { SessionProvider } from "next-auth/react"

import './globals.css'
import NextAuthProvider from './auth-provider/auth-provider'
import AuthContext from './messenger/context/AuthContext'
import ToasterContext from './messenger/context/ToasterContext'
import ActiveStatus from './messenger/components/ActiveStatus'

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
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          <NextAuthProvider >
            <Sidebar >
              {children}
            </Sidebar>
          </NextAuthProvider>
        </AuthContext>
      </body>
    </html>
  )
}