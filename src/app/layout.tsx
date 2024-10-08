import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TinaDigital',
  description: 'Innovative digital marketing solutions for the modern business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`${inter.className} w-full h-full`}>
        <div className="max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
