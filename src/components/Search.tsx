'use client';

import { useEffect, useState } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';
import { SearchIcon } from 'lucide-react';
import { keywordRoutes, KeywordRouteType } from '@/data/routes';
import Label from './Label';

export default function Search() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (typeof window !== undefined && navigator) setIsMac(navigator.userAgent.toLowerCase().includes('mac'));
  }, []);

  const handleSelect = (route: string) => {
    setIsOpen(false);
    router.push(route);
  };

  useEffect(() => {
    // open if cmd/ctrl + k pressed
    const openSearch = (ev: KeyboardEvent) => {
      if ((ev.metaKey || ev.ctrlKey) && ev.key === 'k') {
        ev.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    // on key pressed, trigger this func
    document.addEventListener('keydown', openSearch);

    // cleanup event-listener on exit
    return () => document.removeEventListener('keydown', openSearch);
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-full lg:w-fit text-neutral-600 dark:text-neutral-400 rounded-full px-3 py-1.5 relative h-fit space-x-4 justify-between backdrop-blur-sm bg-transparent"
        >
          <div className="flex space-x-2.5 place-items-center">
            <SearchIcon size={20} className="opacity-60" />
            <div className="text-sm font-medium opacity-60">
              <span className="sm:block hidden">Search by keyword...</span>
              <span className="sm:hidden block">Search...</span>
            </div>
          </div>
          <kbd className="sm:block hidden border rounded-md shadow-sm shadow-neutral-300 dark:shadow-neutral-900 px-1.5">
            <span className="text-xs font-semibold text-neutral-500">{isMac ? 'CMD' : 'CTRL'}+K</span>
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby="search-docs" className="p-1">
        <DialogTitle className="hidden">Search</DialogTitle>

        <Command>
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Search by keyword... (internships, projects, etc.)"
          />
          <CommandList>
            <CommandEmpty>No page found</CommandEmpty>
            <CommandGroup>
              {keywordRoutes.map((route: KeywordRouteType, i: number) => (
                <CommandItem
                  value={`${route.title} ${route.keywords.join(' ')}`}
                  onSelect={() => handleSelect(route.path)}
                  key={i}
                >
                  <Link href={route.path} className="flex space-x-1.5 w-full dark:text-neutral-300 text-neutral-700">
                    <span className="font-semibold whitespace-nowrap">{route.title}</span>
                    {route.keywords
                      .filter((kw) => kw.includes(query))
                      .map((kw) => (
                        <Label>{kw}</Label>
                      ))}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
