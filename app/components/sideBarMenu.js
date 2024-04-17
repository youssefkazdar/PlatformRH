'use client'
 
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';

export default function SideBarMenu() {
  const pathname = usePathname()
  return (
    <div className='flex flex-col w-60 bg-[#2E5D96] rounded-lg min-h-screen gap-12 p-2'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 justify-center'>
          <Image
            src="/logomelkart.png"
            width={65}
            height={65}
            alt="Melkart logo"
          />
          <div className='flex flex-col font-mont text-white text-center'>
            <div className='font-medium text-xl'>MELKART</div>
            <div className='font-normal text-xs-small'>Junior Etreprise</div>
          </div>
        </div>
        <div className="border-b border-white"></div>
      </div>

      <div className='flex flex-col gap-10 flex-1'>
        <Link href='/ProfilAdmin'>
        <div className={`flex items-center hover:bg-[#9CA8C1] gap-6 rounded-full p-2 ${pathname === '/ProfilAdmin' ? 'bg-[#9CA8C1]' : ''}`}>
            <Image
              src="/user.png"
              width={25}
              height={25}
              alt="profil"
            />
            <div className='font-mont text-xl text-white text-center'>Profil</div>
          </div>
        </Link>

        <Link href='/ListeMemebres'>
        <div className={`flex items-center hover:bg-[#9CA8C1] gap-6 rounded-full p-2 ${pathname === '/ListeMemebres' ? 'bg-[#9CA8C1]' : ''}`}>
            <Image
              src="/group.png"
              width={25}
              height={25}
              alt="membres"
            />
            <div className='font-mont text-xl text-white text-center'>Membres</div>
          </div>
        </Link>

        <Link href='/Recrutement'>
        <div className={`flex items-center gap-6 hover:bg-[#9CA8C1] rounded-full p-2 ${pathname === '/Recrutement' ? 'bg-[#9CA8C1]' : ''}`}>
            <Image
              src="/recruitment.png"
              width={25}
              height={25}
              alt="recrutement"
            />
            <div className='font-mont text-xl text-white text-center'>Recrutement</div>
          </div>
        </Link>

        <Link href='/Calendrier'>
        <div className={`flex items-center gap-6 hover:bg-[#9CA8C1] rounded-full p-2 ${pathname === '/Calendrier' ? 'bg-[#9CA8C1]' : ''}`}>
            <Image
              src="/calendar.png"
              width={25}
              height={25}
              alt="calendrier"
            />
            <div className='font-mont text-xl text-white text-center'>Calendrier</div>
          </div>
        </Link>

        <Link href='#' className="mt-auto">
          <div className='flex items-center gap-6 hover:bg-[#9CA8C1] rounded-full p-2'>
            <Image
              src="/logout.png"
              width={25}
              height={25}
              alt="déconnecter"
            />
            <div className='font-mont text-xl text-white text-center'>Déconnecter</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
