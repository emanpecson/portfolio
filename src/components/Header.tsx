'use client';

import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import IconLinkButton from './button/IconLinkButton';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Search from './Search';
import { mainRouteGroups } from '@/data/routes';
import { RouteGroupType } from '@/types/RouteType';
import BlurWrapper from './BlurWrapper';
import { useEffect, useState } from 'react';
import { NavMenuButton } from './button/NavMenuButton';
import { githubUrl, linkedinUrl } from '@/data/url';
import ThemeToggle from './button/ThemeToggle';

export default function Header() {
  const { resolvedTheme } = useTheme();
  const lightLogoSrc = '/logo-light.png';
  const darkLogoSrc = '/logo-dark.png';
  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState(lightLogoSrc);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setLogoSrc(resolvedTheme === 'light' ? lightLogoSrc : darkLogoSrc), []);

  return (
    <div className="w-full flex justify-between pt-2 md:px-6 px-2 fixed z-40 space-x-2 place-items-center">
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

        <div className="md:block hidden">
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
                        'font-medium transition-opacity duration-150 text-base'
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
        </div>

        <div className="md:block hidden">
          <BlurWrapper>
            <IconLinkButton label="Email" icon={MailIcon} href="mailto:emanpecson@gmail.com" />
            <IconLinkButton label="LinkedIn" icon={LinkedinIcon} href={linkedinUrl} />
            <IconLinkButton label="GitHub" icon={GithubIcon} href={githubUrl} />
            <ThemeToggle />
          </BlurWrapper>
        </div>
      </div>

      <div className="md:hidden block">
        <BlurWrapper>
          <ThemeToggle />
          <NavMenuButton />
        </BlurWrapper>
      </div>
    </div>
  );
}
