'use client'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart , faCheck} from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link';

import { Fade } from 'react-reveal';
import QuickView from './quickView';
import useCart from '@/app/hooks/useCart';
import useWishlist from '@/app/hooks/useWishlist';
function ProductCard(props) {
  const { id,name, price, mainImage , description , galleryimages } = props;
    const [activeQuickView, setactiveQuickView] = useState(false);
    const [IsAddToWishlist, setIsaddToWishlist] = useState(false);
    const [isAddedToCart, setisAddedToCart] = useState(false);
    const [cartItems, addToCart  ] = useCart();
    const [wishlistItems,addToWishlist] = useWishlist();
    
    const handleClickWishlist = (product)=>{
      addToWishlist(product)
      setIsaddToWishlist(!IsAddToWishlist) 
  }

 
    const handleClick = ()=>{
        setactiveQuickView(!activeQuickView) 
    }

  const handleAddToCart = (product) => {
     addToCart(product)
     setisAddedToCart(true);
   
  };
  const existProduct = ()=>{
    const existingProduct = wishlistItems.find((item) => item.id === props.id);
    const existingProductInCart = cartItems.find((item) => item.id === props.id);
   
    if (existingProduct) {
      setIsaddToWishlist(true);
    }else{
      setIsaddToWishlist(false);
    }
    if (existingProductInCart) {
      setisAddedToCart(true);
    }else{
      setisAddedToCart(false);
    }
  }
  useEffect(() => {
    existProduct()
  }, [wishlistItems,cartItems]);
  return (
    
    

    <div className='product  p-1   group cursor-pointer '>
        <div className='w-full mb-5 relative overflow-hidden  '>
        <Link href={`/products/${id}`}>  <img className='object-cover h-full w-full' src={`/images/products/${mainImage}`}/></Link>
            <span className=" translate-y-11 left-0 right-0 absolute bottom-0  flex justify-center text-[15px] transition duration-500  group-hover:translate-y-0">
                <button className="bg-black text-white  p-1 px-2 " onClick={handleClick} >Quick View </button>
                <FontAwesomeIcon onClick={()=>handleClickWishlist(props)}  className="bg-gray-500 p-2 text-white" icon={IsAddToWishlist===true ? faCheck: faHeart}/>
            </span>
           
        </div>
          
          <div className='product-info text-center overflow-hidden '>
          <h4 className='text-md text-black uppercase '>{name}</h4>
          <span className='w-[200%] flex justify-center'>

            {
              isAddedToCart ? (
             
                    <h4 className='text-sm text-gray-500 translate-x-[-150%] group-hover:translate-x-0 transition duration-500  inline-block w-full hover:text-black font-bold cursor-pointer'> 
                       <Link href='/cart'>
                             View Cart
                    </Link></h4>
             
              
              ) : (
                <h4  onClick={() => handleAddToCart(props)}   className='text-sm text-gray-500 translate-x-[-150%] group-hover:translate-x-0 transition duration-500  inline-block w-full hover:text-black font-bold cursor-pointer'> Add To Cart </h4>
              )
            }
         
          <h4 className='text-sm text-gray-500  group-hover:translate-x-48 transition duration-500 font-bold group-hover:opacity-0  translate-x-[-100%]  w-full'>{price}$</h4>
        
          </span>
    
          </div>
          <QuickView
           handleClick={handleClick} 
           activeQuickView={activeQuickView}
           name={name}
           price={price}
           mainImage={mainImage}
           description={description}
           galleryimages={galleryimages}
           />
    </div>
    
   
  )
}

export default ProductCard