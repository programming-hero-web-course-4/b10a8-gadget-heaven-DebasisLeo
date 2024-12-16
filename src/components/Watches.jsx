import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Watches = () => {
  const data = useLoaderData();
  const watches = data.products.filter(product => product.category === "Smart Watches");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {watches.map(watch => (
        <div key={watch.product_id} className="bg-white shadow-md rounded p-4">
          <img
            className="w-full h-40 object-cover rounded"
            src={watch.product_image}
            alt={watch.product_title}
          />
          <h4 className="mt-4 text-lg font-bold">{watch.product_title}</h4>
          <p className="mt-2 text-gray-600">{watch.description}</p>
          <p className="mt-2 text-green-600 font-bold">Price: ${watch.price}</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 transition">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watches;
