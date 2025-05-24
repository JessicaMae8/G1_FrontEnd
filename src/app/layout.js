import React from 'react';
import './globals.css';
import Script from 'next/script';
import { Suspense } from 'react';
import Head from 'next/head';
import { BorrowProvider } from '../context/BorrowContext';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&display=swap" rel="stylesheet" />
      </Head>

      <body className="antialiased w-full">
        <Suspense fallback={null}>
          {/* If tailwindcss don't work locally */}
          <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        </Suspense>
        {/* <Sidebar />
          <Dashboard /> */}
        <AuthProvider>
          <BorrowProvider>
            {children}
          </BorrowProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
