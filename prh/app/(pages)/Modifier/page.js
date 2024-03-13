import Image from "next/image";
import React from 'react';
import CustomInput from "../../components/CustomInput";


const Membres = () => {

const poleOptions = [
  "Développement Commercial",
  "Projet Et Prospection",
  "Marketing"
];

const posteOptions = [
  "Junior",
  "Senior",
  "Bureau",
  "Alumni",
  "Sénateur",
  "Membre d'honneur"
]
  return (
    <div className="flex h-screen flex-col items-center justify-center w-full gap-4">
      
      
      <div className="flex flex-col items-end">
        <Image src="/avatar.png" alt="profile image" width={192} height={192} className="avatar"/>
        <Image src="/folder.png" alt="Image" width={32} height={20}/>
      </div>
      <div className="grid grid-cols-2 gap-6"> 
       <CustomInput label="Nom et prenom" placeholder="Le nom et le prenom" type="text" />
       <CustomInput label="Pôle" placeholder="Mehdi Benguiza" type="select" options={poleOptions} />
       <CustomInput label="Numrero Telephone" placeholder="+216 00000000" type="text"/>
       <CustomInput label="Email" placeholder="aeazdsd@gmail.com" type="text"/>
       <CustomInput label="Poste" placeholder="Mehdi Benguiza" type="select" options={posteOptions}/>
       <CustomInput label="Adresse" placeholder="7421 rue xxxx" type="text"/>
      </div>
      <button className="bg-[#2F5B96] px-10 py-2 text-white rounded-full">
       <span style={{color:"white"}}>Modifier</span> 
      </button>



    </div>

  );
};

export default Membres;