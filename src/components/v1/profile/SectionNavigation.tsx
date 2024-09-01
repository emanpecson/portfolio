'use client';

import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from 'react';
import { Section } from '@/types/v1/Section';
import classNames from '@/lib/classNames';

export default function SectionNavigation({
  params,
}: {
  params: {
    backgroundRef: MutableRefObject<any>;
    experienceRef: MutableRefObject<any>;
    projectRef: MutableRefObject<any>;
  };
}) {
  const [backgroundIsVisible, setBackgroundIsVisible] = useState(true);
  const [experienceIsVisible, setExperienceIsVisible] = useState(false);
  const [projectIsVisible, setProjectIsVisible] = useState(false);

  const sections: Section[] = [
    new Section('Background', backgroundIsVisible, params.backgroundRef),
    new Section('Experiences', experienceIsVisible, params.experienceRef),
    new Section('Projects', projectIsVisible, params.projectRef),
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
    const backgroundObserver = initObserver(setBackgroundIsVisible);
    const experienceObserver = initObserver(setExperienceIsVisible);
    const projectObserver = initObserver(setProjectIsVisible);

    // setup observers
    if (params.backgroundRef.current) backgroundObserver.observe(params.backgroundRef.current);
    if (params.experienceRef.current) experienceObserver.observe(params.experienceRef.current);
    if (params.projectRef.current) projectObserver.observe(params.projectRef.current);

    // define cleanup (on unmount)
    return () => {
      if (params.backgroundRef.current) backgroundObserver.unobserve(params.backgroundRef.current);
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
        {sections.map((sec: Section, index: number) => (
          <div key={index}>
            <button onClick={() => scrollToSection(sec.getRef())}>
              <div
                className={classNames(
                  sec.getIsVisible() ? 'opacity-100' : 'opacity-30 hover:opacity-90',
                  'transition-all duration-150 flex place-items-center space-x-2 text-sm'
                )}
              >
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
    </>
  );
}
