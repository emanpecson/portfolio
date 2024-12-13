import { experiences } from '@/data/experience';
import ExperienceItem from '../item/ExperienceItem';
import { Accordion } from '@/components/ui/accordion';
import { ExperienceType } from '@/types/ExperienceType';

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Experience</h2>
      <Accordion type="multiple">
        {experiences.map((exp: ExperienceType, i: number) => (
          <ExperienceItem exp={exp} key={i} />
        ))}
      </Accordion>
    </div>
  );
}
