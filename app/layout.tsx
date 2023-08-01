import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'        

import './globals.css'
import {dark} from "@clerk/themes";

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
      <ClerkProvider appearance={
          {baseTheme: dark}
      }>
        <html lang="en">
        <body>{children}</body>
        </html>
      </ClerkProvider>
  )
}
