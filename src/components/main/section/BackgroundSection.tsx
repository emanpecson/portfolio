export default function BackgroundSection() {
  const paragraphs = [
    "Hey there! I'm Emanuel Pecson, and I'll be wrapping up my Computer Science degree at the University of Nevada, Las Vegas by December 2024. I've been diving deep into the world of coding and problem-solving.",
    'I discovered a passion for software development from an innate desire to solve problems in my own unique way. Over my career, I had the opportunity to showcase these skills and gain valuable work experience from various internships, including JT4, General Atomics, and Clark County.',
    "On my own time, I like to spend my time improving my technical skills and knowledge with personal projects. But when I'm away from the computer screen, you can find me playing basketball, creating animations, or learning how to become a rock star.",
  ];

  return (
    <div className="space-y-6 p-0 sm:p-5 text-gray-200 text-base sm:text-lg opacity-90 mx-6 sm:mx-0 font-light">
      {paragraphs.map((paragraph: string, index: number) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
