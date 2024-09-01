import { EducationType } from '@/types/v2/EducationType';
import DropdownItem from './generic/DropdownItem';

export default function EducationItem({ edu }: { edu: EducationType }) {
  return (
    <DropdownItem
      heading={edu.school}
      subheading={edu.document}
      iconSrc={edu.iconSrc}
      timeline={edu.timeline}
      status={edu.status}
    >
      {edu.description}
    </DropdownItem>
  );
}
