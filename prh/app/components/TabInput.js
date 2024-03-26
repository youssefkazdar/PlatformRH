import React from 'react';

function TableWithRows({ numRows }) {
  // Créer un tableau de nombres pour utiliser map()
  const rows = new Array(numRows).fill(0);

  return (
    <div className="w-full max-w-4xl ">
      <table className="table-auto w-full border-collapse rounded-lg overflow-hidden ">
        <thead>
          <tr className="bg-[#003057] px-8 py-4 text-[#FFFFFF] ">
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Prenom</th>
            <th className="px-4 py-2">Pôle</th>
            <th className="px-4 py-2">Present</th>
            <th className="px-4 py-2">Absent</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((_, index) => (
            <tr key={index} className="px-4 py-2 bg-white text-black border-b-2 border-l-2  border-gray-400 ">
              <td className="border px-4 py-2">
                <input type="text" className="w-full"></input>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full"></input>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full"></input>
              </td>
              <td className="border px-4 py-2">
                <input type="checkbox" className="h-6 w-6 rounded border border-green-400"></input>
              </td>
              <td className="border px-4 py-2">
                <input type="checkbox" className="h-6 w-6 rounded border border-green-400"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableWithRows;