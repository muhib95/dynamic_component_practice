import Link from 'next/link';
import React from 'react';

const DynamicTable = ({ data, columns,setAge,handleOpenModal,setName }) => {
  // If no data is passed or data is empty, render a message
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data available</p>;
  }
  const keys=Object.keys(data[0]);

  return (
    <table className="min-w-full border-collapse border border-gray-300 ">
      {/* Table Header with custom column names */}
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {keys.map((col, colIndex) => (
              <td
                key={colIndex}
                className="px-4 py-2 border-b border-gray-300"
              >
                 {col === 'age' ? (
                    <button
                      className="text-blue-500 underline"
                      onClick={() => {handleOpenModal(),setAge(row[col]),setName(row['name'])}}
                    >
                      {row[col]}
                    </button>
                  ) : (
                    row[col]
                  )}
                  {
                    col === 'name'&&
                  <p>01</p> 
                  }
                 
              </td>
              
            ))}
               <td
               
                className="px-4 py-2 border-b border-gray-300"
              >
                <Link href="/">Home</Link>
               
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
