import { projects } from '@/data/projects';
import { ProjectType } from '@/types/v2/ProjectType';
import ProjectItem from '../item/ProjectItem';

export default function Projects() {
  return (
    <div>
      <h2 className="font-semibold text-2xl">Projects</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((proj: ProjectType, i: number) => (
          <ProjectItem proj={proj} key={i} />
        ))}
      </div>
    </div>
  );
}
