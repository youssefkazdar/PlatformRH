import React from 'react';

const EmailInfo = ({ email }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Email:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{email}</div>
    </div>
  );
};

export default EmailInfo;
