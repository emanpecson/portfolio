import Tag from './Tag';
import { useRouter } from 'next/navigation';
import { ExperienceType } from '@/types/v1/ExperienceType';
import { TaskType } from '@/types/v1/TaskType';

export default function Experience({ params }: { params: ExperienceType }) {
  const router = useRouter();

  return (
    <button
      className="sm:flex w-full hover:bg-gray-400 hover:bg-opacity-10 rounded-md p-2 sm:p-5 transition-all duration-200 hover:shadow-sm hover:shadow-gray-600 text-left"
      onClick={() => router.push(params.website)}
    >
      {/* timeline */}
      <div className="sm:w-3/12 pr-10">
        <p className="text-gray-400 text-xs sm:text-base uppercase font-medium opacity-70 pb-2 sm:pb-0">
          {params.timeline}
        </p>
      </div>

      {/* content */}
      <div className="sm:w-9/12 space-y-6">
        <div className="place-items-center text-gray-300 font-medium">
          <h1 className="text-base sm:text-xl text-gray-300">{params.employer}</h1>
          <h2 className="text-sm sm:text-base text-gray-300">{params.position}</h2>
        </div>

        {params.tasks.map((task: TaskType, index: number) => (
          <div className="space-y-1.5">
            <p className="text-gray-300 sm:text-base text-sm font-medium">{task.title}</p>
            <p className="text-gray-400 sm:text-base text-sm font-light">{task.description}</p>
          </div>
        ))}

        <div className="flex flex-wrap">
          {params.tags.map((tag: string, index: number) => (
            <Tag params={{ text: tag }} key={index} />
          ))}
        </div>
      </div>
    </button>
  );
}
