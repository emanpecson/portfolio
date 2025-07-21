import { ContentSubheaderType } from '@/types/ContentHeader';
import { LucideIcon } from 'lucide-react';

interface ContentSubsectionProps {
  subheader: ContentSubheaderType;
  children: React.ReactNode;
  icon?: LucideIcon;
}

export default function ContentSubsection(props: ContentSubsectionProps) {
  return (
    <div>
      <div className="flex space-x-1.5 place-items-center text-neutral-700 dark:text-neutral-100">
        {props.icon && <props.icon size={20} strokeWidth={2.5} />}
        <h3 ref={props.subheader.ref} id={props.subheader.id} className="text-xl font-semibold py-1">
          {props.subheader.id}
        </h3>
      </div>
      <div className="pt-1 space-y-4">{props.children}</div>
    </div>
  );
}
