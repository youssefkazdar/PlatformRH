'use client'
import React from 'react';
import InputBox from './Components/InputBox';
import DropDownMenu from './Components/DropDownMenu';
import Button from './Components/Button';

function Boxes() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
  const [name, setName] = React.useState('');
  const [pole, setPole] = React.useState('');
  const [num, setNum] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [poste, setPoste] = React.useState('');
  const [address, setAddress] = React.useState('');
   
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePoleChange = (e) => {
    setPole(e.target.value);
  };

  const handleNumChange = (e) => {
    setNum(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePosteChange = (e) => {
    setPoste(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      <div className="flex flex-col space-y-8">
        <InputBox
          title="Nom et Prénom"
          placeholder="Nom et Prénom"
          value={name}
          onChange={handleNameChange}
        />
        <InputBox
          title="Numéro de téléphone"
          placeholder="Numéro de téléphone"
          value={num}
          onChange={handleNumChange}
        />
        <DropDownMenu
          title="Poste"
          options={['Membre Junior', 'Membre Senior', 'Bureau Executif']}
          selectedOption={poste}
          onChange={handlePosteChange}
        />
      </div>
      <div className="flex flex-col space-y-8">
        <DropDownMenu
          title="Pôle"
          options={['Projets et Prospection ', 'Développement commercial', 'Marketing']}
          selectedOption={pole}
          onChange={handlePoleChange}
        />
        <InputBox
          title="Email"
          placeholder="Email"
          value={mail}
          onChange={handleMailChange}
        />
        <InputBox
          title="Adresse"
          placeholder="Adresse"
          value={address}
          onChange={handleAddressChange}
        />
       
      </div>
      </div>
      <div className="flex justify-center mt-8"> 
         <Button onClick={handleButtonClick} >Ajouter</Button> 
        </div>
    

    </div>
  );
}

export default Boxes;