import ExperienceItem from '@/components/ExperienceItem';
import { experiences } from '@/data/experience';

export default function GeneralAtomicsPage() {
  const exp = experiences[1];
  return <ExperienceItem experience={exp} />;
}
