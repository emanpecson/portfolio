import Experience from '../components/Experience';
import { ExperienceType } from '../types/ExperienceType';

export default function Home() {
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
      <div className="xl:grid xl:grid-cols-12 h-screen pt-20">
        <div className="xl:col-span-5 xl:h-full h-[24rem] flex justify-center">
          <div className="mx-16 xl:fixed">
            <div className="text-gray-200">
              <h1 className="text-5xl font-bold">Emanuel Pecson</h1>
              <h2 className="text-2xl pt-4 font-light flex justify-center xl:justify-start pl-0.5">
                Software Engineer Intern at JT4
              </h2>
            </div>
          </div>
        </div>
        <div className="xl:col-span-7 h-full">
          <div className="mx-16 space-y-16">
            <div className="space-y-6 p-5 text-gray-400 text-lg opacity-90">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante.
                Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate.
                Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate
                volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat
                augue, ut auctor neque. Quisque at nunc orci. Aenean ut.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante.
                Donec vulputate volutpat venenatis. Phasellus vel finibus nisl. Nullam pharetra egestas vulputate.
                Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci. Aenean ut. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Quisque sed posuere massa, vitae suscipit ante. Donec vulputate
                volutpat venenatis.
              </p>
              <p>
                Phasellus vel finibus nisl. Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor
                neque. Quisque at nunc orci. Aenean ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed posuere massa, vitae suscipit ante. Donec vulputate volutpat venenatis. Phasellus vel finibus nisl.
                Nullam pharetra egestas vulputate. Vestibulum id feugiat augue, ut auctor neque. Quisque at nunc orci.
                Aenean ut.
              </p>
            </div>

            <div className="space-y-16">
              {experiences.map((exp: ExperienceType, index: number) => (
                <Experience params={exp} key={index} />
              ))}
            </div>

            {/* <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div>
            <div className="bg-orange-500 h-[20rem] my-2">block</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
