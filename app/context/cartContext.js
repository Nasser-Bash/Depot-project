'use client'
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cart);
  }, []);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity }];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const changeProductQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    changeProductQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};