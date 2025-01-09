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
  description:
    "Hey, I'm Emanuel 👋. I utilize my proficiency in software development to create effective solutions and leave a lasting impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
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
