import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cart);   
      
  }, []);
 
 

  const addToCart = (product, quantity = 1) => {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      const updatedCartItems = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
   

    } else {
      const updatedCartItems = [...cart, { ...product, quantity }];
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

  return [cartItems, addToCart , removeFromCart , changeProductQuantity ];
};

export default useCart;