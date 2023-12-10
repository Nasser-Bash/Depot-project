'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronUp,
  faChevronDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
function Gallery({product}) {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  return (
    <div className="product-images  md:grid grid-cols-5 gap-3   ">
    <div className="md:h-[550px] h-[400px] relative group">
      <span className="opacity-0  p-2 absolute top-[5px] left-0  w-full z-50 text-center group-hover:bg-[#05050569] transition duration-300 cursor-pointer text-3xl  font-thin group-hover:opacity-100">
        <FontAwesomeIcon
          className="text-white "
          ref={navigationPrevRef}
          icon={faChevronUp}
        />
      </span>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper   h-full "
      >
       {product.galleryimages.map((image) => {
          return (
            <SwiperSlide className="">
              <img
                className="object-cover  w-full  h-full"
                src={`/images/products/${image}`}
              />
            </SwiperSlide>
          );
        })} 
      </Swiper>
      <span className="opacity-0  p-2 absolute bottom-0 left-0  w-full z-50 text-center group-hover:bg-[#05050569] transition duration-300 cursor-pointer text-3xl  font-thin group-hover:opacity-100">
        <FontAwesomeIcon
          className="text-white"
          ref={navigationNextRef}
          icon={faChevronDown}
        />
      </span>
    </div>

     <img
      className="main-image col-span-4 object-cover w-full h-full mt-5 md:mt-0 "
      src={`/images/products/${product.mainImage}`}
    /> 
  </div>
  )
}

export default Gallery