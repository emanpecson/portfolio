import { greeting, mission, position } from '@/data/intro';

export default function Intro() {
  return (
    <div className="font-medium space-y-4">
      <div>
        <h1 className="text-6xl">{greeting}</h1>
        <p className="text-2xl">{position}</p>
      </div>
      <p className="text-2xl">{mission}</p>
    </div>
  );
}
