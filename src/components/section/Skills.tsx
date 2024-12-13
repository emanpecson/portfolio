import { SkillType } from '@/types/SkillType';
import SkillItem from '../item/SkillItem';
import overallSkills from '@/data/overall-skills';

export default function Skills() {
  return (
    <div className="w-fit">
      <h2 className="font-semibold text-2xl">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {Array.from(overallSkills.keys()).map((mapKey: string, i: number) => (
          <SkillItem skill={overallSkills.get(mapKey) as SkillType} key={i} />
        ))}
      </div>
    </div>
  );
}
