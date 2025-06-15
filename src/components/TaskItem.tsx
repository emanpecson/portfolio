'use client';

import { SkillType } from '@/types/SkillType';
import IconLinkTag from './button/IconLinkTag';
import { TaskType } from '@/types/TaskType';
import Label from './Label';
import { ArrowUpRightIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function TaskItem({ task }: { task: TaskType }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="space-y-2" onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="pb-1">
        <div className="relative flex place-items-center pb-1">
          <div className="rounded-full bg-gray-600 dark:bg-neutral-300 h-1.5 w-1.5 absolute sm:-left-6 -left-4" />
          <div className="flex place-items-center space-x-2">
            <h3 className="font-bold dark:text-neutral-200 text-neutral-700">{task.header}</h3>
            {task.label && <Label>{task.label}</Label>}
            {task.externalLink && (
              <ArrowUpRightIcon
                size={16}
                strokeWidth={2.5}
                className={cn(
                  'text-neutral-600 dark:text-neutral-400 duration-100',
                  isHovering && 'translate-x-0.5 -translate-y-0.5'
                )}
              />
            )}
          </div>
        </div>

        {/* parse description to bold text wrapped in `**` */}
        <p className="text-neutral-600 dark:text-neutral-400">
          {task.description.split(/(\*\*.*?\*\*)/).map((part, i) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={i} className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={i} className="text-base">
                {part}
              </span>
            )
          )}
        </p>
      </div>
      <div className="gap-2 flex flex-wrap">
        {task.tags.map((tag: SkillType, i: number) => (
          <IconLinkTag key={i} href={tag.url} imgSrc={tag.iconSrc} label={tag.label} />
        ))}
      </div>
    </div>
  );
}
