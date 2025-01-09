import ProjectTab from '@/components/project/ProjectTab';
import { projects } from '@/data/projects';

interface ProjectsContentLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsContentLayout(props: ProjectsContentLayoutProps) {
  return (
    <div className="flex h-screen w-full">
      <div className="sm:flex flex-col hidden max-w-[20rem] w-full overflow-y-auto pb-16 px-8 pt-20 space-y-4">
        {projects.map((proj, i) => (
          <ProjectTab project={proj} key={i} />
        ))}
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
}
