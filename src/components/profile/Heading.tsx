import { mission, name, position } from '@/data/intro';

export default function Heading() {
  return (
    <div className="text-gray-200 space-y-4">
      <h1 className="text-3xl sm:text-5xl font-bold flex justify-center lg:justify-start">{name}</h1>
      <h2 className="text-lg sm:text-2xl font-light flex justify-center lg:justify-start pl-0.5">{position}</h2>
      <p className="flex justify-center lg:justify-start pl-0.5 text-center lg:text-left text-sm sm:text-lg font-light text-gray-400">
        {mission}
      </p>
    </div>
  );
}
