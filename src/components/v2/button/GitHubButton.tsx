import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

export default function GitHubButton({ href }: { href: string }) {
  return (
    <Button size="sm" className="duration-150" asChild>
      <Link rel="noopener noreferrer" target="_blank" href={href} className="flex space-x-1.5 w-fit">
        <GithubIcon size={20} />
        <p className="font-semibold sm:text-base text-xs">Repository</p>
      </Link>
    </Button>
  );
}
