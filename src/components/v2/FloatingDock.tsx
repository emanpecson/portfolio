import { Dock, DockIcon } from '@/components/magicui/dock';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export default function FloatingDock() {
  return (
    <TooltipProvider delayDuration={0}>
      <Dock
        className="fixed bottom-4 rounded-full shadow-2xl border-[1.5px] border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 opacity-[95%] backdrop-blur-xl z-30"
        direction="middle"
        magnification={50}
      >
        <DockIcon className="dark:hover:bg-neutral-800 hover:bg-neutral-200/50">
          <Tooltip>
            <TooltipTrigger asChild className="w-full h-full flex justify-center place-items-center">
              <Link rel="noopener noreferrer" target="_blank" href="https://github.com/emanpecson">
                <GithubIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon className="dark:hover:bg-neutral-800 hover:bg-neutral-200/50">
          <Tooltip>
            <TooltipTrigger asChild className="w-full h-full flex justify-center place-items-center">
              <Link rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/emanuel-pecson">
                <LinkedinIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon className="dark:hover:bg-neutral-800 hover:bg-neutral-200/50">
          <Tooltip>
            <TooltipTrigger asChild className="w-full h-full flex justify-center place-items-center">
              <Link href="mailto:emanpecson@gmail.com">
                <MailIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Email</TooltipContent>
          </Tooltip>
        </DockIcon>
        <div className="h-full w-[0.5px] dark:bg-neutral-700 bg-neutral-400 rounded-full" />
        <DockIcon className="dark:hover:bg-neutral-800 hover:bg-neutral-200/50">
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
