'use client'
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination ,Autoplay} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-reveal";
function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
   
    setActiveSlideIndex(swiper.realIndex);
   
  };
  const renderCustomBullet = (index, className) => {
    return (`
      <button key=${index} class="${className} gap-1 flex group text-[20px]">
        0${index + 1}
        <span class="w-[60px] bg-black opacity-70 my-auto h-[1px]"></span>
      </button>
    `);
  };
  return (
    <Swiper
    
    slidesPerView={1}
    onSlideChangeTransitionEnd={handleSlideChange}
    loop={true}
    
    speed={2000}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    
   
    pagination={{
      clickable: true,
    
      renderBullet: renderCustomBullet,
    }}
    modules={[ Autoplay ,Pagination ]}

    className="w-10/12  relative h-[600px]"
  >
   <SwiperSlide>
  

  <Fade>

  

      <div className=" h-full relative"   >
        <div className=" z-[20] absolute bottom-[30%] md:w-1/2   p-5 text-center md:text-start font-bold">
          <h4 className="uppercase text-3xl  text-black">think diffrent</h4>
          <p className="text-lg text-gray-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <Slide  up when={activeSlideIndex === 0}>
        <div className="absolute top-0 right-0 z-[10]" >
          <img src="/images/h1-slide1-img.png"/>
        </div>
        
        </Slide>
      </div>
      </Fade>
    </SwiperSlide>

    <SwiperSlide>
  


  <div className=" h-full relative"   >
    <div className=" z-[20] absolute bottom-[30%] md:w-1/2   p-5 text-center md:text-start font-bold">
      <h4 className="uppercase text-3xl  text-black">think diffrent</h4>
      <p className="text-lg text-gray-500">
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout.
      </p>
    </div>

    <Slide delay={200}  down when={activeSlideIndex === 1}>
    <div className="absolute top-0 right-[-20%] md:right-0 z-[17]" >
      <img className=" w-3/4" src="/images/products/h1-slide2-img2-removebg-preview.png" alt="Slide 2"/>
      
    </div>
    
    </Slide>
    <Slide  down when={activeSlideIndex === 1}>
    <div className="absolute top-0 right-[15%] z-[10]" >
      <img className=" w-3/4  " src="/images/products/h1-slide2-img1-removebg-preview.png" alt="Slide 2"/>
      
    </div>
   
    </Slide>
  </div>

</SwiperSlide>

<SwiperSlide>
  


  <div className=" h-full relative"   >
    <div className=" z-[20] absolute bottom-[30%] md:w-1/2   p-5 text-center md:text-start font-bold">
      <h4 className="uppercase text-3xl  text-black">think diffrent</h4>
      <p className="text-lg text-gray-500">
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout.
      </p>
    </div>

    <Slide  up when={activeSlideIndex === 2}>
    <div className="absolute top-0 right-0 z-[10]" >
      <img src="/images/products/h1-slide3-img-removebg-preview.png" alt="Slide 2"/>
    </div>
    
    </Slide>
  </div>

</SwiperSlide>
   
  </Swiper>
  )
}

export default HeroSection