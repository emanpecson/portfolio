export type SocialType = {
  name: string;
  link: string;
  imageSrc?: string;
  HeroIcon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
};
