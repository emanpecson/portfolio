import ProjectTab from '@/components/project/ProjectTab';
import { projects } from '@/data/projects';

interface ProjectsContentLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsContentLayout(props: ProjectsContentLayoutProps) {
  return (
    <div className="flex h-screen w-full">
      <div className="sm:flex flex-col hidden max-w-[16rem] w-full overflow-y-auto pb-16 px-2 pt-20 space-y-2">
        {Object.entries(projects).map(([name, details], i) => (
          <ProjectTab name={name} details={details} key={i} />
        ))}
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
}
