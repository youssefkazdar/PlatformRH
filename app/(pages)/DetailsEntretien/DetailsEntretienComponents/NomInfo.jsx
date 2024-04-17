import React from 'react';

const NomInfo = ({ nom }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Nom:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{nom}</div>
    </div>
  );
};

export default NomInfo;
