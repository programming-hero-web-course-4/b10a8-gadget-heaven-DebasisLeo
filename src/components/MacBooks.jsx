import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MacBooks = () => {
  const data = useLoaderData();
  const macbooks = data.products.filter(product => product.category === "MacBooks");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {macbooks.map(macbook => (
        <div key={macbook.product_id} className="bg-white shadow-md rounded p-4">
          <img
            className="w-full h-40 object-cover rounded"
            src={macbook.product_image}
            alt={macbook.product_title}
          />
          <h4 className="mt-4 text-lg font-bold">{macbook.product_title}</h4>
          <p className="mt-2 text-gray-600">{macbook.description}</p>
          <p className="mt-2 text-green-600 font-bold">Price: ${macbook.price}</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 transition">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default MacBooks;
