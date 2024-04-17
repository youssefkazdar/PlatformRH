import React from 'react';

const PlaceInfo = ({place}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Place:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{place}</div>
    </div>
  );
};

export default PlaceInfo;