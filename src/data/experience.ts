import { ExperienceType } from '@/types/ExperienceType';
import overallSkills from './overall-skills';
import { SkillType } from '@/types/SkillType';

export const experiences: ExperienceType[] = [
  {
    company: 'JT4',
    logoSrc: '/logo/jt4.png',
    path: '/experience/jt4',
    website: 'https://www.jt4llc.com',
    positions: [
      {
        name: 'Software Engineer',
        timeline: '08/2023 - Present',
        location: 'Las Vegas, NV',
        tasks: [
          {
            header: 'Internal forum app',
            description:
              'Spearheaded the development of an internal forum app while mentoring **2 SWE interns** throughout the project lifecycle, leading system design discussions and enforcing best security practices across all team code contributions',
            label: 'full-stack web app',
            // externalLink: '/projects/employee-image',
            tags: [
              overallSkills.get('Minio') as SkillType,
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
            header: 'Badge photo app',
            description:
              'Modernized a deprecated badge photo pipeline with a full-stack **Next.js** app, restoring **4,000+ employee photos** across **5+ enterprise apps** by oﬄoading media to **MinIO S3** to dynamically store and serve image assets as the company scales',
            label: 'full-stack web app',
            // externalLink: '/projects/employee-image',
            tags: [
              overallSkills.get('Minio') as SkillType,
              overallSkills.get('Next') as SkillType,
              overallSkills.get('React.js') as SkillType,
              overallSkills.get('Node.js') as SkillType,
              overallSkills.get('Tailwind CSS') as SkillType,
              overallSkills.get('SQL Server') as SkillType,
              overallSkills.get('Prisma') as SkillType,
              overallSkills.get('Git') as SkillType,
            ],
          },
        ],
      },
      {
        name: 'Software Engineer Intern',
        timeline: '05/2023 - 08/2023',
        location: 'Las Vegas, NV',
        tasks: [
          {
            header: 'Secure file transfer app',
            description:
              'Delivered an internal file transfer app with **Nuxt.js** to mitigate the insecurities of a shared directory system, leveraging **Socket.IO** for real-time transfer status updates and ensuring secure migration of **~65 sensitive files monthly**', // 15 files/week -> 15 x 4.3 = ~65 files/month
            label: 'full-stack web app',
            // externalLink: '/projects/fileship',
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
            header: 'Employee travel approver app',
            description:
              'Built a full-stack **Nuxt.js** and **SQL Server** solution to replace a bottlenecked spreadsheet process, decentralizing data entry and slashing update delays from **~1 day to ~1 minute**',
            label: 'full-stack web app',
            // externalLink: '/projects/concur-travel-approver',
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
            header: 'Automated birthday emailer',
            description:
              'Developed a SQL trigger that automatically emails employees a message from the company president, emailing **~90 employees monthly**.', // 20 emps/week -> 20 x 4.3 = ~86 -> ~90 emps/month
            tags: [overallSkills.get('SQL') as SkillType, overallSkills.get('SQL Server') as SkillType],
          },
        ],
      },
    ],
  },
  {
    company: 'General Atomics',
    logoSrc: '/logo/general_atomics.png',
    path: '/experience/general-atomics',
    website: 'https://www.ga.com',
    positions: [
      {
        name: 'Software Developer Intern',
        timeline: '06/2022 - 08/2022',
        location: 'San Diego, CA',
        tasks: [
          {
            header: 'Reduced third-party dependence',
            description:
              'Delivered a code generator with **Python** to transform **30,000+ struct deﬁnitions** into a **C++** data model library, eliminating third-party update dependence and cutting data model update wait time by **~97%**.',
            tags: [
              overallSkills.get('Python') as SkillType,
              overallSkills.get('C++') as SkillType,
              overallSkills.get('CMake') as SkillType,
              overallSkills.get('Subversion') as SkillType,
            ],
          },
          {
            header: 'Created unit tests',
            description:
              'Developed unit tests for **C++** code using **GoogleTest**, integrating automated build-time validation into the CI/CD pipeline.',
            tags: [overallSkills.get('C++') as SkillType, overallSkills.get('GoogleTest') as SkillType],
          },
        ],
      },
    ],
  },
  {
    company: 'Clark County',
    logoSrc: '/logo/clark_county.png',
    path: '/experience/clark-county',
    website: 'https://www.clarkcountynv.gov',
    positions: [
      {
        name: 'Geographic Information System Intern',
        timeline: '01/2022 - 05/2022',
        location: 'Las Vegas, NV',
        tasks: [
          {
            header: 'Web-scraping',
            description:
              'Automated the collection of phone conﬁguration data from **600+ IP-addressable assets** using **Python** and **Selenium**, cutting manual inventory time from **~4 hours to ~20 minutes**.',
            tags: [
              overallSkills.get('Python') as SkillType,
              overallSkills.get('Selenium') as SkillType,
              overallSkills.get('ArcGIS') as SkillType,
            ],
          },
          {
            header: 'Simple mobile app',
            description:
              'Built an interactive map app with **QML**, **JavaScript**, and **AppStudio**, displaying **70+** Clark County parks with selectable points and detailed park information',
            tags: [overallSkills.get('JavaScript') as SkillType],
          },
        ],
      },
    ],
  },
  {
    company: 'UNLV',
    logoSrc: '/logo/unlv.png',
    path: '/experience/unlv',
    website: 'https://www.unlv.edu/cs',
    positions: [
      {
        name: 'Computer Science Teaching Assistant',
        timeline: '01/2022 - 05/2022',
        location: 'Las Vegas, NV',
        tasks: [
          {
            header: 'Tutoring',
            description:
              'Assisted **50+** college students in understanding fundamental programming concepts through one-on-one mentorship and code reviews.',
            tags: [overallSkills.get('C++') as SkillType],
          },
          {
            header: 'Grading',
            description:
              'Evaluated and graded student programming assignments based on code quality, readability, and correct execution.',
            tags: [],
          },
        ],
      },
    ],
  },
];
