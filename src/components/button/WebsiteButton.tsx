import { Button } from '@/components/ui/button';
import { MousePointerClickIcon } from 'lucide-react';
import Link from 'next/link';

export default function WebsiteButton({ href }: { href: string }) {
  return (
    <Button size="sm" className="duration-150" variant="outline" asChild>
      <Link rel="noopener noreferrer" target="_blank" href={href} className="flex space-x-1.5 w-fit">
        <MousePointerClickIcon size={20} />
        <p className="font-semibold sm:text-sm text-xs">Try it out</p>
      </Link>
    </Button>
  );
}
