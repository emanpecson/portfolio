import { ExperienceType } from '@/types/ExperienceType';
import { TaskType } from '@/types/TaskType';
import Link from 'next/link';
import TaskItem from './TaskItem';
import Image from 'next/image';
import BoxWrap from './BoxWrap';

export default function ExperienceItem({ experience }: { experience: ExperienceType }) {
  return (
    <div className="space-y-4">
      <Link href={experience.website} target="_blank" rel="noopener noreferrer">
        <BoxWrap>
          <div className="flex space-x-4 place-items-center">
            <Image
              src={experience.logoSrc}
              alt={experience.company}
              height={24}
              width={24}
              className="h-16 w-16 rounded-md object-contain"
              unoptimized
            />
            <div>
              <h2 className="font-extrabold sm:text-2xl text-lg">{experience.position}</h2>
              <div className="flex space-x-4 place-items-center">
                <p className="font-semibold">{experience.timeline}</p>
                <div className="rounded-full h-[5px] w-[5px] bg-neutral-800 dark:bg-neutral-200" />
                <p className="font-semibold">{experience.location}</p>
              </div>
            </div>
          </div>
        </BoxWrap>
      </Link>

      <div className="space-y-2">
        {experience.tasks.map((task: TaskType, i: number) => {
          if (task.externalLink) {
            return (
              <BoxWrap>
                <Link href={task.externalLink} className="hover:cursor-pointer">
                  <TaskItem task={task} key={i} />
                </Link>
              </BoxWrap>
            );
          }
          return (
            <div className="p-2.5">
              <TaskItem task={task} key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
