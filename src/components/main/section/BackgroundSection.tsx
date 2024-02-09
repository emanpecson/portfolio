export default function BackgroundSection() {
  const paragraphs = [
    "Hey there! I'm Emanuel Pecson, and I'll be wrapping up my Computer Science degree at the University of Nevada, Las Vegas by December 2024. I've been diving deep into the world of coding and problem-solving.",
    "I got hooked on programming because of the endless creativity it offers. There's something magical about tackling challenges and learning new technologies along the way. I've had my hands full with various technical internships and personal projects.",
    "When I'm not coding, you can find me playing the electric guitar, playing the drums, dancing, animating, or playing basketball.",
  ];

  return (
    <div className="space-y-6 p-0 sm:p-5 text-gray-200 text-base sm:text-lg opacity-90 mx-6 sm:mx-0 font-light">
      {paragraphs.map((paragraph: string, index: number) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
