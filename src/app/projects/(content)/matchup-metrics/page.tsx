'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { ProjectKey, projects } from '@/data/projects';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import InlineLink from '@/components/button/InlineLink';
import ContentImage from '@/components/content/ContentImage';
import ContentSubsection from '@/components/content/ContentSubsection';
import { headers } from '@/data/project/matchup-metrics';
import ContentList from '@/components/content/ContentList';
import ContentVideo from '@/components/content/ContentVideo';

export default function MatchupMetricsPage() {
  const name: keyof ProjectKey = 'Matchup Metrics';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentText>Check out the application for yourself at:</ContentText>
        <InlineLink href={String(proj.websiteUrl)}>{proj.websiteUrl}</InlineLink>
        <ContentImage src={proj.coverImageSrc} alt="Preview" />
      </ContentSection>

      <ContentSection header={headers[1]}>
        <ContentSubsection subheader={headers[1].subheaders[0]}>
          <ContentText>
            Simple application that lets you compare NBA players performance across key statistical metrics.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[1].subheaders[1]}>
          <ContentText>The ability to compare player stats is essential to:</ContentText>
          <ContentList
            list={[
              'Keeping your NBA Fantasy League team competitve',
              'Deciding whether to bet under or over on points with Kevin Durant (and why the correct answer is always "over")',
              'Or proving that LeBron is still the undisputed GOAT',
            ]}
          />
        </ContentSubsection>
      </ContentSection>

      <ContentSection header={headers[2]}>
        <ContentSubsection subheader={headers[2].subheaders[0]}>
          <ContentVideo src="/project/matchup-metrics/demo/player-comparison.mp4" />
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders[1]}>
          <ContentVideo src="/project/matchup-metrics/demo/lineup-comparison.mp4" />
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
