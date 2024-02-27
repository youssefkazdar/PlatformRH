
"use client";

import React, { Component } from 'react';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(fetchedData => {
        this.setState({ data: fetchedData });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    const { data } = this.state;
    return (
  
        
        <div className="overflow-x-auto ">
             <button   className='m-4 rounded-lg py-3 bg-blue-500 text-white'> ajouter membre </button>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{item.name}</td>
                <td className="border border-gray-300 p-2">{item.email}</td>
                <td className="border border-gray-300 p-2">{item.phone}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;