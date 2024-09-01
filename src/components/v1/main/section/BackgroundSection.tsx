import { paragraphs } from '@/data/about';

export default function BackgroundSection() {
  return (
    <div className="space-y-6 p-0 sm:p-5 text-gray-200 text-base sm:text-lg opacity-90 mx-6 sm:mx-0 font-light">
      {paragraphs.map((paragraph: string, index: number) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
