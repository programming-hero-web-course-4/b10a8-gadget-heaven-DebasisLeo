import React, { createContext, useContext, useState } from 'react';

// Create a context for cart and wishlist
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Provider component for the cart and wishlist context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]); // Add the product to the cart
  };

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]); // Add the product to the wishlist
  };

  return (
    <CartContext.Provider value={{ cart, setCart, wishlist, addToCart, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
