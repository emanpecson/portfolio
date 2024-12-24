import { SkillType } from '@/types/SkillType';
import IconLinkTag from './button/IconLinkTag';
import BoxWrap from './BoxWrap';
import { TaskType } from '@/types/TaskType';

export default function TaskItem({ task }: { task: TaskType }) {
  return (
    <BoxWrap>
      <div>
        <div className="relative flex place-items-center">
          <div className="rounded-full bg-gray-600 dark:bg-neutral-300 h-1.5 w-1.5 absolute sm:-left-6 -left-4" />
          <h3 className="font-bold dark:text-neutral-200 text-neutral-700">{task.header}</h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">{task.description}</p>
      </div>
      <div className="gap-2 flex flex-wrap">
        {task.tags.map((tag: SkillType, i: number) => (
          <IconLinkTag key={i} href={tag.url} imgSrc={tag.iconSrc} label={tag.label} />
        ))}
      </div>
    </BoxWrap>
  );
}
