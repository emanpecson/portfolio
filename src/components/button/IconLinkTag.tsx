import Image from 'next/image';
import Link from 'next/link';

interface IconLinkTagProps {
  imgSrc: string;
  label: string;
  href: string;
}

export default function IconLinkTag(props: IconLinkTagProps) {
  return (
    <Link
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-flex space-x-1 place-items-center rounded-sm px-1.5 py-1 bg-neutral-300/50 hover:bg-neutral-300 dark:bg-neutral-700/50 hover:dark:bg-neutral-700 bg-opacity-50 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all duration-150 font-semibold text-xs font-mono"
    >
      <Image
        src={props.imgSrc}
        height={24}
        width={24}
        alt={props.label}
        className="object-contain rounded-full w-5 h-5"
        unoptimized
      />
      <span className="whitespace-nowrap">{props.label}</span>
    </Link>
  );
}
