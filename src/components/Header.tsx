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
import Image from 'next/image';
import Search from './Search';

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between py-4 sm:px-8 px-4 fixed bg-opacity-40 backdrop-blur-sm z-40 space-x-4">
      <Link href="/" className="flex-shrink-0">
        <Image
          src={resolvedTheme === 'light' ? '/logo-light.png' : '/logo-dark.png'}
          height={24}
          width={24}
          alt="Emanuel Pecson"
          unoptimized
        />
      </Link>
      <div className="flex space-x-4 place-items-center justify-end w-full">
        <Search />

        {routes.map((route, i) => (
          <div key={i}>
            <div className="lg:block hidden">
              <Link
                className={cn(
                  (pathname === '/' && pathname === route.path) ||
                    (route.path !== '/' && pathname.startsWith(route.path))
                    ? 'opacity-100'
                    : 'opacity-50 hover:opacity-100',
                  'font-medium transition-opacity duration-150'
                )}
                href={route.path}
              >
                {route.label}
              </Link>
            </div>
            <div className="lg:hidden block">
              <IconLinkButton label={route.label} icon={route.icon} href={route.path} />
            </div>
          </div>
        ))}

        <IconLinkButton label="GitHub" icon={GithubIcon} href="https://github.com/emanpecson" />
        <IconLinkButton label="LinkedIn" icon={LinkedinIcon} href="https://www.linkedin.com/in/emanuel-pecson" />
        <IconLinkButton label="Email" icon={MailIcon} href="mailto:emanpecson@gmail.com" />
        <Dialog>
          <DialogTrigger asChild>
            <IconButton label="Resume" icon={FileUserIcon} onClick={() => {}} />
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
          label="Theme"
          icon={resolvedTheme === 'dark' ? MoonIcon : SunIcon}
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </div>
  );
}
