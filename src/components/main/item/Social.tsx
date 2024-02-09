import { SocialType } from '@/types/SocialType';
import { useRouter } from 'next/navigation';

export default function Social({ params }: { params: SocialType }) {
  const router = useRouter();

  return (
    <>
      <button
        className="hover:opacity-100 opacity-50 transition-all duration-400"
        onClick={() => router.push(params.name === 'Email' ? 'mailto:' + params.link : params.link)}>
        {params.HeroIcon ? (
          <div className="w-[45px] h-[45px] rounded-full bg-white relative">
            <params.HeroIcon className="absolute p-1.5 text-app" />
          </div>
        ) : (
          <img src={params.imageSrc} width={45} height={45} />
        )}
      </button>
    </>
  );
}
