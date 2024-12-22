import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface IconLinkButtonProps {
  icon: LucideIcon;
  href: string;
}

export default function IconLinkButton(props: IconLinkButtonProps) {
  return (
    <Link className="opacity-60 hover:opacity-100 transition-opacity duration-150" href={props.href}>
      <props.icon size={20} />
    </Link>
  );
}
