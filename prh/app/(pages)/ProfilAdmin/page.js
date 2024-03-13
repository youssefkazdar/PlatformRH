import Image from "next/image";

export default function ProfilAdmin() {
  return (
    <>
    <div className='flex flex-col gap-6 p-10 justify-center items-center min-h-screen'>
    <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
    <Image src="/avatar.png" alt="profile image" width={192} height={192} className="rounded-full" />
    </div>
    <div>Nom et Prènom</div>
    <div>Poste</div>
    <div>Email</div>
    <div>Numéro de téléphone</div>
    <div>Spécialité</div>
    </div>
    </>
  );
}