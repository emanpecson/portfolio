import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';
import Link from 'next/link';

export default function WebsiteButton({ href }: { href: string }) {
  return (
    <Button size="sm" className="duration-150" asChild>
      <Link rel="noopener noreferrer" target="_blank" href={href} className="flex space-x-1.5 w-fit">
        <GlobeIcon size={20} />
        <p className="font-semibold sm:text-sm text-xs">Website</p>
      </Link>
    </Button>
  );
}
