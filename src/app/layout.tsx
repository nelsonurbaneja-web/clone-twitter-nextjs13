import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clone de Twitter',
  description: 'Generated con Nextjs 14'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
