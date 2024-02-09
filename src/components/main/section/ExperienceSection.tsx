import { ExperienceType } from '@/types/ExperienceType';
import Experience from '../item/Experience';

export default function ExperienceSection() {
  const experiences: ExperienceType[] = [
    {
      employer: 'JT4',
      position: 'Software Engineer Intern',
      timeline: 'MAY 2023 - PRESENT',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['TypeScript', 'JavaScript', 'Vue.js', 'Nuxt', 'React.js', 'Next', 'Node.js', 'Tailwind', 'Git', 'Prisma'],
    },
    {
      employer: 'General Atomics',
      position: 'Software Developer Intern',
      timeline: 'JUN 2022 - AUG 2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['CMake', 'C++', 'Python', 'Apache Subversion'],
    },
    {
      employer: 'Clark County Public Works',
      position: 'Intern',
      timeline: 'JAN 2022 - MAY 2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['Python', 'Selenium', 'ArcGIS'],
    },
    {
      employer: 'University of Nevada, Las Vegas',
      position: 'Computer Science Teaching Assistant',
      timeline: 'JAN 2022 - MAY 2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['C++', 'Visual Studio Code'],
    },
  ];

  return (
    <>
      <div className="space-y-16 sm:mx-0 mx-6">
        {experiences.map((exp: ExperienceType, index: number) => (
          <Experience params={exp} key={index} />
        ))}
      </div>
    </>
  );
}
