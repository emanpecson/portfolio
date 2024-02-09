export default function Heading() {
  const name = 'Emanuel Pecson';
  const currentPosition = 'Software Engineer at JT4';
  const missionStatement =
    'I utilize my experience in full-stack development to deliver impactful solutions and continuously learn new technologies.';

  return (
    <>
      <div className="text-gray-200 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold flex justify-center lg:justify-start">{name}</h1>
        <h2 className="text-lg sm:text-2xl font-light flex justify-center lg:justify-start pl-0.5">
          {currentPosition}
        </h2>
        <p className="flex justify-center lg:justify-start pl-0.5 text-center lg:text-left text-sm sm:text-lg font-light text-gray-400">
          {missionStatement}
        </p>
      </div>
    </>
  );
}
