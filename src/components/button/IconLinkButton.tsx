'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IconLinkButtonProps {
  icon: LucideIcon;
  href: string;
}

export default function IconLinkButton(props: IconLinkButtonProps) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        pathname.startsWith(props.href) ? 'opacity-100' : 'opacity-50 hover:opacity-100',
        'transition-opacity duration-150'
      )}
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <props.icon size={20} />
    </Link>
  );
}
