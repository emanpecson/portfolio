'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { mainRouteGroups } from '@/data/routes';
import { RouteGroupType } from '@/types/RouteType';
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import NavMenuItem from '../NavMenuItem';
import { githubUrl, linkedinUrl } from '@/data/url';
import { useState } from 'react';

export function NavMenuButton() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <SheetTrigger asChild>
        <button className="opacity-60 w-fit h-fit">
          <MenuIcon size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="divide-y">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-start font-extrabold text-2xl text-neutral-700 dark:text-neutral-200">
            Emanuel Pecson
          </SheetTitle>
        </SheetHeader>
        <div className="py-4 space-y-3">
          <h3 className="font-semibold text-neutral-700 dark:text-neutral-200">Learn more</h3>
          <div className="space-y-3">
            {mainRouteGroups.map((routeGroup: RouteGroupType, i: number) => {
              const mainRoute = routeGroup.routes[0];
              const isActive =
                (pathname === '/' && pathname === mainRoute.path) ||
                (mainRoute.path !== '/' && pathname.startsWith(mainRoute.path));
              return (
                <NavMenuItem key={i} href={mainRoute.path} icon={routeGroup.icon} isActive={isActive} onClick={close}>
                  {mainRoute.name}
                </NavMenuItem>
              );
            })}
          </div>
        </div>
        <div className="py-4 space-y-3">
          <h3 className="font-semibold text-neutral-700 dark:text-neutral-200">{"Let's get in touch!"}</h3>
          <div className="space-y-3">
            <NavMenuItem href="mailto:emanpecson@gmail.com" icon={MailIcon} isActive={false}>
              emanpecson@gmail.com
            </NavMenuItem>
            <NavMenuItem href={linkedinUrl} icon={LinkedinIcon} isActive={false}>
              LinkedIn
            </NavMenuItem>
            <NavMenuItem href={githubUrl} icon={GithubIcon} isActive={false}>
              GitHub
            </NavMenuItem>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
