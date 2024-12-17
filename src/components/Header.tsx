'use client';

import { routes } from '@/data/routes';
import { GithubIcon, LinkedinIcon, MailIcon, MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
import IconButton from './button/IconButton';
import { useTheme } from 'next-themes';
import IconLinkButton from './button/IconLinkButton';

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="w-full flex justify-between mx-auto pt-8 px-8">
      <Link href="/">logo</Link>
      <div className="flex space-x-5">
        {routes.map((route, i) => (
          <div key={i}>
            <div className="sm:block hidden">
              <Link
                className="font-medium opacity-60 hover:opacity-100 transition-opacity duration-150"
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
        <IconButton
          icon={resolvedTheme === 'dark' ? MoonIcon : SunIcon}
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </div>
  );
}
