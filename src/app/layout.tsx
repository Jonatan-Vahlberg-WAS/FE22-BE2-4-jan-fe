import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webshop example',
  description: 'A webshop example built with Next.js and Tailwind CSS connecting to express.js and mongodb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const title = `${metadata.title}`
  const description = `${metadata.description}`
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </header>
        <hr className="border-gray-400" />
        {children}
      </body>
    </html>
  )
}
