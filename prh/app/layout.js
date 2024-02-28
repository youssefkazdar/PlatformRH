'use client'
import React from 'react';
import Card from './components/card';
import Button from './components/button';
function Layout({children}) {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="layout">
    <Card
        picture="https://via.placeholder.com/150"
        name="SADOT BENOIT"
        pole="Membre pole projet et prospection"
        phoneNumber="26 228 274"
        specialty="1ere génie informatique"
      />
    <div className="flex justify-center mt-2 mr-auto space-x-6 "> 
         <Button onClick={handleButtonClick}  >Ajouter</Button> 
         <Button onClick={handleButtonClick} >Supprimer</Button> 
        </div>         


      
    </div>  );
}

export default Layout;

