'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination , Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function SplitShowcase() {
    const swiperRef = useRef(null);
    const [previousSlide, setPreviousSlide] = useState(null);
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      swiperRef.current.swiper.slideNext();
    } else {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div onWheel={handleWheel} className=''>
    <Swiper
    direction={'vertical'}
    slidesPerView={1}
    speed={1000}
    pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          
          return (` 
          <button key=${index} class="${className} gap-1   flex group px-5 text-[15px]">
         0${index + 1}
         <span class="w-[60px] bg-black opacity-70  my-auto h-[1px] 	 "></span>
        </button>
         
       `);
        },
      }}
    autoplay
    modules={[Pagination , Autoplay]}
    mousewheel={true}
    ref={swiperRef}
    onSlideChange={(swiper) => setPreviousSlide(swiper.previousIndex)}
    className=" h-screen relative "
  >
    <SwiperSlide >
        <div className='grid md:grid-cols-2 grid-cols-1 overflow-hidden  h-full '>
        
         <div className={`text-black md:py-0 py-16   flex flex-col justify-center items-center ${previousSlide===0 ? 'translate-y-[100%] transition duration-1000' : ''}`}>
            <h4 className='text-4xl font-bold mb-5'> DECORATION</h4>
            <p className='font-medium'>SUPERIOR SERVICE</p>
         </div>
        
         <img className={`h-full w-full object-cover  ${previousSlide===0 ? 'translate-y-[-100%] transition duration-1000' : ''} `} src='/images/h13-slide1-img.jpg'/>
        </div>
       
    </SwiperSlide>
    <SwiperSlide >
        <div className='md:grid grid-cols-2 overflow-hidden'>
        
         <div className={`text-black md:py-0 py-16  flex flex-col justify-center items-center ${previousSlide===1 ? 'translate-y-[-100%] transition duration-1000' : ''}`}>
            <h4 className='text-4xl font-bold mb-5'>ELEGANT STYLE</h4>
            <p className='font-medium'>SUPERIOR SERVICE</p>
         </div>
         <img className={`h-full w-full object-cover  ${previousSlide===1 ? 'translate-y-[100%] transition duration-1000' : ''} `} src='/images/h13-slide2-img.jpg'/>
        </div>
       
    </SwiperSlide>
    <SwiperSlide >
        <div className='md:grid grid-cols-2  md:py-0 py-16  overflow-hidden'>
        
         <div className={`text-black flex flex-col justify-center items-center  ${previousSlide===2 ? 'translate-y-[100%] transition duration-1000' : ''}`}>
            <h4 className='text-4xl font-bold mb-5'>BEAUTIFUL DESIGN</h4>
            <p className='font-medium'>SUPERIOR SERVICE</p>
         </div>
         <img className={`h-full w-full object-cover  ${previousSlide===2 ? 'translate-y-[-100%] transition duration-1000' : ''} `} src='/images/h13-slide3-img.jpg'/>
        </div>
       
    </SwiperSlide>
    <div className='text-black absolute bottom-[50%] flex flex-col  gap-28 left-0 z-[50]   font-bold  '>
        
        <ul className='text-sm flex gap-6 transform rotate-[-90deg]'>
            <li className='hover:text-gray-500 transition dutation-500'>
                <a href='#'>
                <FontAwesomeIcon icon={faFacebookF}/>
                </a>
              
            </li>
            <li className='hover:text-gray-500 transition dutation-500'>
                <a href='#'>
                <FontAwesomeIcon icon={faInstagram}/>
                </a>
              
            </li>
            <li className='hover:text-gray-500 transition dutation-500'>
                <a href='#'>
                <FontAwesomeIcon icon={faTwitter}/>
                </a>
              
            </li>
        
        </ul>
        <h4 className='uppercase text-sm transform rotate-[-90deg]'>folow us</h4>
    </div>
  </Swiper>
  </div>
  )
}

export default SplitShowcase