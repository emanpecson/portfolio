import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';
import Link from 'next/link';

export default function WebsiteButton({ href }: { href: string }) {
  return (
    <Link rel="noopener noreferrer" target="_blank" href={href}>
      <Button size="sm" className="flex space-x-1.5 duration-150">
        <GlobeIcon size={20} />
        <p className="font-semibold">Website</p>
      </Button>
    </Link>
  );
}
