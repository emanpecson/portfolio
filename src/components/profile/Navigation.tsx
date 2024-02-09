'use client';

import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from 'react';
import { SectionNavigation } from '@/types/SectionNavigation';
import classNames from '@/lib/classNames';

export default function Navigation({
  params,
}: {
  params: { aboutRef: MutableRefObject<any>; experienceRef: MutableRefObject<any>; projectRef: MutableRefObject<any> };
}) {
  const [aboutIsVisible, setAboutIsVisible] = useState(true);
  const [experienceIsVisible, setExperienceIsVisible] = useState(false);
  const [projectIsVisible, setProjectIsVisible] = useState(false);

  const sectionPointers: SectionNavigation[] = [
    new SectionNavigation('About', aboutIsVisible, params.aboutRef),
    new SectionNavigation('Experiences', experienceIsVisible, params.experienceRef),
    new SectionNavigation('Projects', projectIsVisible, params.projectRef),
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
    if (params.aboutRef.current) aboutObserver.observe(params.aboutRef.current);
    if (params.experienceRef.current) experienceObserver.observe(params.experienceRef.current);
    if (params.projectRef.current) projectObserver.observe(params.projectRef.current);

    // define cleanup (on unmount)
    return () => {
      if (params.aboutRef.current) aboutObserver.unobserve(params.aboutRef.current);
      if (params.experienceRef.current) experienceObserver.unobserve(params.experienceRef.current);
      if (params.projectRef.current) projectObserver.unobserve(params.projectRef.current);
    };
  }, []);

  function scrollToSection(ref: MutableRefObject<any>) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="lg:block hidden pt-24 space-y-4">
        {sectionPointers.map((secPtr: SectionNavigation, index: number) => (
          <div key={index}>
            <button onClick={() => scrollToSection(secPtr.getRef())}>
              <div
                className={classNames(
                  secPtr.getIsVisible() ? 'opacity-100 text-sm' : 'opacity-30 text-sm',
                  'transition-all duration-150 flex place-items-center space-x-2'
                )}>
                <div
                  className={classNames(
                    secPtr.getIsVisible() ? 'w-20 h-[0.12rem]' : 'w-10 h-[0.1rem]',
                    'bg-gray-300 transition-all duration-150'
                  )}
                />
                <p className="uppercase font-medium text-gray-300 tracking-[0.2rem]">{secPtr.getName()}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
