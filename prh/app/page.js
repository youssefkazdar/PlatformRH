import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import CustomInput from "./components/CustomInput";

const Navbar = () => {

const poleOptions = [
  "Developpement Commercial",
  "Projet Et Prospection",
  "Marketing"
];

const posteOptions = [
  "Junior",
  "Senior",
  "Bureau",
  "Alumni"
]
  return (
    <main>
      <nav>
        <img src="/notification.png" width="35" height="35" alt="notifs" />
      </nav>
      <div className="avatar-user">
        <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Image" className="avatar" />
        <img src="/folder.png" className="edit_image-icon" />
      </div>
      <div className="inputs-form"> 
       <CustomInput label="Nom et prenom" placeholder="Le nom et le prenom" type="text" />
       <CustomInput label="Pole" placeholder="Mehdi Benguiza" type="select" options={poleOptions} />
       <CustomInput label="Numrero Telephone" placeholder="+216 00000000" type="text"/>
       <CustomInput label="Email" placeholder="aeazdsd@gmail.com" type="text"/>
       <CustomInput label="Poste" placeholder="Mehdi Benguiza" type="select" options={posteOptions}/>
       <CustomInput label="Adresse" placeholder="7421 rue xxxx" type="text"/>
      </div>
      <button className="edit-button">
       <span style={{color:"white"}}>Modifier</span> 
      </button>



    </main>

  );
};

export default Navbar;



