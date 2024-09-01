'use client';

import { cn } from '@/lib/utils';
import { EducationType } from '@/types/v2/EducationType';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function EducationItem({ edu }: { edu: EducationType }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={edu.website} onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="flex justify-between place-items-center w-full">
        <div className="flex space-x-4 place-items-center">
          <div>
            <div className="rounded-full bg-neutral-500 h-12 w-12" />
          </div>

          <div className="w-full text-left">
            <div className="flex place-items-center space-x-1">
              <p className="font-semibold text-lg">{edu.name}</p>
              <ChevronRightIcon
                size={20}
                className={cn(
                  isHovering ? 'opacity-100 translate-x-1' : 'opacity-0 translate-x-0',
                  'transition-all duration-200'
                )}
              />
            </div>
            <p className="font-medium text-sm">{edu.reward}</p>
          </div>
        </div>

        <p className="text-neutral-400 whitespace-nowrap">{edu.timeline}</p>
      </div>
    </Link>
  );
}
