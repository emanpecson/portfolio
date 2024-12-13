import { projects } from '@/data/projects';
import { ProjectType } from '@/types/ProjectType';
import ProjectItem from '../item/ProjectItem';

export default function Projects() {
  return (
    <div>
      <h2 className="font-semibold text-2xl">Projects</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-7">
        {projects.map((proj: ProjectType, i: number) => (
          <ProjectItem proj={proj} key={i} />
        ))}
      </div>
    </div>
  );
}
