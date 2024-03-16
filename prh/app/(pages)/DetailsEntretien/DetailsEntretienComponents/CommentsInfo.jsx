import React from 'react';

const CommentsInfo = ({comments}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold font-montserrat">Commentaires:</h2>
      <div className="border border-gray-300 p-2 rounded-lg">{comments}</div>
    </div>
  );
};

export default CommentsInfo;