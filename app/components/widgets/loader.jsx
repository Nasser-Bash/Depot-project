'use client'
import React, { useEffect, useRef } from 'react'

function Loader() {
    const loaderRef = useRef(null);
      
    useEffect(() => {
      loaderRef.current.style.display = "none";
    }, []);
  return (
    <div ref={loaderRef} className='bg-black fixed top-0 bottom-0 right-0 left-0 z-[1000] block'>
         <span  className="loader absolute top-[50%] left-0 right-0 tranlate-y-[-50%] m-auto  "></span>
    </div>
    
  )
}

export default Loader