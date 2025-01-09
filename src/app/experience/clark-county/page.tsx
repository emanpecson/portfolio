import ExperienceItem from '@/components/ExperienceItem';
import { experiences } from '@/data/experience';

export default function ClarkCountyPage() {
  const exp = experiences[2];
  return <ExperienceItem experience={exp} />;
}
