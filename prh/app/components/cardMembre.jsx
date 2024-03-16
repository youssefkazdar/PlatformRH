import React from 'react';
import './globals.css';

function CardMembre({ picture, name, pole, phoneNumber, specialty }) {
  return (
    <div className="flex justify-center items-center">
      <div className="card border border-gray-300 rounded-3xl shadow-md text-center mb-10 mt-14 p-45 w-96 h-99 flex flex-col justify-center items-center">
        <img src={picture} alt={name} className="card-picture mb-2 mt-14 rounded-full w-32 h-32 object-cover" />
        <div className="card-info font-montserrat">
          <h2 className="card-name text-lg font-semibold mb-4 mt-5">{name}</h2>
          <p className="card-pole text-sm text-gray-700 mb-4">{pole}</p>
          <p className="card-phone text-sm text-gray-700 mb-4">{phoneNumber}</p>
          <p className="card-specialty text-sm text-gray-700 mb-8">{specialty}</p>
        </div>
      </div>
    </div>
  );
}

export default CardMembre;

