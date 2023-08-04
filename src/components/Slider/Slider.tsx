import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

interface SliderProps {
  image: string[];
  isMobile: boolean;
  isInMenu: boolean;
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

export const Slider = ({ image, isMobile, isInMenu }: SliderProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageSource = image;
  const imageIndex = wrap(0, imageSource.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className='min-[360px]:mb-20 relative mb-16 flex-wrap lg:mb-28 '>
      <div className='relative flex items-center justify-center px-2 '>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={imageSource[imageIndex]}
            custom={direction}
            variants={isMobile ? variants : undefined}
            initial='enter'
            animate='center'
            exit='exit'
            className={`absolute rounded-t-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]`}
            style={
              isInMenu && {
                width: '100%',
                height: '100%',
                minHeight: '200px',
                objectFit: 'cover',
              }
            }
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag='x'
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

        <div className='z-10 flex h-full w-full justify-between  '>
          <div className='flex h-full flex-col '>
            <div
              className=' left-3 z-10 flex h-10 w-10 scale-x-[-1] transform cursor-pointer select-none items-center justify-center rounded-full bg-white text-lg font-bold '
              onClick={(e) => {
                e.preventDefault();
                paginate(1);
              }}
            >
              {'‣'}
            </div>
          </div>
          <div
            className=' right-3 z-10 flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-white text-lg font-bold  '
            onClick={(e) => {
              e.preventDefault();
              paginate(-1);
            }}
          >
            {'‣'}
          </div>
        </div>
      </div>
    </div>
  );
};
