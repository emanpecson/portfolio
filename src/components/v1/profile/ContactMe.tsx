import { SocialType } from '@/types/v1/SocialType';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Social from '../main/item/Social';

export default function ContactMe() {
  const socials: SocialType[] = [
    {
      name: 'GitHub',
      link: 'https://github.com/emanpecson',
      imageSrc: '/github_icon.png',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/emanuel-pecson/',
      imageSrc: '/linkedin_icon.png',
    },
    {
      name: 'Email',
      link: 'emanpecson@gmail.com',
      HeroIcon: EnvelopeIcon,
    },
  ];

  return (
    <div className="space-x-6 flex justify-center">
      {socials.map((social: SocialType, index: number) => (
        <Social params={social} key={index} />
      ))}
    </div>
  );
}
