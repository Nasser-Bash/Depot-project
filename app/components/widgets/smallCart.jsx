'use client'
import {  useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { CartContext } from "@/app/context/cartContext";

function SmallCart() {

  const { cartItems, addToCart, removeFromCart, changeProductQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

 

  return (
    <div className="bg-black text-white absolute top-[100%] right-[-40%]  w-[230px] p-5 opacity-0 invisible transition duration-500 group-hover:opacity-100  group-hover:visible">
          {
            cartItems.length > 0 ?(

          
      <>
      {cartItems.map((item) => {
        return (
          <div className="product flex justify-between mb-5 gap-3">
            <img
              className="object-contain w-1/4 "
              src={`/images/products/${item.mainImage}`}
            />
            <span className="my-auto">
              <h4 className="text-md text-white">{item.name}</h4>
              <p className="text-sm text-gray-300">
                {item.price} * {item.quantity}{" "}
              </p>
            </span>
            <FontAwesomeIcon
              onClick={() => handleRemoveFromCart(item.id)}
              className="my-auto cursor-pointer"
              icon={faXmark}
            />
          </div>
        );
      })}
      
      <div className="control">
        <Link href="/cart">
          <button className="bg-black text-white p-2 w-full border border-white  text-sm hover:bg-gray-700 transition duration-200   mb-3">
            View Cart
          </button>
        </Link>
        <Link href="/checkout">
          <button className="bg-lightBlack text-white p-2 w-full  text-sm hover:bg-gray-700 transition duration-200  mb-3">
            Checkout
          </button>
        </Link>
      </div>
      </>
        ) : (
          <h3 className="text-center">No products in the cart.</h3>
        )
          }
    </div>
  );
}

export default SmallCart;
