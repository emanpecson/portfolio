'use client';

import Link from 'next/link';
import { ContentHeaderType } from '@/types/ContentHeader';
import NavContentHeader from '../NavContentHeader';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, GithubIcon, MousePointerClickIcon } from 'lucide-react';
import Label from '../Label';
import { ProjectType } from '@/types/ProjectType';
import InlineLink from '../button/InlineLink';
import { SkillType } from '@/types/SkillType';
import IconLinkTag from '../button/IconLinkTag';
import IconLinkButton from '../button/IconLinkButton';

export interface ProjectContentProps {
  project: ProjectType;
  headers: ContentHeaderType[];
  children: React.ReactNode;
}
export type InViewMap = { [id: string]: boolean };

export default function ProjectContent(props: ProjectContentProps) {
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
      if (header.subheaders) {
        for (const subheader of header.subheaders) {
          if (subheader.ref?.current) observer.observe(subheader.ref.current);
        }
      }
    }

    return () => {
      // cleanup observer on exit
      for (const header of props.headers) {
        if (header.ref?.current) observer.unobserve(header.ref.current);
        if (header.subheaders) {
          for (const subheader of header.subheaders) {
            if (subheader.ref?.current) observer.unobserve(subheader.ref.current);
          }
        }
      }
      observer.disconnect();
    };
  }, [props.headers]);

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="lg:px-8 px-4 overflow-y-auto max-w-[50rem] w-full pb-16 pt-20 min-h-screen space-y-4">
        <Link
          href="/projects"
          className="flex space-x-1 w-fit place-items-center rounded-full text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-150"
        >
          <ChevronLeftIcon size={20} />
          <span className="font-medium">Return to projects</span>
        </Link>

        <div className="space-y-1.5">
          <h1 className="text-4xl font-extrabold text-neutral-700 dark:text-neutral-100">{props.project.name}</h1>
          <div className="flex space-x-2">
            <Label>{props.project.label}</Label>
            {props.project.websiteUrl && (
              <IconLinkButton icon={MousePointerClickIcon} href={props.project.websiteUrl} />
            )}
            {props.project.repoUrl && <IconLinkButton icon={GithubIcon} href={props.project.repoUrl} />}
          </div>
        </div>
        <p className="font-normal">{props.project.description}</p>

        <div className="space-y-8">{props.children}</div>
      </div>

      {/* in-page navigations */}
      <div className="lg:block hidden w-[20rem] overflow-y-auto pb-16 pt-20 px-8 space-y-6">
        <p className="text-xs font-semibold uppercase">On this page</p>
        <div className="flex flex-col space-y-2">
          {props.headers.map((header: ContentHeaderType) => (
            <NavContentHeader header={header} key={header.id} inViewMap={inViewMap} />
          ))}
        </div>

        {props.project.websiteUrl && (
          <div className="border rounded-md shadow-md p-3">
            <div className="flex space-x-1 place-items-center text-neutral-700 dark:text-neutral-300">
              <MousePointerClickIcon size={20} />
              <span>Give the project a try at </span>
            </div>
            <InlineLink href={props.project.websiteUrl}>{props.project.name}</InlineLink>.
          </div>
        )}
        {props.project.repoUrl && (
          <div className="border rounded-md shadow-md p-3">
            <div className="flex space-x-1 place-items-center text-neutral-700 dark:text-neutral-300">
              <GithubIcon size={20} />
              <span>Source code is available on </span>
            </div>
            <InlineLink href={props.project.repoUrl}>GitHub</InlineLink>.
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {props.project.tags.map((tag: SkillType, i: number) => (
            <IconLinkTag href={tag.url} imgSrc={tag.iconSrc} label={tag.label} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
