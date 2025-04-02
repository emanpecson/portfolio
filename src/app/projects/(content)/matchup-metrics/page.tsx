'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { projects } from '@/data/projects';
import { useRefMap } from '@/hooks/useRefMap';
import { ContentHeaderType } from '@/types/ContentHeader';
import UnderDevelopment from '@/components/UnderDevelopment';

export default function MatchupMetricsPage() {
  const proj = projects[3];
  const refMap = useRefMap([]);
  const headers: ContentHeaderType[] = [];

  return (
    <ProjectContent project={proj} headers={headers}>
      <UnderDevelopment />
    </ProjectContent>
  );
}
