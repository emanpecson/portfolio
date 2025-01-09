'use client';

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
import { mainRouteGroups } from '@/data/routes';
import { RouteGroupType } from '@/types/RouteType';
import BlurWrapper from './BlurWrapper';
import { useEffect, useState } from 'react';

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const lightLogoSrc = '/logo-light.png';
  const darkLogoSrc = '/logo-dark.png';
  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState(lightLogoSrc);

  useEffect(() => setLogoSrc(resolvedTheme === 'light' ? lightLogoSrc : darkLogoSrc));

  return (
    <div className="w-full flex justify-between pt-2 sm:px-8 px-4 fixed z-40 space-x-2 place-items-center">
      <BlurWrapper>
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logoSrc}
            height={24}
            width={24}
            alt="Emanuel Pecson"
            unoptimized
            className="h-8 w-8 object-contain"
          />
        </Link>
      </BlurWrapper>

      <div className="flex space-x-2 place-items-center justify-end w-full">
        <Search />

        <BlurWrapper>
          {mainRouteGroups.map((routeGroup: RouteGroupType, i: number) => {
            const mainRoute = routeGroup.routes[0];
            return (
              <div key={i}>
                <div className="lg:block hidden">
                  <Link
                    className={cn(
                      (pathname === '/' && pathname === mainRoute.path) ||
                        (mainRoute.path !== '/' && pathname.startsWith(mainRoute.path))
                        ? 'opacity-100'
                        : 'opacity-50 hover:opacity-100',
                      'font-medium transition-opacity duration-150'
                    )}
                    href={mainRoute.path}
                  >
                    {mainRoute.name}
                  </Link>
                </div>
                <div className="lg:hidden block">
                  <IconLinkButton label={mainRoute.name} icon={routeGroup.icon} href={mainRoute.path} />
                </div>
              </div>
            );
          })}
        </BlurWrapper>

        <BlurWrapper>
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
        </BlurWrapper>
      </div>
    </div>
  );
}
