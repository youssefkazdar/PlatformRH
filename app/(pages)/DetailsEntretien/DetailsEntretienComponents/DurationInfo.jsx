import React from 'react';

const DurationInfo = ({duration}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Durée:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{duration}</div>
    </div>
  );
};

export default DurationInfo;