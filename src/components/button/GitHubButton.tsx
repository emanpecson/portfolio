import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

export default function GitHubButton({ href }: { href: string }) {
  return (
    <Button size="sm" className="duration-150" variant="outline" asChild>
      <Link rel="noopener noreferrer" target="_blank" href={href} className="flex space-x-1 w-fit">
        <GithubIcon size={16} strokeWidth={2} />
        <span>Source</span>
      </Link>
    </Button>
  );
}
