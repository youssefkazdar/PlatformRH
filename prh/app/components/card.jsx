import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-10  rounded-full focus:outline-none focus:shadow-outline"
      style={{ backgroundColor: '#2F5B96' }}
    >
      {children}
    </button>
  );
}

export default Button;