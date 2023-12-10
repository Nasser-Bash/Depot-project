'use client'

import { CartContext } from "@/app/context/cartContext";

import Link from "next/link";
import { useContext, useState } from "react";
import { Fade } from "react-reveal";

function AddToCart({product}) {
  const { cartItems, addToCart, removeFromCart, changeProductQuantity } = useContext(CartContext);
      const [quantity, setquantity] = useState(1);
      const [message, setmessage] = useState(false);
   const handleChange = (e) => {
    setquantity(parseInt(e.target.value));
  };
     const handleAddToCart = (product) => {
    addToCart(product, quantity);
    setmessage(true)
    
  };
  return (
  <>
  
   

    <span className="md:flex   my-8  ">
             <button
              onClick={() => handleAddToCart(product)}
              className="bg-black text-white py-2 h-3/2 w-full px-14 text-sm md:text-md hover:bg-gray-700 transition duration-200 mb-4 "
            >
              Add To Cart
            </button> 
              <input
                type="number"
                className="border bg-transparent py-2 px-3 mb-4 h-full leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border border-gray-600 w-full"
                id="exampleFormControlInputNumber"
                placeholder="Example label"
                defaultValue={1}
                min={1}
                onChange={(e) => handleChange(e)}
              />
          
    </span>
    <Fade> 
    <div className={`my-10 py-8 transition-opacity duration-500 border-y-2 border-gray-400 text-sm  ${message ? 'sm:flex justify-between ' : ' hidden'}`}>
          <h4 className="my-auto py-2 sm:mb-0 ">
            “{product.name}” has been added to your cart.
          </h4> 
          <Link href="/cart">
            <button className="bg-black text-white  p-2  w-full  text-sm md:text-md hover:bg-gray-700 transition duration-200  lg:mb-0 mb-3">
              View Cart
            </button>
          </Link>
        </div>
    </Fade>
    </>
  )
}

export default AddToCart