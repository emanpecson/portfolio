import Footer from '@/components/Footer';
import About from '@/components/home/About';
import Contacts from '@/components/home/Contacts';
import Directory from '@/components/home/Directory';
import Intro from '@/components/home/Intro';
import BlurFade from '@/components/ui/blur-fade';

export default function Home() {
  return (
    <div className="max-w-[40rem] mx-auto">
      <div className="w-full space-y-4 py-20 pb-16">
        <BlurFade delay={0}>
          <Intro />
        </BlurFade>
        <BlurFade delay={0.25}>
          <About />
        </BlurFade>
        <BlurFade delay={0.5}>
          <Contacts />
        </BlurFade>
        <BlurFade delay={0.75}>
          <Directory />
        </BlurFade>
      </div>
      <BlurFade delay={1}>
        <Footer />
      </BlurFade>
    </div>
  );
}
