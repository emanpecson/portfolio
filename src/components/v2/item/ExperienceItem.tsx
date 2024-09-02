import { ExperienceType } from '@/types/v2/ExperienceType';
import DropdownItem from './generic/DropdownItem';
import { TaskType } from '@/types/v2/TaskType';
import { SkillType } from '@/types/v2/SkillType';
import SkillItem from './SkillItem';
import BoxWrap from '../BoxWrap';
import WebsiteButton from '../button/WebsiteButton';

export default function ExperienceItem({ exp }: { exp: ExperienceType }) {
  return (
    <DropdownItem heading={exp.company} subheading={exp.position} iconSrc={exp.iconSrc} timeline={exp.timeline}>
      <div className="space-y-3">
        <div className="pl-3">
          <WebsiteButton href={exp.website} />
        </div>

        {exp.tasks.map((task: TaskType, i: number) => (
          <BoxWrap key={i}>
            <div>
              <div className="relative flex place-items-center">
                <div className="rounded-full bg-gray-600 dark:bg-neutral-300 h-1.5 w-1.5 absolute -left-6" />
                <h3 className="font-bold text-sm dark:text-neutral-300 text-neutral-600">{task.header}</h3>
              </div>
              <p className="text-neutral-500 text-sm">{task.description}</p>
            </div>
            <div className="gap-2 flex flex-wrap">
              {task.tags.map((tag: SkillType, j: number) => (
                <SkillItem skill={tag} key={j} />
              ))}
            </div>
          </BoxWrap>
        ))}
      </div>
    </DropdownItem>
  );
}
