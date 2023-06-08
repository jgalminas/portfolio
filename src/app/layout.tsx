import { ReactNode } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Justas Galminas",
  description: "Justas Galminas's Portfolio",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        { children }
      </body>
    </html>
  )
}
