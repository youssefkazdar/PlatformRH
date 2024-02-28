import Image from "next/image";
export default function Home() {
  return (
   <>
    <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center gap-2" style={{backgroundImage: "url('/BackgroundLogin.png')"}}>
        <Image
        src="/logo.png"
        alt="logo melkart"
        width={150}
        height={150}
        />
         <form className="">
        <input
          className="border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="shadow-4xl border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          id="mot de passe"
          type="password"
          placeholder="Mot de passe"
        />
        <div className="flex items-center justify-center">
          <button
            className="bg-[#2F5B96] hover:opacity-90 shadow-2xl border-b-2 border-white shadow-gray-900 text-white font-bold py-2 px-16 rounded-2xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
   </div>
   </>
  );
}
