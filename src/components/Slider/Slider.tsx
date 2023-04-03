import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const  Slider = ({ image, isLarge }: any ) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageSource = image;
  const imageIndex = wrap(0, imageSource.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };


  return (
    <div className="relative flex-wrap mb-16 min-[360px]:mb-20 lg:mb-28">
      <div className="flex justify-center items-center relative px-2">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={imageSource[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={!isLarge ? 'absolute w-[250px] h-[160px]  lg:w-[340px] lg:h-[215px] lg:max-w-[340px] lg:max-h-[215px] ' :  ' absolute w-screen' }
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className="flex justify-between z-10 w-full ">

          <div className=" bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 left-3 transform scale-x-[-1] " onClick={(e) =>  {
            e.preventDefault();
            paginate(1);
          }}

          >
            {'‣'}
        
          </div>
          <div className=" bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 right-3  " onClick={(e)  =>  {
            e.preventDefault();
            paginate(-1);
          }
          }>
            {'‣'}
          </div>
        </div>
      </div>
     
    </div>
  );
};