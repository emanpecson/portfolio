import Tag from './Tag';
import { ProjectType } from '@/types/v1/ProjectType';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Project({ params }: { params: ProjectType }) {
  const router = useRouter();

  return (
    <button
      className="sm:flex w-full hover:bg-gray-400 hover:bg-opacity-10 rounded-md p-2 sm:p-5 transition-all duration-200 hover:shadow-sm hover:shadow-gray-600 text-left"
      onClick={() => router.push(params.website ? params.website : params.repository)}
    >
      <div className="sm:w-3/12 sm:pr-10">
        <div className="bg-gray-600 rounded-md bg-opacity-70 sm:block hidden w-fit">
          <Image
            src={params.imageSrc}
            alt={params.imageSrc}
            height={32}
            width={60}
            className="rounded-md w-full object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="sm:w-9/12 space-y-6">
        <div className="place-items-center text-gray-300 font-medium">
          <h1 className="sm:text-xl text-base text-gray-300">{params.title}</h1>
        </div>

        <p className="text-gray-400 sm:text-base text-sm font-light">{params.description}</p>

        <div className="flex flex-wrap">
          {params.tags.map((tag: string, index: number) => (
            <Tag params={{ text: tag }} key={index} />
          ))}
        </div>

        <div className="sm:hidden block bg-gray-600 rounded-md bg-opacity-70 w-fit">
          <img src={params.imageSrc} className="rounded-md p-1" />
        </div>
      </div>
    </button>
  );
}
