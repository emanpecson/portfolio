import { EducationType } from '@/types/v2/EducationType';
import EducationItem from '../item/EducationItem';
import { education } from '@/data/education';
import { Accordion } from '@/components/ui/accordion';

export default function Education() {
  return (
    <div>
      <h2 className="font-semibold text-2xl">Education</h2>
      <Accordion type="multiple">
        {education.map((edu: EducationType, i: number) => (
          <EducationItem edu={edu} key={i} />
        ))}
      </Accordion>
    </div>
  );
}
