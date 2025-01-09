import ExperienceItem from '@/components/ExperienceItem';
import { experiences } from '@/data/experience';

export default function UnlvPage() {
  const exp = experiences[3];
  return <ExperienceItem experience={exp} />;
}
