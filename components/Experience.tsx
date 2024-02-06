import Tag from './Tag';
import { ExperienceType } from '../types/ExperienceType';

export default function Experience({ params }: { params: ExperienceType }) {
  return (
    <>
      <div className="flex">
        {/* timeline */}
        <div className="w-3/12">
          <p>{params.timeline}</p>
        </div>

        {/* content */}
        <div className="w-9/12 space-y-3">
          <div className="flex space-x-3">
            <h1>{params.employer}</h1>
            <p>•</p>
            <h1>{params.position}</h1>
          </div>

          <p>{params.description}</p>

          <div className="flex">
            {params.tags.map((tag: string, index: number) => (
              <Tag params={{ text: tag }} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
