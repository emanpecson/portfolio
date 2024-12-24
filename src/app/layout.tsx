import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Header from '@/components/Header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Emanuel Pecson',
  description: "Emanuel Pecson's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <div className="sm:py-32 py-24 flex justify-center px-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
