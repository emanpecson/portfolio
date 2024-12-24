import Link from 'next/link';

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function InlineLink(props: InlineLinkProps) {
  return (
    <Link
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      className="text-black dark:text-white underline underline-offset-4 decoration-neutral-700/20 hover:decoration-neutral-700 dark:decoration-neutral-300/20 dark:hover:decoration-neutral-300 transition-all duration-150 font-medium w-fit"
    >
      {props.children}
    </Link>
  );
}
