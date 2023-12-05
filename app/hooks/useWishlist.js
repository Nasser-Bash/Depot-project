import { useState, useEffect } from 'react';

const useWishlist = () => {
  const [wishlistItems, setwishlistItems] = useState([]);


  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setwishlistItems(wishlist);

    const handleStorageChange = (event) => {
      if (event.key === 'wishlistItems') {
        const wishlist = JSON.parse(event.newValue) || [];
        setwishlistItems(wishlist);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
 
  

 
  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const existingProductIndex = wishlist.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      const updatedWishlistItems = [...wishlist];
      updatedWishlistItems.splice(existingProductIndex, 1);
      localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));
      return true;
    } else {
      const updatedWishlistItems = [...wishlist, { ...product }];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));
      return false;
    }
  };
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== productId);
    setwishlistItems(updatedWishlist);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
  }; 

 

  return [wishlistItems, addToWishlist , removeFromWishlist  ];
};

export default useWishlist;