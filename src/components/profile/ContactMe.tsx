import { SocialType } from '@/types/SocialType';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Social from '../main/item/Social';

export default function ContactMe() {
  const socials: SocialType[] = [
    {
      name: 'GitHub',
      link: 'github.com/emanpecson',
      imageSrc: '/github_icon.png',
    },
    {
      name: 'LinkedIn',
      link: '',
      imageSrc: '/linkedin_icon.png',
    },
    {
      name: 'Email',
      link: 'emanpecson@gmail.com',
      HeroIcon: EnvelopeIcon,
    },
  ];

  return (
    <>
      <div className="space-x-6 flex justify-center">
        {socials.map((social: SocialType, index: number) => (
          <Social params={social} key={index} />
        ))}
      </div>
    </>
  );
}
