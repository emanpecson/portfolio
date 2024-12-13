import { ExperienceType } from '@/types/ExperienceType';
import { tempDescription } from './temp';
import overallSkills from './overall-skills';
import { SkillType } from '@/types/SkillType';

export const experiences: ExperienceType[] = [
  {
    company: 'JT4',
    position: 'Software Engineer Intern',
    iconSrc: '/logo/jt4.jpeg',
    timeline: 'May 2023 - Present',
    website: 'https://www.jt4llc.com/',
    tasks: [
      {
        header: 'Employee Image App (full-stack app)',
        description: 'Built a web app that allows users to update their profile picture among all corporate apps.',
        tags: [
          overallSkills.get('Next') as SkillType,
          overallSkills.get('React.js') as SkillType,
          overallSkills.get('Node.js') as SkillType,
          overallSkills.get('Tailwind CSS') as SkillType,
          overallSkills.get('SQL Server') as SkillType,
          overallSkills.get('Prisma') as SkillType,
          overallSkills.get('Git') as SkillType,
        ],
      },
      {
        header: 'Fileship (full-stack app)',
        description:
          'Built a web application tool that provides employees with a way to securely upload files. This includes functionalities for uploading files, an automated email notification system, and enabling real-time features with a web-socket.',
        tags: [
          overallSkills.get('Nuxt') as SkillType,
          overallSkills.get('Vue.js') as SkillType,
          overallSkills.get('Node.js') as SkillType,
          overallSkills.get('Tailwind CSS') as SkillType,
          overallSkills.get('Docker') as SkillType,
          overallSkills.get('Socket.IO') as SkillType,
          overallSkills.get('Nodemailer') as SkillType,
          overallSkills.get('SQL Server') as SkillType,
          overallSkills.get('Prisma') as SkillType,
          overallSkills.get('Git') as SkillType,
        ],
      },
      {
        header: 'Concur Travel Approver (full-stack app)',
        description:
          'Built a web application tool that simplifies the management of employee travel info. This app displays an employee table with options for managing their info, search and filter tools to quickly find employees, and support for updating employees over entire departments within a few clicks.',
        tags: [
          overallSkills.get('Nuxt') as SkillType,
          overallSkills.get('Vue.js') as SkillType,
          overallSkills.get('Node.js') as SkillType,
          overallSkills.get('Tailwind CSS') as SkillType,
          overallSkills.get('Docker') as SkillType,
          overallSkills.get('Prisma') as SkillType,
          overallSkills.get('Git') as SkillType,
          overallSkills.get('SQL Server') as SkillType,
        ],
      },
      {
        header: 'Automatic Birthday Mail',
        description: 'Develop a SQL trigger that automatically emails employees a special message on their birthday.',
        tags: [overallSkills.get('SQL') as SkillType, overallSkills.get('SQL Server') as SkillType],
      },
    ],
  },
  {
    company: 'General Atomics',
    position: 'Software Developer Intern',
    iconSrc: '/logo/general_atomics.png',
    timeline: 'June 2022 - August 2022',
    website: 'https://www.ga.com/',
    tasks: [
      {
        header: 'Improved developer efficiency',
        description:
          'My team faced an issue where they relied on a 3rd party library and needed to send requests to them whenever we needed to update anything in the data model. So I worked up a solution where we would be able to generate the data model locally, so when we needed to make an update, we had direct access. As a result, update processes reduced from ~3 days to just ~30 minutes.',
        tags: [overallSkills.get('CMake') as SkillType, overallSkills.get('Subversion') as SkillType],
      },
      {
        header: 'Refactor existing code',
        description:
          'Updated an outdated Python script to perform the function of generating thousands of C++ class header files.',
        tags: [overallSkills.get('Python') as SkillType],
      },
      {
        header: 'Write unit tests',
        description:
          'Wrote basic unit tests with the GoogleTest framework to ensure the functionality of C++ source code.',
        tags: [overallSkills.get('C++') as SkillType, overallSkills.get('GoogleTest') as SkillType],
      },
    ],
  },
  {
    company: 'Clark County Public Works',
    position: 'Geographic Information System Intern',
    iconSrc: '/logo/clark_county.jpg',
    timeline: 'January 2022 - May 2022',
    website: 'https://www.clarkcountynv.gov/',
    tasks: [
      {
        header: 'Web-scraping',
        description:
          'Applied prior knowledge of programming to automate a manual process of storing office data into an ArcGIS data table using Python and Selenium.',
        tags: [
          overallSkills.get('Python') as SkillType,
          overallSkills.get('Selenium') as SkillType,
          overallSkills.get('ArcGIS') as SkillType,
        ],
      },
    ],
  },
  {
    company: 'University of Nevada, Las Vegas',
    position: 'Computer Science Teaching Assistant',
    iconSrc: '/logo/unlv.png',
    timeline: 'January 2022 - May 2022',
    website: 'https://www.unlv.edu/cs',
    tasks: [
      {
        header: 'Tutoring',
        description: 'Assisted college students in learning introductory computer science concepts in C++.',
        tags: [overallSkills.get('C++') as SkillType],
      },
    ],
  },
];
