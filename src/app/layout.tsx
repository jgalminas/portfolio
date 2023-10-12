import { ReactNode } from 'react';
import '../styles.css'

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
      <body className={`bg-background`}>
        { children }
      </body>
    </html>
  )
}
