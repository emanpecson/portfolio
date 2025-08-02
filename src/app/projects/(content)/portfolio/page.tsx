'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { ProjectKey, projects } from '@/data/projects';
import { headers } from '@/data/project/portfolio';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import ContentSubsection from '@/components/content/ContentSubsection';
import InlineLink from '@/components/button/InlineLink';
import ContentImage from '@/components/content/ContentImage';

export default function PortfolioPage() {
  const name: keyof ProjectKey = 'Portfolio';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentText>This portfolio website has gone through many iterations (and will continue to do so!)</ContentText>
        <ContentText>{"Here's a preview of some of the different versions:"}</ContentText>

        <ContentSubsection subheader={headers[0].subheaders[0]}>
          <ContentText>Very obviously, inspired by </ContentText>
          <InlineLink href="https://brittanychiang.com">https://brittanychiang.com</InlineLink>
          <ContentImage src="/project/portfolio/v1.png" alt="v1" />
        </ContentSubsection>

        <ContentSubsection subheader={headers[0].subheaders[1]}>
          <ContentText>This one was an attempt at recreating</ContentText>
          <InlineLink href="https://magicui.design/docs/templates/portfolio">
            https://magicui.design/docs/templates/portfolio
          </InlineLink>

          <ContentImage src="/project/portfolio/v2.png" alt="v2" />
        </ContentSubsection>

        <ContentSubsection subheader={headers[0].subheaders[2]}>
          <ContentText>
            With the current version, I wanted to step away from the single-page layout and try breaking the various
            aspects into their own dedicated route.
          </ContentText>
          <ContentText>
            With this approach, I can get into much greater depth and really showcase EVERYTHING.
          </ContentText>
          <ContentImage src="/project/portfolio/v3.png" alt="v3" />
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
