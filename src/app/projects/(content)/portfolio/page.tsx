'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { ProjectKey, projects } from '@/data/projects';
import UnderDevelopment from '@/components/UnderDevelopment';
import { headers } from '@/data/project/portfolio';

export default function PortfolioPage() {
  const name: keyof ProjectKey = 'Portfolio';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <UnderDevelopment />
    </ProjectContent>
  );
}
