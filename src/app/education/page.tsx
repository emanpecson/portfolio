import CertificationItem from '@/components/CertificationItem';
import EducationItem from '@/components/EducationItem';
import Footer from '@/components/Footer';
import BlurFade from '@/components/ui/blur-fade';
import VolunteerItem from '@/components/VolunteerItem';
import { certifications } from '@/data/certifications';
import { education } from '@/data/education';
import { volunteerism } from '@/data/volunteerism';

export default function EducationPage() {
  return (
    <div className="max-w-[40rem] w-full mx-auto pt-20 pb-16 space-y-16">
      <BlurFade delay={0}>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-neutral-700 dark:text-neutral-200">Education</h1>
          <hr />
          <div className="space-y-4">
            {education.map((edu, i) => (
              <EducationItem education={edu} key={i} />
            ))}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.1}>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-neutral-700 dark:text-neutral-200">Certifications</h1>
          <hr />
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <CertificationItem certification={cert} key={i} />
            ))}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-neutral-700 dark:text-neutral-200">Volunteerism</h1>
          <hr />
          <div className="space-y-4">
            {volunteerism.map((vol, i) => (
              <VolunteerItem volunteer={vol} key={i} />
            ))}
          </div>
        </div>
      </BlurFade>

      <Footer />
    </div>
  );
}
