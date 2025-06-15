import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Serif, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Header from '@/components/Header';

const fontSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Emanuel Pecson',
  description: "Emanuel Pecson's portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-serif antialiased', fontSerif.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen w-screen overflow-x-hidden">
            <Header />
            <div className="w-full flex justify-center">
              <div className="w-full px-4">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
