import Image from "next/image";
import Link from 'next/link';

export default function SideBarMenu() {
  return (
    <div className='flex flex-col w-60 bg-[#2F5B96] rounded-lg min-h-screen p-6 gap-12'>

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

    <div className='flex flex-col gap-10 ml-4'>
    <Link href='/' className='flex items-center gap-6'>
    <Image
    src="/user.png"
    width={25}
    height={25}
    alt="profil"
    />
    <div className='font-mont text-xl text-white text-center'>Profil</div>
    </Link>


    <Link href='/membres' className='flex items-center gap-6'>
    <Image
    src="/group.png"
    width={25}
    height={25}
    alt="membres"
    />
    <div className='font-mont text-xl text-white text-center'>Membres</div>
    </Link>

    <Link href='/recrutement' className='flex items-center gap-6'>
    <Image
    src="/recruitment.png"
    width={25}
    height={25}
    alt="recrutement"
    />
    <div className='font-mont text-xl text-white text-center'>Recrutement</div>
    </Link>

    <Link href='/calendrier' className='flex items-center gap-6'>
    <Image
    src="/calendar.png"
    width={25}
    height={25}
    alt="calendrier"
    />
    <div className='font-mont text-xl text-white text-center'>Calendrier</div>
    </Link>
    </div>

    <Link href='/deconnecter' className='flex items-center gap-6 mt-auto ml-4'>
    <Image
    src="/logout.png"
    width={25}
    height={25}
    alt="déconnecter"
    />
    <div className='font-mont text-xl text-white text-center'>Déconnecter</div>
    </Link>

 </div>
  )
}