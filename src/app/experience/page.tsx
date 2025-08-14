import { experiences } from '@/data/experience';
import { redirect } from 'next/navigation';

export default function ExperiencePage() {
  return redirect(experiences[0].path);
}
