'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ExperienceType } from '@/types/v2/ExperienceType';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ExperienceItem({ exp }: { exp: ExperienceType }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItem value={exp.company}>
      <AccordionTrigger
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full"
      >
        <div className="flex justify-between place-items-center w-full">
          <div className="flex space-x-4 place-items-center">
            <div>
              <div className="w-14 h-14 bg-white rounded-full relative">
                <Image
                  src={exp.iconSrc}
                  alt={exp.iconSrc}
                  height={24}
                  width={24}
                  className="h-fit w-fit rounded-full object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="w-full text-left">
              <div className="flex place-items-center space-x-1">
                <p className="font-semibold text-lg">{exp.company}</p>
                <ChevronRightIcon
                  size={20}
                  className={cn(
                    isHovering ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0',
                    isOpen ? 'rotate-90' : 'rotate-0',
                    'transition-all duration-200'
                  )}
                />
              </div>
              <p className="font-medium text-sm">{exp.position}</p>
            </div>
          </div>

          <p className="text-neutral-400 whitespace-nowrap">{exp.timeline}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-14">{exp.description}</AccordionContent>
    </AccordionItem>
  );
}
