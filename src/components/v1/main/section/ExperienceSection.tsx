import { ExperienceType } from '@/types/v1/ExperienceType';
import Experience from '../item/Experience';

export default function ExperienceSection() {
  const experiences: ExperienceType[] = [
    {
      employer: 'JT4',
      position: 'Software Engineer Intern',
      timeline: 'MAY 2023 - PRESENT',
      tasks: [
        {
          title: 'Full-stack app: Fileship',
          description:
            'Built a web application tool that provides employees with a way to securely upload files. This includes functionalities for uploading files, an automated email notification system, and enabling real-time features with a web-socket.',
        },
        {
          title: 'Full-stack app: Concur Travel Approver',
          description:
            'Built a web application tool that simplifies the management of employee travel info. This app displays an employee table with options for managing their info, search and filter tools to quickly find employees, and support for updating employees over entire departments within a few clicks.',
        },
      ],
      tags: [
        'TypeScript',
        'JavaScript',
        'Vue.js',
        'Nuxt',
        'React.js',
        'Next',
        'Node.js',
        'Tailwind',
        'Git',
        'Prisma',
        'SQL Server',
        'Docker',
        'Socket.IO',
        'Nodemailer',
      ],
      website: 'https://www.jt4llc.com',
    },
    {
      employer: 'General Atomics',
      position: 'Software Developer Intern',
      timeline: 'JUN 2022 - AUG 2022',
      tasks: [
        {
          title: 'Improved developer efficiency',
          description:
            'My team faced an issue where they relied on a 3rd party library and needed to send requests to them whenever we needed to update anything in the data model. So I worked up a solution where we would be able to generate the data model locally, so when we needed to make an update, we had direct access. As a result, update processes reduced from ~3 days to just ~30 minutes.',
        },
        {
          title: 'Refactor existing code',
          description:
            'Updated an outdated Python script to perform the function of generating thousands of C++ class header files.',
        },
        {
          title: 'Write unit tests',
          description:
            'Wrote basic unit tests with the GoogleTest framework to ensure the functionality of C++ source code.',
        },
      ],
      tags: ['CMake', 'C++', 'Python', 'Apache Subversion'],
      website: 'https://www.ga.com',
    },
    {
      employer: 'Clark County Public Works',
      position: 'Intern',
      timeline: 'JAN 2022 - MAY 2022',
      tasks: [
        {
          title: 'Web-scraping',
          description:
            'Applied prior knowledge of programming to automate a manual process of storing office data into an ArcGIS data table using Python and Selenium.',
        },
      ],
      tags: ['Python', 'Selenium', 'ArcGIS'],
      website: 'https://www.clarkcountynv.gov/government/departments/public_works_department/development/index.php',
    },
    {
      employer: 'University of Nevada, Las Vegas',
      position: 'Computer Science Teaching Assistant',
      timeline: 'JAN 2022 - MAY 2022',
      tasks: [
        {
          title: 'Tutoring',
          description: 'Assisted college students in learning introductory computer science concepts in C++.',
        },
      ],
      tags: ['C++', 'Visual Studio Code'],
      website: 'https://www.unlv.edu/cs',
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
