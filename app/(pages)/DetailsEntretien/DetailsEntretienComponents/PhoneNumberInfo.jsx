import React from 'react';

const PhoneNumberInfo = ({ phoneNumber }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Numéro de téléphone:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{phoneNumber}</div>
    </div>
  );
};

export default PhoneNumberInfo;