import React from 'react';

const DateTimeInfo = ({dateTime}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Date & Heure:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{dateTime}</div>
    </div>
  );
};

export default DateTimeInfo;