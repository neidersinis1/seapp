import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import './globals.css'

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
        <Sidebar >
          {children}
        </Sidebar>
      </body>
    </html>
  )
}