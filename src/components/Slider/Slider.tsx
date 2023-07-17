import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';


interface SliderProps {
  image: string[];
  isMobile: boolean

}

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

export const  Slider = ({ image, isMobile }: SliderProps ) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageSource = image;
  const imageIndex = wrap(0, imageSource.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };


  return (
    <div className="relative flex-wrap mb-16 min-[360px]:mb-20 lg:mb-28 ">
      <div className="flex justify-center items-center relative px-2 ">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={imageSource[imageIndex]}
            custom={direction}
            variants={isMobile ? variants : undefined}
            initial="enter"
            animate="center"
            exit="exit"
            className={
              `absolute shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]
              `
            }


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



        <div className="flex justify-between z-10 w-full h-full  ">

          


          <div className="flex flex-col h-full ">

            {/* <div className=" bg-white rounded-full w-10 h-10 top-0 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 left-3 transform scale-x-[-1] " onClick={(e) =>  {
              e.preventDefault();
              paginate(1);
            }}

            >
              {'up'}
            </div> */}

            <div className=" bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 left-3 transform scale-x-[-1] " onClick={(e) =>  {
              e.preventDefault();
              paginate(1);
            }}

            >
              {'‣'}
            </div>
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
