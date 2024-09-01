import { SkillGroup, SkillType } from '@/types/v2/SkillType';

const overallSkills = new Map<string, SkillType>();

overallSkills.set('React.js', {
  label: 'React.js',
  iconSrc: '/logo/react.png',
  group: SkillGroup.FRAMEWORK,
  url: 'https://react.dev/',
});
overallSkills.set('Next', {
  label: 'Next',
  iconSrc: '/logo/next.png',
  group: SkillGroup.FRAMEWORK,
  url: 'https://nextjs.org/',
});
overallSkills.set('Vue.js', {
  label: 'Vue.js',
  iconSrc: '/logo/vue.png',
  group: SkillGroup.FRAMEWORK,
  url: 'https://vuejs.org/',
});
overallSkills.set('Nuxt', {
  label: 'Nuxt',
  iconSrc: '/logo/nuxt.png',
  group: SkillGroup.FRAMEWORK,
  url: 'https://nuxt.com/',
});
overallSkills.set('TypeScript', {
  label: 'TypeScript',
  iconSrc: '/logo/typescript.png',
  group: SkillGroup.LANGUAGE,
  url: 'https://www.typescriptlang.org/',
});
overallSkills.set('JavaScript', {
  label: 'JavaScript',
  iconSrc: '/logo/javascript.png',
  group: SkillGroup.LANGUAGE,
  url: 'https://www.javascript.com/',
});
overallSkills.set('Node.js', {
  label: 'Node.js',
  iconSrc: '/logo/node.png',
  group: SkillGroup.TOOL,
  url: 'https://nodejs.org/en',
});
overallSkills.set('Tailwind CSS', {
  label: 'Tailwind CSS',
  iconSrc: '/logo/tailwind.png',
  group: SkillGroup.FRAMEWORK,
  url: 'https://tailwindcss.com/',
});
overallSkills.set('Git', {
  label: 'Git',
  iconSrc: '/logo/git.png',
  group: SkillGroup.TOOL,
  url: 'https://git-scm.com/',
});
overallSkills.set('Prisma', {
  label: 'Prisma',
  iconSrc: '/logo/prisma.png',
  group: SkillGroup.TOOL,
  url: 'https://www.prisma.io/',
});
overallSkills.set('SQL Server', {
  label: 'SQL Server',
  iconSrc: '/logo/sqlserver.png',
  group: SkillGroup.DATABASE,
  url: 'https://azure.microsoft.com/en-us/products/azure-sql/database/?ef_id=_k_CjwKCAjwodC2BhAHEiwAE67hJNUl2dBUbhzRN7xYY936c3CznkSeFfd_UHeqv7a_xP0m4m-cWCce4hoCNwEQAvD_BwE_k_&OCID=AIDcmm5edswduu_SEM__k_CjwKCAjwodC2BhAHEiwAE67hJNUl2dBUbhzRN7xYY936c3CznkSeFfd_UHeqv7a_xP0m4m-cWCce4hoCNwEQAvD_BwE_k_&gad_source=1&gclid=CjwKCAjwodC2BhAHEiwAE67hJNUl2dBUbhzRN7xYY936c3CznkSeFfd_UHeqv7a_xP0m4m-cWCce4hoCNwEQAvD_BwE',
});
overallSkills.set('Docker', {
  label: 'Docker',
  iconSrc: '/logo/docker.png',
  group: SkillGroup.TOOL,
  url: 'https://www.docker.com/',
});
overallSkills.set('Nodemailer', {
  label: 'Nodemailer',
  iconSrc: '/logo/nodemailer.png',
  group: SkillGroup.TOOL,
  url: 'https://nodemailer.com/',
});
overallSkills.set('Socket.IO', {
  label: 'Socket.IO',
  iconSrc: '/logo/socketio.png',
  group: SkillGroup.TOOL,
  url: 'https://socket.io/',
});
overallSkills.set('CMake', {
  label: 'CMake',
  iconSrc: '/logo/cmake.png',
  group: SkillGroup.LANGUAGE,
  url: 'https://cmake.org/',
});
overallSkills.set('C++', {
  label: 'C++',
  iconSrc: '/logo/cpp.png',
  group: SkillGroup.LANGUAGE,
  url: 'https://cplusplus.com/',
});
overallSkills.set('Python', {
  label: 'Python',
  iconSrc: '/logo/python.jpeg',
  group: SkillGroup.LANGUAGE,
  url: 'https://www.python.org/',
});
overallSkills.set('Subversion', {
  label: 'Subversion',
  iconSrc: '/logo/svn.png',
  group: SkillGroup.TOOL,
  url: 'https://subversion.apache.org/',
});
overallSkills.set('Selenium', {
  label: 'Selenium',
  iconSrc: '/logo/selenium.png',
  group: SkillGroup.TOOL,
  url: 'https://www.selenium.dev/',
});
overallSkills.set('ArcGIS', {
  label: 'ArcGIS',
  iconSrc: '/logo/arcgis.png',
  group: SkillGroup.TOOL,
  url: 'https://www.arcgis.com/index.html',
});
overallSkills.set('MySQL', {
  label: 'MySQL',
  iconSrc: '/logo/mysql.png',
  group: SkillGroup.DATABASE,
  url: 'https://www.mysql.com/',
});
overallSkills.set('Pusher', {
  label: 'Pusher',
  iconSrc: '/logo/pusher.png',
  group: SkillGroup.DATABASE,
  url: 'https://pusher.com/',
});
overallSkills.set('Resend', {
  label: 'Resend',
  iconSrc: '/logo/resend.svg',
  group: SkillGroup.DATABASE,
  url: 'https://resend.com/',
});

export default overallSkills;
