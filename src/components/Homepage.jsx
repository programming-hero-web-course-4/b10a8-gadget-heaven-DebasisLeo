import { NavLink, Outlet } from 'react-router-dom';
import banner from '../assets/banner.jpg';

const Homepage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-purple-500 relative flex flex-col items-center pt-16 text-center h-[500px] md:h-[600px] w-full rounded-b-lg">
        <p className="text-white text-2xl md:text-4xl font-extrabold">
          Upgrade Your Tech Accessories
        </p>
        <p className="text-white text-md md:text-lg mt-4">
          Explore the latest gadgets that will take your experience to the next level. <br />
          From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="mt-6 px-8 py-3 rounded-lg bg-white text-purple-500 text-lg md:text-xl font-bold  hover:bg-purple-100 transition">
          Shop Now
        </button>
        <div className="absolute -bottom-32 w-full flex justify-center md:-bottom-48">
          <img
            className="w-3/4 md:w-1/2 h-auto border-2 border-white bg-[#FFFFFF4D] p-3 rounded-lg"
            src={banner}
            alt="Tech Accessories Banner"
          />
        </div>
      </div>

      <div className="mt-64 md:mt-80 text-center font-bold text-lg md:text-2xl">
        <p>Explore Cutting-Edge Gadgets</p>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-gray-50 shadow-lg p-6 rounded-lg md:col-span-1">
          <h2 className="text-xl font-bold mb-4 text-purple-600">Categories</h2>
          <ul className="space-y-3">
            <li>
              <NavLink
                to=""
                className="text-gray-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-full font-medium transition"
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="laptops"
                className="text-gray-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-full font-medium transition"
              >
                Laptops
              </NavLink>
            </li>
            <li>
              <NavLink
                to="phones"
                className="text-gray-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-full font-medium transition"
              >
                Phones
              </NavLink>
            </li>
            <li>
              <NavLink
                to="accessories"
                className="text-gray-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-full font-medium transition"
              >
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="watches"
                className="text-gray-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-full font-medium transition"
              >
                Smart Watches
              </NavLink>
            </li>
            <li>
              <NavLink
                to="macbooks"
                className="text-gray-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-full font-medium transition"
              >
                MacBooks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="iphones"
                className="text-gray-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-full font-medium transition"
              >
                iPhones
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="bg-white shadow-lg p-6 rounded-lg md:col-span-3">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
