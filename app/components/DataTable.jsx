
import Link from 'next/link';
import React from 'react';

const DataTable = () => {
  return (
    <div className="flex  flex-col p-4 gap-2">  

      <Link href="/Ajout">
      <button className="self-start rounded-2xl py-2 px-6 bg-[#2F5B96] text-white">Ajouter un Membre</button></Link>
      <div className='flex justify-between items-center'>
          <h2 className='font-bold font-sans'> Tous les Membres</h2>
          <input className=" bg-gray-100 px-6 py-3" type="text" placeholder="Search.." />
      </div>

      <table className="ml-2 border-collapse border border-gray-300 w-full">
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
              <td className="border border-gray-300 p-2"><Link href="/ProfilMembre">Sadot</Link></td>
              <td className="border border-gray-300 p-2"><Link href="/ProfilMembre">Benoit</Link></td>
              <td className="border border-gray-300 p-2">Email</td>
              <td className="border border-gray-300 p-2">26 228 274</td>
              <td className="border border-gray-300 p-2">P</td>
              <td className="border border-gray-300 p-2">Adresse</td>
              <td className="border border-gray-300 p-2">Junior</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;