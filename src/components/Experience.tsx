import Tag from './Tag';
import { ExperienceType } from '../types/ExperienceType';

export default function Experience({ params }: { params: ExperienceType }) {
  return (
    <>
      <div className="sm:flex w-full hover:bg-gray-400 hover:bg-opacity-10 rounded-md p-2 sm:p-5 transition-all duration-200 hover:shadow-sm hover:shadow-gray-600 hover:cursor-pointer">
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
            <h2 className="text-sm sm:text-base text-gray-400">{params.position}</h2>
          </div>

          <p className="text-gray-400 sm:text-base text-sm">{params.description}</p>

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
