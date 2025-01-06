'use client';

import { routes } from '@/data/routes';
import { FileUserIcon, GithubIcon, LinkedinIcon, MailIcon, MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
import IconButton from './button/IconButton';
import { useTheme } from 'next-themes';
import IconLinkButton from './button/IconLinkButton';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between mx-auto py-6 px-8 fixed bg-opacity-40 backdrop-blur-sm z-40">
      <Link href="/">logo</Link>
      <div className="flex space-x-5">
        {routes.map((route, i) => (
          <div key={i}>
            <div className="sm:block hidden">
              <Link
                className={cn(
                  pathname.startsWith(route.path) ? 'opacity-100' : 'opacity-50 hover:opacity-100',
                  'font-medium transition-opacity duration-150'
                )}
                href={route.path}
              >
                {route.label}
              </Link>
            </div>
            <div className="sm:hidden block">
              <IconLinkButton icon={route.icon} href={route.path} />
            </div>
          </div>
        ))}

        <IconLinkButton icon={GithubIcon} href="https://github.com/emanpecson/portfolio" />
        <IconLinkButton icon={LinkedinIcon} href="https://www.linkedin.com/in/emanuel-pecson" />
        <IconLinkButton icon={MailIcon} href="mailto:emanpecson@gmail.com" />
        <Dialog>
          <DialogTrigger asChild>
            <IconButton icon={FileUserIcon} onClick={() => {}} />
          </DialogTrigger>
          <DialogContent className="h-[44rem] p-2">
            <object
              data="/emanuel-pecson-resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded-md"
            />
          </DialogContent>
        </Dialog>
        <IconButton
          icon={resolvedTheme === 'dark' ? MoonIcon : SunIcon}
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </div>
  );
}
