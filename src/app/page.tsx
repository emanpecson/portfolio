'use client';

import { useRef } from 'react';
import AboutSection from '@/components/main/section/AboutSection';
import ExperienceSection from '@/components/main/section/ExperienceSection';
import ProjectSection from '@/components/main/section/ProjectSection';
import ContactMe from '@/components/profile/ContactMe';
import Navigation from '@/components/profile/Navigation';
import Heading from '@/components/profile/Heading';

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 h-full pt-20">
        <div className="lg:col-span-5 lg:h-full h-[24rem] flex justify-center">
          <div className="mx-6 sm:mx-16 lg:fixed h-full">
            <div className="flex flex-col place-content-between h-4/5">
              {/* heading */}
              <div>
                <Heading />

                <Navigation params={{ aboutRef, experienceRef, projectRef }} />
              </div>

              <ContactMe />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 h-full">
          <div className="sm:mx-16 space-y-20">
            <div
              ref={aboutRef}
              className="space-y-6 p-0 sm:p-5 text-gray-400 text-base sm:text-lg opacity-90 mx-6 sm:mx-0">
              <AboutSection />
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
    </>
  );
}
