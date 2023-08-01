import type { Metadata } from 'next'


import {ClerkProvider} from "@/providers/ClerkProvider";
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice App',
  description: 'A simple to use invoice application to manage your invoices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider >
        <html lang="en">
        <body>{children}</body>
        </html>
      </ClerkProvider>
  )
}
