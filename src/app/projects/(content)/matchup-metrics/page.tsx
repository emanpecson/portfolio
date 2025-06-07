'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { projects } from '@/data/projects';
import { useRefMap } from '@/hooks/useRefMap';
import { ContentHeaderType } from '@/types/ContentHeader';
import UnderDevelopment from '@/components/UnderDevelopment';

export default function MatchupMetricsPage() {
  const name = 'Matchup Metrics';
  const refMap = useRefMap([]);
  const headers: ContentHeaderType[] = [];

  return (
    <ProjectContent name={name} details={projects[name]} headers={headers}>
      <UnderDevelopment />
    </ProjectContent>
  );
}
