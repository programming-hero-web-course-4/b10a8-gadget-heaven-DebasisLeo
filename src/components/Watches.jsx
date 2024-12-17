import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Watches = () => {
  const data = useLoaderData();
  const watches = data.products.filter((product) => product.category === 'Smart Watches');

  return (
    <div className="p-6">
      {watches.length === 0 ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500 text-xl">No smartwatches available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div
              key={watch.product_id}
              className="group relative bg-white shadow-lg rounded-xl p-4 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Product Image */}
              <div className="relative h-40 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={watch.product_image}
                  alt={watch.product_title}
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 truncate">
                  {watch.product_title}
                </h4>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{watch.description}</p>
                <p className="text-xl font-bold text-green-500 mt-4">${watch.price}</p>

                <Link
                  to={`/pro/product/${watch.product_id}`}
                  className="block mt-4 px-4 py-2 text-center bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition"
                >
                  Details
                </Link>
              </div>

              {/* Hover Effect - Badge */}
              <div className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
                New
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watches;
