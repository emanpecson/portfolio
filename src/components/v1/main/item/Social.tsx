import { SocialType } from '@/types/v1/SocialType';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function Social({ params }: { params: SocialType }) {
  const router = useRouter();

  return (
    <>
      <button
        className="hover:opacity-100 opacity-50 transition-all duration-400"
        onClick={() => router.push(params.name === 'Email' ? 'mailto:' + params.link : params.link)}
      >
        {params.HeroIcon ? (
          <div className="w-[35px] h-[35px] rounded-full bg-white relative">
            <params.HeroIcon className="absolute p-1.5 text-background" />
          </div>
        ) : (
          <img src={params.imageSrc} width={35} height={35} />
        )}
      </button>
    </>
  );
}
