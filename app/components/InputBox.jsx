import React from 'react';

function InputBox({ title, placeholder, value, onChange }) {
  return (
    <div className="my-3.5">
      <label className="block text-sm font-medium text-gray-1000">{title}</label>
      <input
        type="text"
        className="mt-2 p-2.5 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-200 text-gray-800 font-montserrat" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputBox;
