'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons";

 import useWishlist from "@/app/hooks/useWishlist";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
function AddToWishlist({product}) {
  const [wishlistItems, addToWishlist] = useWishlist();
  const [isAdded, seisAdded] = useState(false);

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    seisAdded(true);
  };
  const existProduct = () => {
    const existingProduct = wishlistItems.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      seisAdded(true);
    } else {
      seisAdded(false);
    }
  };
  useEffect(() => {
    existProduct();

  }, [wishlistItems]);
  return (
    <>
        {!isAdded ? (
            <span
              className="add-to-wishlist flex gap-3 cursor-pointer my-8"
              onClick={() => handleAddToWishlist(product)}
            >
              <FontAwesomeIcon className="" icon={faHeart} />
              <h4 className="text-sm font-normal hover:text-gray-500 transition duration-300">
                ADD TO WISHLIST
              </h4>
            </span>
          ) : (
            <span className="add-to-wishlist flex gap-3 cursor-pointer my-8 opacity-100 transition duration-300">
              <FontAwesomeIcon className="text-red-500" icon={faHeart} />
              <Link href="/wish-list">
                <h4 className="text-sm font-bold hover:text-gray-500 transition duration-300 underline  ">
                  BROWSE YOUR WISHLIST
                </h4>
              </Link>
            </span> 
          )}
    </>
  
  )
}

export default AddToWishlist






















