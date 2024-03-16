import React from 'react';

function EvaluationNoteInfo({ noteEvaluation }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold font-montserrat mb-2">Note d'évaluation:</h2>
      <p>{noteEvaluation}</p>
    </div>
  );
}

export default EvaluationNoteInfo;
