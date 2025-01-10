import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface NavMenuItemProps {
  href: string;
  isActive: boolean;
  icon: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavMenuItem(props: NavMenuItemProps) {
  return (
    <div onClick={props.onClick}>
      <Link
        href={props.href}
        className={cn(
          props.isActive ? 'opacity-100 shadow-md' : 'opacity-50 hover:opacity-100 shadow-sm',
          'transition-opacity duration-150 flex place-items-center space-x-2 border p-2.5 rounded-lg'
        )}
      >
        <props.icon size={24} />
        <span className="font-medium">{props.children}</span>
      </Link>
    </div>
  );
}
