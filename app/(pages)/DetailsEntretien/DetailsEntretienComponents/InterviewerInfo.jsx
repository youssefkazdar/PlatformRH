import React from 'react';

const InterviewerInfo = ({interviewer}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Interviewer:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{interviewer}</div>
    </div>
  );
};

export default InterviewerInfo;