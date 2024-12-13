'use client';

import { cn } from '@/lib/utils';
import { CompletionStatus } from '@/types/EducationType';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import StateWrap from '../../StateWrap';
import { useWindowResize, widthBreakpoints } from '@/hooks/useWindowResize';

export type LinkItemParams = {
  heading: string;
  subheading: string;
  iconSrc: string;
  timeline: string;
  url: string;
  status?: CompletionStatus;
};

export default function LinkItem(params: LinkItemParams) {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useWindowResize(
    widthBreakpoints.sm,
    () => setIsMobile(false),
    () => setIsMobile(true)
  );

  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={params.url}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="sm:flex justify-between w-full py-2">
        <div className="flex space-x-4 place-items-center">
          <div>
            <div className="sm:w-16 sm:h-16 w-12 h-12 bg-white rounded-full relative border dark:border-none border-neutral-300">
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
            <div className="flex place-items-center sm:space-x-1 space-x-2">
              <p className="font-semibold sm:text-lg text-sm">{params.heading}</p>
              <LinkIcon
                size={isMobile ? 12 : 16}
                className={cn(
                  isHovering ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0',
                  isMobile && 'opacity-100',
                  'transition-all duration-200'
                )}
              />
            </div>
            <div className="sm:flex sm:space-x-2 place-items-center sm:space-y-0 space-y-1">
              <p className="font-medium sm:text-sm text-xs">{params.subheading}</p>
              {params.status !== undefined && params.status !== CompletionStatus.COMPLETE && (
                <StateWrap>{params.status}</StateWrap>
              )}
            </div>
          </div>
        </div>

        <p className="text-neutral-400 whitespace-nowrap sm:text-right text-left sm:pl-0 pl-16 sm:text-base text-xs sm:pt-0 pt-1">
          {params.timeline}
        </p>
      </div>
    </Link>
  );
}
