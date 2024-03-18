import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import CustomInput from "../components/CustomInput";


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
    <div className="flex h-screen flex-col items-center justify-center w-full gap-10">
      
      
      <div className="flex flex-col items-end">
        <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Image" className="avatar" />
        <img src="/folder.png" className="w-32px" />
      </div>
      <div className="grid grid-cols-2 gap-12  "> 
       <CustomInput label="Nom et prenom" placeholder="Le nom et le prenom" type="text" />
       <CustomInput label="Pôle" placeholder="Mehdi Benguiza" type="select" options={poleOptions} />
       <CustomInput label="Numrero Telephone" placeholder="+216 00000000" type="text"/>
       <CustomInput label="Email" placeholder="aeazdsd@gmail.com" type="text"/>
       <CustomInput label="Poste" placeholder="Mehdi Benguiza" type="select" options={posteOptions}/>
       <CustomInput label="Adresse" placeholder="7421 rue xxxx" type="text"/>
      </div>
      <button className="bg-[#2F5B96] px-10 py-4 text-white rounded-full">
       <span style={{color:"white"}}>Modifier</span> 
      </button>



    </div>

  );
};

export default Membres;