import React from 'react';

const PrenomInfo = ({ prenom }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Prenom:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{prenom}</div>
    </div>
  );
};

export default PrenomInfo;
