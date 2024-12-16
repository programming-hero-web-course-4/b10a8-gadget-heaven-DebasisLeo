import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { useCart } from './provider/CartProvider';
import ReactStars from 'react-rating-stars-component'; // Import React rating package
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const ProductDetails = () => {
  const product = useLoaderData(); // Load product details
  const { addToCart, addToWishlist } = useCart(); // Access cart and wishlist functions from context
  const [inWishlist, setInWishlist] = useState(false); // Track if the product is in the wishlist

  if (!product) {
    return <p>Product not found!</p>; // Fallback if no product is loaded
  }

  // Add product to the cart
  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    toast.success('Product added to cart!'); // Show feedback with toast notification
  };

  // Add product to the wishlist
  const handleAddToWishlist = () => {
    if (inWishlist) return; // Prevent re-adding if already in wishlist
    addToWishlist(product); // Add product to wishlist
    setInWishlist(true); // Mark as added to wishlist
    toast.success('Product added to wishlist!'); // Show feedback with toast notification
  };

  // Product rating (mock example, replace with real data if applicable)
  const rating = product.rating; // Get the rating dynamically from product data

  return (
    <div className="relative mx-auto mb-96">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeButton={true} />

      {/* Hero Section */}
      <div className="bg-purple-500 relative flex flex-col pt-16 text-center h-[500px]">
        <h2 className="text-white text-xl font-bold">Product Details</h2>
        <p className="text-white text-md mt-4">
          Explore the latest gadgets that will take your experience to the next level. <br />
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Details Section */}
      <div className="absolute max-w-screen-md mx-auto right-64 top-[200px] w-full bg-white rounded-t-lg p-6 shadow-lg">
        {/* Product Details Content */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row">
          {/* Left Column: Product Image */}
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              className="w-full h-80 object-cover rounded-lg shadow-md"
              src={product.product_image}
              alt={product.product_title}
            />
          </div>

          {/* Right Column: Product Information */}
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800">{product.product_title}</h2>
            <p className="mt-4 text-xl text-green-600 font-semibold">Price: ${product.price}</p>
            <div className="btn rounded-full bg-green-200 text-[#309C08]">
              <p>{product.availability ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <p className="mt-4 text-lg text-gray-600">{product.description}</p>

            {/* Specifications */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {product.specification && product.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Rating Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Rating:</h3>
              <div className="flex items-center mt-2">
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  activeColor="#ffd700"
                  isHalf={true} // Supports half stars
                  edit={false} // Make stars non-editable
                />
                <span className="ml-2 text-gray-600 text-lg">{rating} / 5</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                className="px-6 py-3 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 transition"
                onClick={handleAddToCart}
              >
                🛒 Add to Cart
              </button>
              <button
                className={`px-6 py-3 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition ${
                  inWishlist ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleAddToWishlist}
                disabled={inWishlist}
              >
                ♥ Add to Wishlist
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-6">
              <Link to="/" className="text-blue-500 hover:underline">
                Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
