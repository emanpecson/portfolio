import GitHubButton from '@/components/button/GitHubButton';
import ProjectPreview from '@/components/project/ProjectPreview';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-16 max-w-[120rem] pt-20 pb-16">
      <div className="mx-auto text-center space-y-1">
        <h1 className="font-black text-4xl">Projects</h1>
        <p className="text-lg font-medium">Projects that I have created or am maintaining</p>
        <GitHubButton href="https://github.com/emanpecson" />
      </div>

      <div className="w-full flex justify-center">
        <div className="xl:columns-3 md:columns-2 columns-1 space-y-4">
          {projects.map((proj, i) => (
            <ProjectPreview project={proj} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
