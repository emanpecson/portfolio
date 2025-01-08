'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface IconLinkButtonProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export default function IconLinkButton(props: IconLinkButtonProps) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
            className={cn(
              (pathname === '/' && pathname === props.href) || (props.href !== '/' && pathname.startsWith(props.href))
                ? 'opacity-100'
                : 'opacity-50 hover:opacity-100',
              'transition-opacity duration-150'
            )}
            href={props.href}
            // target="_blank"
            // rel="noreferrer noopener"
          >
            <props.icon size={20} />
          </Link>
        </TooltipTrigger>

        <TooltipContent>{props.label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
