import { ExperienceType } from '@/types/v2/ExperienceType';
import ExperienceItem from '../item/ExperienceItem';
import { Accordion } from '@/components/ui/accordion';

export default function Experience() {
  const exp1: ExperienceType = {
    company: 'JT3',
    position: 'Software Engineer Intern',
    iconSrc: '/linkedin_pfp',
    timeline: 'MAY 2023 - PRESENT',
    description: 'asdfasdfasdf asdfasdfasdfasdfasdfasdf asdfasdfasdf asdfasdfasdf',
    tags: [''],
    website: '',
  };
  const exp2: ExperienceType = {
    company: 'JT4',
    position: 'Software Engineer Intern',
    iconSrc: '/linkedin_pfp',
    timeline: 'MAY 2023 - PRESENT',
    description: 'asdfasdfasdf asdfasdfasdfasdfasdfasdf asdfasdfasdf asdfasdfasdf',
    tags: [''],
    website: '',
  };
  const exp3: ExperienceType = {
    company: 'JT5',
    position: 'Software Engineer Intern',
    iconSrc: '/linkedin_pfp',
    timeline: 'MAY 2023 - PRESENT',
    description: 'asdfasdfasdf asdfasdfasdfasdfasdfasdf asdfasdfasdf asdfasdfasdf',
    tags: [''],
    website: '',
  };

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="space-y-5">
        <Accordion type="multiple">
          <ExperienceItem exp={exp1} />
          <ExperienceItem exp={exp2} />
          <ExperienceItem exp={exp3} />
        </Accordion>
      </div>
    </div>
  );
}
