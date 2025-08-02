'use client';

import ProjectContent from '@/components/project/ProjectContent';
import { ProjectKey, projects } from '@/data/projects';
import { headers } from '@/data/project/abilliti';
import ContentSection from '@/components/content/ContentSection';
import ContentSubsection from '@/components/content/ContentSubsection';
import ContentText from '@/components/content/ContentText';
import ContentList from '@/components/content/ContentList';
import ContentImage from '@/components/content/ContentImage';
import ContentVideo from '@/components/content/ContentVideo';

export default function AbillitiPage() {
  const name: keyof ProjectKey = 'Abilliti';
  const proj = projects[name];

  return (
    <ProjectContent name={name} details={proj} headers={headers}>
      <ContentSection header={headers[0]}>
        <ContentSubsection subheader={headers[0].subheaders[0]}>
          <ContentText>
            {
              "This app is still in its early development stages. There isn't a fully functional product just yet. However, there are several important aspects that are already well underway and worth highlighting."
            }
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[0].subheaders[1]}>
          <ContentText>
            The motivation behind building this project stems from the fragmentation of core business tools across
            multiple platforms. The goal is to provide an open-source solution that brings your day-to-day business
            operations into one centralized, unified application.
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[0].subheaders[2]}>
          <ContentList
            list={[
              '[x] invoice builder + generation',
              '[ ] invoice view',
              '[ ] managing finances',
              '[ ] managing employee-assigned tasks',
            ]}
          />
        </ContentSubsection>

        <ContentSubsection subheader={headers[0].subheaders[3]}>
          <ContentText>TBD</ContentText>
        </ContentSubsection>
      </ContentSection>

      <ContentSection header={headers[1]}>
        <ContentSubsection subheader={headers[1].subheaders[0]}>
          <ContentText>
            {
              "So far, I've been responsible for taking the project from initial concept to implementation. This includes designing the UI mockups and developing a robust, type-safe form that dynamically generates invoices based on user input."
            }
          </ContentText>
        </ContentSubsection>

        <ContentSubsection subheader={headers[1].subheaders[1]}>
          <ContentImage src="/project/abilliti/mockup/invoice-builder.png" alt="Invoice builder" />
        </ContentSubsection>
      </ContentSection>

      <ContentSection header={headers[2]}>
        <ContentSubsection subheader={headers[2].subheaders[0]}>
          <ContentVideo src="/project/abilliti/demo/form-input.mp4" />
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders[1]}>
          <ContentVideo src="/project/abilliti/demo/form-dynamic-items.mp4" />
        </ContentSubsection>

        <ContentSubsection subheader={headers[2].subheaders[2]}>
          <ContentVideo src="/project/abilliti/demo/invoice-download.mp4" />
        </ContentSubsection>
      </ContentSection>
    </ProjectContent>
  );
}
