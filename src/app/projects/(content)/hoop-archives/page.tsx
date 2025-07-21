'use client';

import ProjectContent from '@/components/project/ProjectContent';
import ContentSection from '@/components/content/ContentSection';
import ContentText from '@/components/content/ContentText';
import { ProjectKey, projects } from '@/data/projects';
import ContentSubsection from '@/components/content/ContentSubsection';
import InlineLink from '@/components/button/InlineLink';
import { headers } from '@/data/project/hoop-archives';
import ContentList from '@/components/content/ContentList';
import ContentImage from '@/components/content/ContentImage';

export default function HoopArchivesPage() {
  const name: keyof ProjectKey = 'Hoop Archives';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentText>Check out the application for yourself at:</ContentText>
        <InlineLink href={String(proj.websiteUrl)}>{proj.websiteUrl}</InlineLink>
      </ContentSection>

      <ContentSection header={headers[1]}>
        <ContentSubsection subheader={headers[1].subheaders[0]}>
          <ContentText>
            Web-app that provides the ability to turn basketball videos into clips that can later be filtered to compile
            all clips of:
          </ContentText>
          <ContentList
            list={[
              'Johnny scoring a contested three-pointer over Adam',
              'Adam locking up Johnny on defense in 2022',
              'Chris scoring a game-winner',
            ]}
          />
        </ContentSubsection>

        <ContentSubsection subheader={headers[1].subheaders[1]}>
          <ContentText>
            Before this app came along, I had an Instagram account where I'd post edited basketball games that I played
            with my friends.
          </ContentText>
          <ContentText>
            It got to a point where there'd be over 100 posts, which made it harder to go through the games and find
            specific clips or highlights.
          </ContentText>
          <ContentText>
            In addition, the video editor that I was using, iMovie, was okay, but I noticed that i had a specific
            editing workflow that involved:
          </ContentText>
          <ContentList
            list={[
              'Scrubbing through a 10-20 minute video just for the clips where somebody scored or blocked someone',
              'Then applying an updated score on each clip',
            ]}
          />
          <ContentText>
            It was a simple workflow, but since iMovie was built to be multi-purposeful, I would often get dragged by
            the extra set of options or buttons that I wouldn't ever touch during my editing sessions.
          </ContentText>
        </ContentSubsection>

        {/* Simplified video editor */}
        <ContentSubsection subheader={headers[1].subheaders[2]}>
          <ContentImage src="/cover/hoop-archives.png" alt="Video editor" />

          <ContentText>
            To overcome the shortcomings I had with iMovie, I developed a video editing workflow that simplified the
            process of minimizing an extensive basketball video into a set of clips.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[1].subheaders[3]}>
          <ContentText>
            A big benefit of being able to create each clip through this app is that you can now define metadata that
            makes each clip searchable.
          </ContentText>
          <ContentText>
            Yes, that means you can now create a video compilation of each time you scored over your basketball arch
            nemesis.
          </ContentText>
        </ContentSubsection>
      </ContentSection>

      <ContentSection header={headers[2]}>
        <ContentImage src="/hoop-archives-architecture.png" alt="Architecture" />

        <ContentSubsection subheader={headers[2].subheaders[0]}>
          <ContentText>
            The Next.js app houses the functionality for editing a game by marking each clip and the metadata that
            defines it.
          </ContentText>
          <ContentText>Some metadata that the user can configure are:</ContentText>
          <ContentList
            list={[
              'Player scoring',
              'Teammate assisting',
              'Opponent defending',
              'Tags (e.g. #dunk #anklebreaker #midrange)',
              'And more...',
            ]}
          />
          <ContentText>
            Once a game is completed, a request is sent to an SQS queue to be processed in the background.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders[1]}>
          <ContentText>Processing video clips and can be computation-intensive.</ContentText>
          <ContentText>
            Instead of handling this through Next.js, all of the logic and resources are all packaged on a dedicated
            Java-based Lambda.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders[2]}>
          <ContentText>
            After the video-processing Lambda handles an upload request, all of the clip video files are stored in S3,
            and the URL of each clip is stored in DynamoDB along with its metadata.
          </ContentText>
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
