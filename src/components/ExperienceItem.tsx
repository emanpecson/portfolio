import { ExperienceType, PositionType } from '@/types/ExperienceType';
import { TaskType } from '@/types/TaskType';
import Link from 'next/link';
import TaskItem from './TaskItem';
import Image from 'next/image';
import BoxWrap from './BoxWrap';
import BlurFade from './ui/blur-fade';

export default function ExperienceItem({ experience }: { experience: ExperienceType }) {
  return (
    <div className="divide-y">
      {experience.positions.map((position: PositionType) => (
        <div className="space-y-4 py-4">
          <BlurFade delay={0}>
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
                    <h2 className="font-extrabold sm:text-2xl text-lg">{position.name}</h2>
                    <div className="sm:flex sm:space-x-4 sm:place-items-center">
                      <p className="sm:font-semibold">{position.timeline}</p>
                      <div className="sm:block hidden rounded-full h-[5px] w-[5px] bg-neutral-800 dark:bg-neutral-200" />
                      <p className="sm:font-semibold">{position.location}</p>
                    </div>
                  </div>
                </div>
              </BoxWrap>
            </Link>
          </BlurFade>

          <div className="space-y-3">
            {position.tasks.map((task: TaskType, i: number) => {
              if (task.externalLink) {
                return (
                  <BlurFade delay={0.1 * i}>
                    <BoxWrap>
                      <Link href={task.externalLink} className="hover:cursor-pointer">
                        <TaskItem task={task} key={i} />
                      </Link>
                    </BoxWrap>
                  </BlurFade>
                );
              }
              return (
                <BlurFade delay={0.1 * i}>
                  <div className="p-2.5">
                    <TaskItem task={task} key={i} />
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
