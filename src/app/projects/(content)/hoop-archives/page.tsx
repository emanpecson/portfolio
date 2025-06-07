'use client';

import ProjectContent from '@/components/project/ProjectContent';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import { projects } from '@/data/projects';
import { useRefMap } from '@/hooks/useRefMap';
import { ContentHeaderType } from '@/types/ContentHeader';
import ContentSubsection from '@/components/content/ContentSubsection';
import UnderDevelopment from '@/components/UnderDevelopment';

export default function HoopArchivesPage() {
  const name = 'Hoop Archives';
  const refMap = useRefMap([]);
  const headers: ContentHeaderType[] = [];

  return (
    <ProjectContent name={name} details={projects[name]} headers={headers}>
      <UnderDevelopment />
    </ProjectContent>
  );
}
