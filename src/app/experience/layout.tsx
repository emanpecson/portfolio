'use client';

import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="max-w-[40rem] w-full space-y-10">
      <div className="flex max-sm:flex-col justify-between">
        {experiences.map((exp, i) => (
          <Link
            key={i}
            href={exp.path}
            className={cn(
              exp.path !== pathname &&
                'text-opacity-30 dark:text-opacity-30 hover:text-neutral-600 dark:hover:text-neutral-400',
              'text-neutral-800 dark:text-neutral-200 text-3xl font-extrabold w-fit transition-colors duration-150'
            )}
          >
            {exp.company}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
