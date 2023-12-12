'use client'
import { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark , faStar, faChevronUp, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import {  Navigation ,Autoplay ,FreeMode} from "swiper/modules";

import { CartContext } from "@/app/context/cartContext";

function QuickView(props) { 
  const {activeQuickView ,id, handleClick , name , price , mainImage , description , galleryimages} = props
  const { cartItems, addToCart, removeFromCart, changeProductQuantity } = useContext(CartContext);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [quantity, setquantity] = useState(1);
  const handleAddToCart = (product ) => {
    addToCart(product , quantity);
  };
  
    const handleChange = (e)=>{
      setquantity(parseInt(e.target.value))
      }
  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 bg-[#0707079e] w-screen h-screen z-[450] transition duration-500  p-5 ${activeQuickView === true ? "opacity-100 visible " : "opacity-0 invisible"}`}>
    <div className={` quick-view md:w-[75%] w-[90%] sm:h-3/2 h-4/5 absolute   top-10 left-1/2 transform -translate-x-1/2 z-[60] bg-white lg:grid grid-cols-2 overflow-y-scroll	"}`}>

 <FontAwesomeIcon onClick={handleClick} className="z-[60] absolute right-5 text-2xl cursor-pointer top-5 " icon={faXmark}/>
        <Swiper
    slidesPerView={1}
  
    speed={1200}
    loop
    centeredSlides 
    loopedSlides= {1}
    autoplay={{
        delay: 3500,
        disableOnInteraction: false,
    }}
    navigation={{
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    }}
  modules={[ FreeMode,Autoplay,Navigation]}
    className="w-full md:h-full h-3/4 relative " 
  >
     <span className="  p-2 absolute top-[50%] left-0  z-50 text-center bg-[#05050569] transition duration-300 cursor-pointer text-3xl  font-thin ">
        <FontAwesomeIcon
          className="text-white "
          ref={navigationPrevRef}
          icon={faChevronLeft}
        />
      </span>
    {
      galleryimages.map((image)=>{
          return(
            <SwiperSlide className=''>
                <img className="object-cover  w-full h-full " src={`/images/products/${image}`} alt=""/>
            </SwiperSlide>
          )
      })
    }
    <span className="  p-2 absolute top-[50%] right-0  z-50 text-center bg-[#05050569] transition duration-300 cursor-pointer text-3xl  font-thin ">
        <FontAwesomeIcon
          className="text-white "
          ref={navigationNextRef}
          icon={faChevronRight}
        />
      </span>
  </Swiper>
          
            <div className="my-auto product-info  md:px-16 px-5 py-8 md:text-start text-center ">
            
                    <h4 className="text-3xl text-black">{name}</h4>
                    <h4 className="text-2xl text-gray-500 mb-5 ">{price} $</h4>
                    <div className="text-amber-300 mb-10">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                  </div>
                    <p className="text-md text-gray-700  md:w-3/2 mb-5">
                      {description}
                     </p>
                    <span className="md:flex mt-8  ">
                            <button 
                            onClick={()=>handleAddToCart(props)}
                            className="bg-black text-white py-2 px-2 w-full text-md hover:bg-gray-700 transition duration-200   md:mb-0 mb-3">Add To Cart</button>
                            <div className="relative " data-te-input-wrapper-init>
  <input
    type="number"
    defaultValue={1}
    onChange={(e)=>handleChange(e)}
    min={1}
    className="border bg-transparent py-2 px-3 h-full leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border border-gray-600"
    id="exampleFormControlInputNumber"
    placeholder="Example label" />
  
                          </div>

                    </span>
                    
            </div>  
        </div>

    </div>
  )
}

export default QuickView