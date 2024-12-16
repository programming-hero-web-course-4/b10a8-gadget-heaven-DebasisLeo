import React from 'react';
import { useLoaderData } from 'react-router-dom';

const iPhones = () => {
  const data = useLoaderData();
  const iphones = data.products.filter(product => product.category === "iPhones");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {iphones.map(iphone => (
        <div key={iphone.product_id} className="bg-white shadow-md rounded p-4">
          <img
            className="w-full h-40 object-cover rounded"
            src={iphone.product_image}
            alt={iphone.product_title}
          />
          <h4 className="mt-4 text-lg font-bold">{iphone.product_title}</h4>
          <p className="mt-2 text-gray-600">{iphone.description}</p>
          <p className="mt-2 text-green-600 font-bold">Price: ${iphone.price}</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 transition">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default iPhones;
