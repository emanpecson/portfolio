import { EducationType } from '@/types/v2/EducationType';
import DropdownItem from './DropdownItem';

export default function EducationItem({ edu }: { edu: EducationType }) {
  return (
    <DropdownItem heading={edu.school} subheading={edu.document} iconSrc={edu.iconSrc} timeline={edu.timeline}>
      {edu.description}
    </DropdownItem>
  );
}
