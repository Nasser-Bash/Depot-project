"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ProgressBar = ({ percent , title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const fillVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: `${percent}%`,
      transition: {
        duration: 1, // Set the duration of the animation
      },
    },
  };

  const [counter, setCounter] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      const interval = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          if (newCounter === percent) {
            clearInterval(interval);
          }
          return newCounter;
        });
      }, 20);
    }
  }, [inView]);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between font-bold text-sm">
        <h4>{title}</h4>
        <h4>{counter}%</h4>
      </div>
      <div className="h-2 relative max-w-xl overflow-hidden mt-5">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <motion.div
          className="transition-all ease-out duration-1000 h-full bg-black relative"
          style={{ width: '100%' }}
          initial="hidden"
          animate={controls}
          variants={fillVariants}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;