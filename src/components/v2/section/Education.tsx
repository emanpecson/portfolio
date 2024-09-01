import { EducationType } from '@/types/v2/EducationType';
import EducationItem from '../item/EducationItem';

export default function Education() {
  const edu: EducationType = {
    iconSrc: '/linkedin_pfp',
    name: 'University of Nevada, Las Vegas',
    reward: "Bachelor's Degree of Science in Computer Science",
    timeline: 'AUG 2020 - DEC 2024',
    website: 'https://www.unlv.edu/degree/bs-computer-science',
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl pb-2">Education</h2>
      <EducationItem edu={edu} />
    </div>
  );
}
