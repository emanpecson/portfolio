'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { ProjectKey, projects } from '@/data/projects';
import UnderDevelopment from '@/components/UnderDevelopment';
import { headers } from '@/data/project/quorum-bots';

export default function QuorumBotsPage() {
  const name: keyof ProjectKey = 'Quorum Bots';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <UnderDevelopment />
    </ProjectContent>
  );
}
