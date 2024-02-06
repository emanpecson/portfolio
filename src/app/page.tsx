import Experience from '../../components/Experience';
import { ExperienceType } from '../../types/ExperienceType';

export default function Home() {
  const experiences: ExperienceType[] = [
    {
      employer: 'JT4',
      position: 'Software Engineer Intern',
      timeline: 'May 2023 - Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['TypeScript', 'Nuxt', 'Prisma', 'Tailwind', 'Git'],
    },
    {
      employer: 'General Atomics',
      position: 'Software Developer Intern',
      timeline: 'June 2022 - August 2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut.',
      tags: ['CMake', 'C++', 'Python', 'Apache Subversion'],
    },
  ];

  return (
    <>
      <div className="xl:grid xl:grid-cols-12 h-screen pt-20">
        <div className="xl:col-span-5 bg-red-500 xl:h-full h-[24rem]">
          <div className="mx-16 bg-blue-300 fixed">
            <div>
              <h1 className="text-5xl font-bold">Emanuel Pecson</h1>
              <h2 className="text-2xl pt-2 font-semibold">Software Engineer Intern at JT4</h2>
            </div>
          </div>
        </div>
        <div className="xl:col-span-7 bg-blue-500 h-full">
          <div className="mx-16 bg-green-300">
            <div className="space-y-8">
              {experiences.map((exp: ExperienceType, index: number) => (
                <Experience params={exp} key={index} />
              ))}
            </div>

            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
          </div>
        </div>
      </div>
    </>
  );
}
