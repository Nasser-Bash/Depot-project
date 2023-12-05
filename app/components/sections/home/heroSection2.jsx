'use client'
import { motion } from 'framer-motion';

function HeroSection2() {
  return (
<motion.div className='hero-section h-[500px]  overflow-hidden' 
       
    >
      <motion.img  src='images/gallery8.jpg '
      className='object-cover w-full h-full'
       initial={{ scale: 1 }} 
       animate={{ scale: 1.1 }} 
       transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} 
      />

    </motion.div>
  )
}

export default HeroSection2