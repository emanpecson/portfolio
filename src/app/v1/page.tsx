'use client';

import { useEffect, useRef } from 'react';
import BackgroundSection from '@/components/v1/main/section/BackgroundSection';
import ExperienceSection from '@/components/v1/main/section/ExperienceSection';
import ProjectSection from '@/components/v1/main/section/ProjectSection';
import ContactMe from '@/components/v1/profile/ContactMe';
import SectionNavigation from '@/components/v1/profile/SectionNavigation';
import Heading from '@/components/v1/profile/Heading';
import CursorEffect from '@/components/v1/CursorEffect';
import { useTheme } from 'next-themes';

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  const backgroundRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    if (resolvedTheme !== 'dark') setTheme('dark');
  });

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 h-full py-20 mx-auto max-w-[100rem]">
        <div className="lg:col-span-5 lg:h-full h-[24rem] flex justify-center">
          <div className="mx-6 sm:mx-16 h-full lg:fixed max-w-xl">
            <div className="flex flex-col place-content-between h-4/5">
              <div>
                <Heading />
                <SectionNavigation params={{ backgroundRef, experienceRef, projectRef }} />
              </div>
              <ContactMe />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 h-full">
          <div className="sm:mx-16 space-y-20">
            <div ref={backgroundRef}>
              <BackgroundSection />
            </div>

            <div ref={experienceRef}>
              <div className="sm:hidden block h-14 sticky top-0 w-full bg-app bg-opacity-50 backdrop-blur-sm">
                <p className="flex place-items-center h-full text-gray-300 font-light px-6">EXPERIENCE</p>
              </div>

              <ExperienceSection />
            </div>

            <div ref={projectRef}>
              <div className="sm:hidden block h-14 sticky top-0 w-full bg-app bg-opacity-50 backdrop-blur-sm">
                <p className="flex place-items-center h-full text-gray-300 font-light px-6">PROJECTS</p>
              </div>

              <ProjectSection />
            </div>
          </div>
        </div>
      </div>

      <CursorEffect />
    </>
  );
}
