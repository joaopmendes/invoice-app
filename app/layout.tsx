import type { Metadata } from 'next';
import './favicon.ico';

import { ClerkProvider } from '@/providers/ClerkProvider';
import './globals.scss';
import React from 'react';
import ModalsProvider from '@/providers/ModalsProvider';
import ToastProvider from '@/providers/ToastProvider';
import LoaderProvider from '@/providers/LoaderProvider';

export const metadata: Metadata = {
  title: 'Invoice App',
  description: 'A simple to use invoice application to manage your invoices',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <ModalsProvider />
          <ToastProvider />
          <LoaderProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
