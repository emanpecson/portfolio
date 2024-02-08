'use client';

import { Section } from '@/types/Section';
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import classNames from '@/lib/classNames';
import AboutSection from '@/components/section/AboutSection';
import ExperienceSection from '@/components/section/ExperienceSection';
import ProjectSection from '@/components/section/ProjectSection';
import SocialSection from '@/components/section/SocialSection';

export default function Home() {
  const [aboutIsVisible, setAboutIsVisible] = useState(true);
  const [experienceIsVisible, setExperienceIsVisible] = useState(false);
  const [projectIsVisible, setProjectIsVisible] = useState(false);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const sections: Section[] = [
    new Section('About', aboutIsVisible, aboutRef),
    new Section('Experiences', experienceIsVisible, experienceRef),
    new Section('Projects', projectIsVisible, projectRef),
  ];

  function initObserver(setSomething: Dispatch<SetStateAction<boolean>>) {
    return new IntersectionObserver(
      ([entry]) => {
        setSomething(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
  }

  useEffect(() => {
    // in useEffect to prevent it from being initialized too early (b/c of SSR)
    const aboutObserver = initObserver(setAboutIsVisible);
    const experienceObserver = initObserver(setExperienceIsVisible);
    const projectObserver = initObserver(setProjectIsVisible);

    // setup observers
    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (experienceRef.current) experienceObserver.observe(experienceRef.current);
    if (projectRef.current) projectObserver.observe(projectRef.current);

    // define cleanup (on unmount)
    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (experienceRef.current) experienceObserver.unobserve(experienceRef.current);
      if (projectRef.current) projectObserver.unobserve(projectRef.current);
    };
  }, []);

  function scrollToSection(ref: MutableRefObject<any>) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 h-full pt-20">
        <div className="lg:col-span-5 lg:h-full h-[24rem] flex justify-center">
          <div className="mx-6 sm:mx-16 lg:fixed h-full">
            <div className="flex flex-col place-content-between h-4/5">
              {/* heading */}
              <div className="text-gray-200 space-y-4">
                <h1 className="text-3xl sm:text-5xl font-bold flex justify-center lg:justify-start">Emanuel Pecson</h1>
                <h2 className="text-lg sm:text-2xl font-light flex justify-center lg:justify-start pl-0.5">
                  Software Engineer Intern at JT4
                </h2>
                <p className="flex justify-center lg:justify-start pl-0.5 text-center lg:text-left text-sm sm:text-lg font-light">
                  Some person capable of this or that, pursuing this and that
                </p>

                {/* section labels */}
                <div className="lg:block hidden pt-24 space-y-4">
                  {sections.map((sec: Section, index: number) => (
                    <div key={index}>
                      <button onClick={() => scrollToSection(sec.getRef())}>
                        <div
                          className={classNames(
                            sec.getIsVisible() ? 'opacity-100 text-sm' : 'opacity-30 text-sm',
                            'transition-all duration-150 flex place-items-center space-x-2'
                          )}>
                          <div
                            className={classNames(
                              sec.getIsVisible() ? 'w-20 h-[0.12rem]' : 'w-10 h-[0.1rem]',
                              'bg-gray-300 transition-all duration-150'
                            )}
                          />
                          <p className="uppercase font-medium text-gray-300 tracking-[0.2rem]">{sec.getName()}</p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <SocialSection />
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
