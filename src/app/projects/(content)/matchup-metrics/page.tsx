'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { projects } from '@/data/projects';
import { useRefMap } from '@/hooks/useRefMap';
import { ContentHeaderType } from '@/types/ContentHeader';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import InlineLink from '@/components/button/InlineLink';
import ContentImage from '@/components/content/ContentImage';
import ContentSubsection from '@/components/content/ContentSubsection';

export default function MatchupMetricsPage() {
  const name = 'Matchup Metrics';
  const proj = projects[name];
  const refMap = useRefMap(['website', 'motivation', 'fans']);
  const headers: ContentHeaderType[] = [
    { id: '0', label: 'Try it out!', ref: refMap.website },
    {
      id: '1',
      label: 'Motivation',
      ref: refMap.motivation,
      subheaders: [{ id: '1.1', label: 'An App for NBA Fans', ref: refMap.fans }],
    },
  ];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentText>Check out the application for yourself at:</ContentText>
        <InlineLink href={String(proj.websiteUrl)}>{proj.websiteUrl}</InlineLink>
      </ContentSection>

      <ContentSection header={headers[1]}>
        <ContentImage src={proj.coverImageSrc} alt="Motivation" />

        <ContentSubsection subheader={headers[1].subheaders![0]}>
          As an NBA fan, I like to make up various "what-if" scenarios to see just how good a lineup would be. So I
          thought, why not make an app for that?
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
