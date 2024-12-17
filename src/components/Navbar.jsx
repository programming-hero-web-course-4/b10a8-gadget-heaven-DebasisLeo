import { CiHeart } from 'react-icons/ci';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink, useLocation } from 'react-router-dom';
import { useCart } from './provider/CartProvider';
const Navbar = () => {
  const { cart, wishlist } = useCart();
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${isHomepage ? 'text-white' : 'text-purple-600'} font-semibold`
              : `${isHomepage ? 'text-gray-200' : 'text-gray-800'} hover:text-purple-600 transition`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/r/stat"
          className={({ isActive }) =>
            isActive
              ? `${isHomepage ? 'text-white' : 'text-purple-600'} font-semibold`
              : `${isHomepage ? 'text-gray-200' : 'text-gray-800'} hover:text-purple-600 transition`
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rot/dash"
          className={({ isActive }) =>
            isActive
              ? `${isHomepage ? 'text-white' : 'text-purple-600'} font-semibold`
              : `${isHomepage ? 'text-gray-200' : 'text-gray-800'} hover:text-purple-600 transition`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rot/about"
          className={({ isActive }) =>
            isActive
              ? `${isHomepage ? 'text-white' : 'text-purple-600'} font-semibold`
              : `${isHomepage ? 'text-gray-200' : 'text-gray-800'} hover:text-purple-600 transition`
          }
        >
          About US
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar ${
        isHomepage ? 'bg-purple-500' : 'bg-transparent'
      } px-6 py-4 w-full transition rounded-t-lg`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-white rounded-box">
            {links}
          </ul>
        </div>
        <a
          className={`btn btn-ghost text-2xl font-bold ${
            isHomepage ? 'text-white' : 'text-purple-500'
          }`}
        >
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button className="relative">
          <FaCartShopping className={`${isHomepage ? 'text-white' : 'text-gray-800'} text-xl`} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              {cart.length}
            </span>
          )}
        </button>
        <button className="relative">
          <CiHeart className={`${isHomepage ? 'text-white' : 'text-gray-800'} text-xl`} />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              {wishlist.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
