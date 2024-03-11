import React from 'react';

function DropDownMenu({ title, options, selectedOption, onChange }) {
  return (
    <div className="my-3.5">
      <label className="block text-sm font-medium text-gray-1000">{title}</label>
      <select
        className="mt-2 p-2.5 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-200 text-gray-800 font-montserrat"
        value={selectedOption}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

DropDownMenu.defaultProps = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export default DropDownMenu;