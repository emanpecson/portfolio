import { ExperienceType } from '@/types/v2/ExperienceType';
import DropdownItem from './generic/DropdownItem';

export default function ExperienceItem({ exp }: { exp: ExperienceType }) {
  return (
    <DropdownItem heading={exp.company} subheading={exp.position} iconSrc={exp.iconSrc} timeline={exp.timeline}>
      {exp.description}
    </DropdownItem>
  );
}
