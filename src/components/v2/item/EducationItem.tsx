import { EducationType } from '@/types/v2/EducationType';
import DropdownItem from './generic/DropdownItem';
import BoxWrap from '../BoxWrap';
import WebsiteButton from '../button/WebsiteButton';
import LinkItem from './generic/LinkItem';

export default function EducationItem({ edu }: { edu: EducationType }) {
  return (
    <LinkItem
      heading={edu.school}
      subheading={edu.document}
      iconSrc={edu.iconSrc}
      timeline={edu.timeline}
      url={edu.website}
      status={edu.status}
    />
  );
}
