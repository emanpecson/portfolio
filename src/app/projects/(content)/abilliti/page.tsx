'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { ProjectKey, projects } from '@/data/projects';
import UnderDevelopment from '@/components/UnderDevelopment';
import { headers } from '@/data/project/abilliti';

export default function AbillitiPage() {
  const name: keyof ProjectKey = 'Abilliti';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <UnderDevelopment />
    </ProjectContent>
  );
}
