import React from 'react';


const DataTable = () => {
  return (
    <div className="flex  flex-col p-4 gap-2">  

      <button className="self-start rounded-2xl py-2 px-6 bg-[#2F5B96] text-white">Ajouter Membre</button>
      <div class="flex-auto mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800 w-auto">
        
      <div className='flex justify-between items-center'>

        <h2 className='font-bold font-sans'> Tous les Membre</h2>
      <input className=" bg-gray-100 px-6 py-2 rounded-2xl" type="text" placeholder="⌕ Rechercher" />
        <button className=" bg-gray-100 px-7 py-2 rounded-2xl ml-6 "> Abreger par: ￬</button>
      </div>
      

      <table className=" ml-2 border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Prenom</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Pole</th>
            <th className="border border-gray-300 p-2">Adresse</th>
            <th className="border border-gray-300 p-2">Poste</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
            <td className="border border-gray-300 p-2">Nom</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DataTable;