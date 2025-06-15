import { Button } from '@/components/ui/button';
import { GlobeIcon, MousePointerClickIcon } from 'lucide-react';
import Link from 'next/link';

export default function WebsiteButton({ href }: { href: string }) {
  return (
    <Button size="sm" className="duration-150" variant="outline" asChild>
      <Link rel="noopener noreferrer" target="_blank" href={href} className="flex space-x-1 w-fit">
        <GlobeIcon size={16} strokeWidth={2} />
        <span>Website</span>
      </Link>
    </Button>
  );
}
