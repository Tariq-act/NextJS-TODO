'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple Todo',
  description: 'simple todo app for learning nextJS 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [changeTheme, setChangeTheme] = useState(false);

  return (
    <html lang='en' data-theme={`${changeTheme ? 'dark' : 'light'}`}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <button
          className='btn absolute right-5 top-5'
          onClick={() => setChangeTheme(!changeTheme)}
        >{`${changeTheme ? 'light' : 'dark'}`}</button>
        {children}
      </body>
    </html>
  );
}
