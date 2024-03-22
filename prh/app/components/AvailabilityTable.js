"use client"
import React, { useState } from 'react';

const AvailabilityTable = () => {
  const [selectedRecruiter, setSelectedRecruiter] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [availability, setAvailability] = useState({});

  // Function to handle confirmation
  const handleConfirm = () => {
    // Update availability state based on selectedRecruiter and selectedDate
    setAvailability((prevAvailability) => {
      const updatedAvailability = { ...prevAvailability };
      const existingAvailability = updatedAvailability[selectedRecruiter] || [];
      if (!existingAvailability.includes(selectedDate)) {
        updatedAvailability[selectedRecruiter] = [...existingAvailability, selectedDate];
      }
      return updatedAvailability;
    });
  };

  // Dummy data for recruiters
  const recruiters = ["President(e)", "Vice président(e)", "Responsable projets et prospection",
    "Responsable développement commerciale", "Responsable Marketing", "Responsable RH"];

  // Dummy data for dates (Monday to Saturday of current week)
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - currentDay + 1); // Move to Monday of current week
  const dates = [...Array(6)].map((_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format
  });

  return (
    <div className='flex flex-col gap-24'>
      {/* Inputs */}
      <div className="flex justify-evenly items-center mb-auto">
        <div>
          <select
            value={selectedRecruiter}
            onChange={(e) => setSelectedRecruiter(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="">Recruteur</option>
            {recruiters.map((recruiter, index) => (
              <option key={index} value={recruiter}>
                {recruiter}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
        <div>
          <button
            onClick={handleConfirm}
            className="bg-[#2E5D96] hover:opacity-80 text-white font-mont font-semibold py-2 px-6 rounded-2xl"
          >
            Confirmer
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="self-center">
        <table className="table-auto border-collapse border">
          <thead>
            <tr>
            <th className="border diagonal-cell p-2">Recruteur &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Date</th>
              {dates.map((date, index) => (
                <td key={index} className="border p-2">
                  {date}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {recruiters.map((recruiter, index) => (
              <tr key={index}>
                <td className="border p-2">{recruiter}</td>
                {dates.map((date, index) => (
                  <td key={index} className="border p-2">
                    {availability[recruiter]?.includes(date) && (
                      <img
                        src="/checked.png"
                        alt="Checked"
                        className="w-6 h-6 mx-auto"
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailabilityTable;

