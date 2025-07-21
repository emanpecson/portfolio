import GitHubButton from '@/components/button/GitHubButton';
import Footer from '@/components/Footer';
import ProjectPreview from '@/components/project/ProjectPreview';
import BlurFade from '@/components/ui/blur-fade';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-16 max-w-[100rem] pt-20 pb-16">
      <div className="mx-auto text-center space-y-1">
        <h1 className="font-extrabold text-3xl text-neutral-700 dark:text-neutral-200">Personal Projects</h1>
        <p className="text-lg font-medium">Full-stack web apps, documentation websites, and more!</p>
        <GitHubButton href="https://github.com/emanpecson" />
      </div>

      <div className="w-full flex justify-center">
        <div className="xl:columns-3 md:columns-2 columns-1 space-y-4">
          {Object.entries(projects).map(([name, details], i) => (
            <BlurFade key={i} delay={0.25 * i * 0.1}>
              <ProjectPreview name={name} details={details} key={i} />
            </BlurFade>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
