import { SkillType } from '@/types/v2/SkillType';
import Image from 'next/image';
import Link from 'next/link';

export default function SkillItem({ skill }: { skill: SkillType }) {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={skill.url}
      className="cursor-pointer rounded-full py-1 flex border dark:border-neutral-800 border-neutral-300 w-fit place-items-center space-x-3 pl-1.5 dark:bg-neutral-900 bg-neutral-50 dark:hover:bg-neutral-900/70 dark:hover:text-white text-neutral-500 duration-200 transition-colors hover:bg-neutral-200/70 hover:text-neutral-700"
    >
      <div className="bg-white rounded-full h-10 w-10 relative flex border border-neutral-300 dark:border-none">
        <Image
          src={skill.iconSrc}
          alt={skill.iconSrc}
          height={12}
          width={12}
          className="w-full h-full object-contain rounded-full absolute place-items-center justify-center left-0"
          unoptimized
        />
      </div>
      <label className="pr-4 text-base font-semibold cursor-pointer">{skill.label}</label>
    </Link>
  );
}
