import { ContentHeaderType } from '@/types/ContentHeader';

interface ContentSectionProps {
  header: ContentHeaderType;
  children: React.ReactNode;
}

export default function ContentSection(props: ContentSectionProps) {
  return (
    <div className="divide-y">
      <h2
        ref={props.header.ref}
        id={props.header.id}
        className="text-2xl font-bold py-2 text-onyx dark:text-neutral-100"
      >
        {props.header.label}
      </h2>
      <div className="pt-2 space-y-6">{props.children}</div>
    </div>
  );
}
