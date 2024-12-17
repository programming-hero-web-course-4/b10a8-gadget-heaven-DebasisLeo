import React, { useEffect, useState } from 'react';
import { ComposedChart, Area, Bar, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json'); 
        const result = await response.json();
        const formattedData = result.products.map(product => ({
          productName: product.product_title,
          price: product.price,
          rating: product.rating,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#9538E2] flex flex-col justify-center items-center py-8">
        <h2 className="text-white text-3xl">Statistics</h2>
        <p className="text-white text-lg mt-2 text-center">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart Section */}
      <div className="mt-8 max-w-screen-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Price vs. Product Name</h3>
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="productName" label={{ value: 'Product Name', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" name="Price (Area)" />
              <Bar dataKey="price" barSize={20} fill="#413ea0" name="Price (Bar)" />
              <Scatter dataKey="rating" fill="#ff7300" name="Rating (Scatter)" />
            </ComposedChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
