import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
  const data = useLoaderData();
  const phones = data.products.filter(product => product.category === "Phones");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {phones.map(phone => (
        <div key={phone.product_id} className="bg-white shadow-md rounded p-4">
          <img
            className="w-full h-40 object-cover rounded"
            src={phone.product_image}
            alt={phone.product_title}
          />
          <h4 className="mt-4 text-lg font-bold">{phone.product_title}</h4>
          <p className="mt-2 text-gray-600">{phone.description}</p>
          <p className="mt-2 text-green-600 font-bold">Price: ${phone.price}</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 transition">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Phones;
