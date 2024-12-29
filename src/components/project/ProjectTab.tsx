'use client';

import { cn } from '@/lib/utils';
import { ProjectType } from '@/types/ProjectType';
import { ChevronRightIcon, LightbulbIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ProjectTab({ project }: { project: ProjectType }) {
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === project.path;

  return (
    <div
      className={cn(!isActive && 'hover:translate-x-2 transition-all duration-150', 'border rounded-md shadow-md')}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={project.path} className="w-full">
        <Image
          src={project.coverImageSrc}
          height={24}
          width={36}
          alt={project.coverImageSrc}
          className="w-full rounded-t-md object-cover border-b hover:opacity-90 duration-150 transition-all"
          unoptimized
        />
        <div className="p-1.5">
          <div className="flex space-x-2 place-items-center">
            {project.iconSrc ? (
              <Image
                src={project.iconSrc}
                alt="icon"
                height={24}
                width={24}
                className="rounded-md object-contain"
                unoptimized
              />
            ) : (
              <LightbulbIcon size={20} className="text-neutral-700 dark:text-neutral-300 flex-shrink-0" />
            )}
            <span
              className={cn(
                isActive || isHovering ? 'text-black dark:text-white' : 'text-neutral-500',
                'font-semibold text-sm'
              )}
            >
              {project.name}
            </span>

            {isActive ? (
              <div className="relative flex justify-center place-items-center">
                <div className="rounded-full w-1.5 h-1.5 bg-orange-500 animate-pulse" />
                <div className="rounded-full w-2 h-2 bg-orange-300 animate-ping absolute" />
              </div>
            ) : (
              <ChevronRightIcon
                size={16}
                className={cn(isHovering ? 'text-black dark:text-white' : 'text-neutral-500')}
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
