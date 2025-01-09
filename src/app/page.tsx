import Footer from '@/components/Footer';
import About from '@/components/section/About';
import Intro from '@/components/section/Intro';
import BlurFade from '@/components/ui/blur-fade';

export default function Home() {
  return (
    <div className="max-w-[40rem] w-full space-y-10 mx-auto pt-20 pb-16">
      <BlurFade delay={0}>
        <Intro />
      </BlurFade>
      <BlurFade delay={0.25}>
        <About />
      </BlurFade>
      <BlurFade delay={0.5}>
        <Footer />
      </BlurFade>
    </div>
  );
}
