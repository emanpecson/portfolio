'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ExperienceType } from '@/types/v2/ExperienceType';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export type DropdownItemParams = {
  heading: string;
  subheading: string;
  iconSrc: string;
  timeline: string;
  children: React.ReactNode;
};

export default function DropdownItem(params: DropdownItemParams) {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItem value={params.heading}>
      <AccordionTrigger
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full"
      >
        <div className="flex justify-between w-full">
          <div className="flex space-x-4 place-items-center">
            <div>
              <div className="w-14 h-14 bg-white rounded-full relative">
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
                <ChevronRightIcon
                  size={20}
                  className={cn(
                    isHovering ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0',
                    isOpen ? 'rotate-90' : 'rotate-0',
                    'transition-all duration-200'
                  )}
                />
              </div>
              <p className="font-medium text-sm">{params.subheading}</p>
            </div>
          </div>

          <p className="text-neutral-400 whitespace-nowrap">{params.timeline}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-[4.5rem]">{params.children}</AccordionContent>
    </AccordionItem>
  );
}
