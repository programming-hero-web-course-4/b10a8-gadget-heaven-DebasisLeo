import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './provider/CartProvider';

const Dashboard = () => {
  const { cart, setCart, wishlist, setWishlist } = useCart(); // Added setWishlist
  const [activeTab, setActiveTab] = useState('cart'); // State for active tab
  const [sortedCart, setSortedCart] = useState([]); // State for sorted cart items
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate(); // Navigation hook

  // Sort cart items by price in descending order
  const handleSortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  // Handle purchase button click
  const handlePurchase = () => {
    setCart([]); // Clear the cart
    setSortedCart([]); // Clear the sorted cart
    setIsModalOpen(true); // Open the modal
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    navigate('/'); // Redirect to the home page
  };

  useEffect(() => {
    setSortedCart([...cart]);  // Update sortedCart when cart changes
  }, [cart]);
  

  const totalCost = sortedCart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  // Render items for both cart and wishlist
  const renderItems = (items, isCart) => {
    return items.map((item, index) => (
      <div key={index} className="p-4 border-b flex items-center space-x-4">
        <img src={item.product_image} alt={item.product_title} className="w-24 h-24 object-cover rounded-lg shadow-md" />
        <div className="ml-4 flex-1">
          <h3 className="font-semibold text-lg text-gray-800">{item.product_title}</h3>
          <p className="text-sm text-gray-500">Price: ${item.price}</p>
        </div>
        <button
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          onClick={() => handleDeleteItem(item, isCart)}
        >
         X
        </button>
      </div>
    ));
  };

  // Handle item deletion for cart and wishlist
  const handleDeleteItem = (item, isCart) => {
    if (isCart) {
      // Remove item from cart
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(updatedCart); // Update cart state
      setSortedCart(updatedCart); // Also update sortedCart state
    } else {
      // Remove item from wishlist
      setWishlist(prevWishlist => prevWishlist.filter((wishlistItem) => wishlistItem.id !== item.id));
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <div className="bg-[#9538E2] flex flex-col justify-center items-center py-12 px-6 sm:px-12">
        <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight">Dashboard</h2>
        <p className="text-white text-lg sm:text-xl mt-4 text-center max-w-3xl">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-6 flex gap-6">
          <button
            className={`px-6 py-3 rounded-lg text-white font-semibold ${activeTab === 'cart' ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => setActiveTab('cart')}
          >
            Cart
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white font-semibold ${activeTab === 'wishlist' ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => setActiveTab('wishlist')}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 max-w-screen-lg mx-auto">
        {activeTab === 'cart' ? (
          // Cart Tab Content
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-semibold text-gray-800">Cart</h3>
              <div className="flex items-center gap-4">
                <p className="text-xl font-semibold text-gray-800">Total Cost: ${totalCost}</p>
                <button
                  className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                  onClick={handleSortByPrice}
                >
                  Sort by Price
                </button>
                <button
                  className={`px-6 py-2 rounded-lg font-semibold ${totalCost === '0.00' ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 transition'}`}
                  onClick={handlePurchase}
                  disabled={totalCost === '0.00'}
                >
                  Proceed to Purchase
                </button>
              </div>
            </div>
            {sortedCart.length > 0 ? (
              <div className="bg-white p-4 rounded-lg shadow-lg">{renderItems(sortedCart, true)}</div>
            ) : (
              <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
            )}
          </div>
        ) : (
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">Wishlist</h3>
            {wishlist.length > 0 ? (
              <div className="bg-white p-4 rounded-lg shadow-lg">{renderItems(wishlist, false)}</div>
            ) : (
              <p className="text-center text-gray-500 text-lg">Your wishlist is empty.</p>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
            <h3 className="text-3xl font-semibold mb-4">Congratulations!</h3>
            <p className="text-lg text-gray-600 mb-6">Your purchase was successful. Enjoy your new gadgets!</p>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
