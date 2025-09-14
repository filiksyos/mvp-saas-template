'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import useLocalStorage from '@/hooks/use-local-storage';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between p-4 border-b">
          <Link href="/" className="text-2xl font-bold">SaaS MVP</Link>
          <nav>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard"><Button variant="ghost">Dashboard</Button></Link>
                <Button variant="outline" onClick={() => setIsLoggedIn(false)}>Logout</Button>
              </>
            ) : (
              <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
            )}
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}