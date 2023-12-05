'use client'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (


<button 
  onClick={scrollToTop}
   className={` fixed bottom-20 right-10 bg-black text-white overflow-hidden  p-3 h-[40px] text-sm md:text-md hover:bg-gray-700 transition-opacity duration-500  lg:mb-0 group   ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <FontAwesomeIcon   icon={faArrowUp}/>
</button>
  );
}

export default BackToTopButton;