'use client';

import { cn } from '@/lib/utils';
import { EducationType } from '@/types/v2/EducationType';
import { ChevronRightIcon, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export type LinkItemParams = {
  heading: string;
  subheading: string;
  iconSrc: string;
  timeline: string;
  url: string;
};

export default function LinkItem(params: LinkItemParams) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={params.url} onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="flex justify-between w-full py-2">
        <div className="flex space-x-4 place-items-center">
          <div>
            <div className="w-16 h-16 bg-white rounded-full relative border dark:border-none border-neutral-300">
              <Image
                src={params.iconSrc}
                alt={params.iconSrc}
                height={24}
                width={24}
                className="h-fit w-fit rounded-full object-contain"
                unoptimized
              />
            </div>
          </div>

          <div className="w-full text-left">
            <div className="flex place-items-center space-x-1">
              <p className="font-semibold text-lg">{params.heading}</p>
              <LinkIcon
                size={16}
                className={cn(
                  isHovering ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0',
                  'transition-all duration-200'
                )}
              />
            </div>
            <p className="font-medium text-sm">{params.subheading}</p>
          </div>
        </div>

        <p className="text-neutral-400 whitespace-nowrap">{params.timeline}</p>
      </div>
    </Link>
  );
}
