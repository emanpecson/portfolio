'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { CompletionStatus } from '@/types/v2/EducationType';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import StateWrap from '../../StateWrap';
import { useWindowResize, widthBreakpoints } from '@/hooks/useWindowResize';

export type DropdownItemParams = {
  heading: string;
  subheading: string;
  iconSrc: string;
  timeline: string;
  children: React.ReactNode;
  status?: CompletionStatus;
};

export default function DropdownItem(params: DropdownItemParams) {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useWindowResize(
    widthBreakpoints.sm,
    () => setIsMobile(false),
    () => setIsMobile(true)
  );

  return (
    <AccordionItem value={params.heading}>
      <AccordionTrigger
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full"
      >
        <div className="sm:flex justify-between w-full">
          <div className="flex space-x-4 place-items-center">
            <div>
              <div className="sm:w-16 sm:h-16 w-12 h-12 bg-white rounded-full relative border border-neutral-300 dark:border-none">
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
                <p className="font-semibold sm:text-lg text-sm">{params.heading}</p>
                <ChevronRightIcon
                  size={isMobile ? 16 : 20}
                  className={cn(
                    isHovering ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0',
                    isMobile && 'opacity-100',
                    isOpen ? 'rotate-90' : 'rotate-0',
                    'transition-all duration-200'
                  )}
                />
              </div>
              <div className="flex space-x-2 place-items-center">
                <p className="font-medium sm:text-sm text-xs">{params.subheading}</p>
                {params.status !== undefined && params.status !== CompletionStatus.COMPLETE && (
                  <StateWrap>{params.status}</StateWrap>
                )}
              </div>
            </div>
          </div>

          <p className="text-neutral-400 whitespace-nowrap sm:text-right text-left sm:pl-0 pl-16 sm:text-base text-xs font-normal">
            {params.timeline}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-[4.5rem] sm:pt-0 pt-3">{params.children}</AccordionContent>
    </AccordionItem>
  );
}
