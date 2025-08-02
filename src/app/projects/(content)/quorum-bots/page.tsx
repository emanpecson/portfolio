'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { ProjectKey, projects } from '@/data/projects';
import { headers } from '@/data/project/quorum-bots';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import InlineLink from '@/components/button/InlineLink';
import ContentImage from '@/components/content/ContentImage';
import ContentSubsection from '@/components/content/ContentSubsection';
import ContentList from '@/components/content/ContentList';

export default function QuorumBotsPage() {
  const name: keyof ProjectKey = 'Quorum Bots';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentText>Check out the documentation website for yourself at:</ContentText>
        <InlineLink href={String(proj.websiteUrl)}>{proj.websiteUrl}</InlineLink>
        <ContentImage src={proj.coverImageSrc} alt="Preview" />
      </ContentSection>

      <ContentSection header={headers[1]}>
        {/* problem */}
        <ContentSubsection subheader={headers[1].subheaders[0]}>
          <ContentText>
            {
              "LEGO's robotics kit is a great tool for introducing kids to programming, but its coding environment isn't accessible for users with disabilities."
            }
          </ContentText>
        </ContentSubsection>

        {/* solution */}
        <ContentSubsection subheader={headers[1].subheaders[1]}>
          <ContentText>
            {"We're making the LEGO robotics kit programmable through Quorum Studio, an accessible coding platform:"}
          </ContentText>
          <ContentList
            list={[
              "Translating LEGO's Python API into the Quorum language",
              'Enabling Quorum Studio to transmit code directly to LEGO robots',
              'Creating a documentation website to help users learn and get started',
            ]}
          />
        </ContentSubsection>

        {/* impact */}
        <ContentSubsection subheader={headers[1].subheaders[2]}>
          <ContentText>
            Our solution will be used by the Maryland School for the Blind in their upcoming LEGO robotics competition,
            expanding access to STEM education.
          </ContentText>
        </ContentSubsection>
      </ContentSection>

      <ContentSection header={headers[2]}>
        <ContentSubsection subheader={headers[2].subheaders[0]}>
          <ContentText>
            I took initiative as the lead web developer, implementing a documentation-based UI component library that
            makes it easy for others to contribute. In addition, developers can read up on my complete contributor guide
            to learn how they can contribute (
            <InlineLink href={String('https://github.com/emanpecson/quorum-bots-docs')}>
              {'https://github.com/emanpecson/quorum-bots-docs'}
            </InlineLink>
            )
          </ContentText>
          <ContentImage src="/project/quorum-bots/readme-preview.png" alt="README.md preview" />
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
