'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { ContentHeaderType } from '@/types/ContentHeader';
import NavContentHeader from '../NavContentHeader';
import { useEffect, useState } from 'react';

export interface ContentProps {
  headers: ContentHeaderType[];
  children: React.ReactNode;
}
export type InViewMap = { [id: string]: boolean };

export default function Content(props: ContentProps) {
  const [inViewMap, setInViewMap] = useState<InViewMap>({});

  // trigger when a header leaves the view: updates the map of headers-in-view
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      setInViewMap((prevMap) => ({ ...prevMap, [entry.target.id]: entry.isIntersecting }));
    }
  };

  // define + handle observer
  useEffect(() => {
    const root = null; // define document as observable bounds
    const threshold = 0.25; // a value from 0.0-1.0, where 0.25 means 25% of elem is considered "in-view"
    const observer = new IntersectionObserver(observerCallback, { root, threshold });

    // let all headers/subheaders be tracked by observer
    for (const header of props.headers) {
      if (header.ref?.current) observer.observe(header.ref.current);
      for (const subheader of header.subheaders) {
        if (subheader.ref?.current) observer.observe(subheader.ref.current);
      }
    }

    return () => {
      // cleanup observer on exit
      for (const header of props.headers) {
        if (header.ref?.current) observer.unobserve(header.ref.current);
        for (const subheader of header.subheaders) {
          if (subheader.ref?.current) observer.unobserve(subheader.ref.current);
        }
      }
      observer.disconnect();
    };
  }, [props.headers]);

  return (
    <div className="flex h-screen">
      {/* route navigations */}
      <div className="sm:block hidden w-80 overflow-y-auto pb-16 px-8 pt-20 space-y-4">
        {projects.map((proj, i) => (
          <div>
            <Link href={proj.path} key={i}>
              {proj.name}
            </Link>
          </div>
        ))}
      </div>

      {/* content */}
      <div className="w-full max-w-[40rem] space-y-4">{props.children}</div>

      {/* in-page navigations */}
      <div className="lg:block hidden w-[28rem] overflow-y-auto pb-16 pt-20 px-8 space-y-6">
        <p className="text-xs font-semibold uppercase">On this page</p>
        <div className="flex flex-col space-y-2">
          {props.headers.map((header: ContentHeaderType) => (
            <NavContentHeader header={header} key={header.id} inViewMap={inViewMap} />
          ))}
        </div>
      </div>
    </div>
  );
}
