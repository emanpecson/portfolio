import { ProjectType } from '@/types/ProjectType';
import Tag from './Tag';

export default function Project({ params }: { params: ProjectType }) {
  return (
    <>
      <div className="flex w-full hover:bg-gray-400 hover:bg-opacity-10 rounded-md p-5 transition-all duration-200 hover:shadow-sm hover:shadow-gray-600 hover:cursor-pointer">
        <div className="w-3/12 pr-10">
          <div className="bg-gray-600 rounded-md bg-opacity-70">
            <img src={params.imageSrc} className="rounded-md p-1" />
          </div>
        </div>

        <div className="w-9/12 space-y-6">
          <div className="place-items-center text-gray-300 font-medium">
            <h1 className="text-xl text-gray-300">{params.title}</h1>
          </div>

          <p className="text-gray-400">{params.description}</p>

          <div className="flex flex-wrap">
            {params.tags.map((tag: string, index: number) => (
              <Tag params={{ text: tag }} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
