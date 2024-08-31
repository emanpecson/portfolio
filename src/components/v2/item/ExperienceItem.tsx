export default function ExperienceItem() {
  return (
    <div className="flex space-x-4 place-items-center">
      <div>
        <div className="rounded-full bg-neutral-500 h-10 w-10" />
      </div>

      <div className="flex justify-between w-full">
        <div className="w-full">
          <p className="font-semibold text-lg">company</p>
          <p className="font-medium text-sm">position</p>
        </div>
        <p className="text-neutral-400 whitespace-nowrap">some date</p>
      </div>
    </div>
  );
}
