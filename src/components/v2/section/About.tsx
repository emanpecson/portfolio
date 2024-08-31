import { paragraphs } from '@/data/about';

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="space-y-2.5">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
