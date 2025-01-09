import ExperienceItem from '@/components/ExperienceItem';
import { experiences } from '@/data/experience';

export default function Jt4Page() {
  const exp = experiences[0];
  return <ExperienceItem experience={exp} />;
}
