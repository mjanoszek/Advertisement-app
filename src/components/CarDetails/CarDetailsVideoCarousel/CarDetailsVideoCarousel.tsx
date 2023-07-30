import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';

interface CarDetailsVideoCarouselProps {
  videoData: {
    url: string;
    heading: string;
    text: string;
  }[];
}

function CarDetailsVideoCarousel({ videoData }: CarDetailsVideoCarouselProps) {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoChange = (index: number) => {
    setCurrentVideo(index);
  };

  return (
    <div>
      <div className='absolute top-10 min-[600px]:px-4 lg:px-64'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <ReactPlayer
              className='h-full w-full object-cover '
              url={videoData[currentVideo].url}
              playing={true}
              muted={true}
              loop={true}
              width='100%'
              height='100%'
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='flex items-center justify-center'>
        <div className='mt-[65vw] flex gap-10 md:mt-[55vw] lg:mt-[40vw]'>
          <div className='flex flex-col px-4 min-[600px]:px-8 min-[900px]:px-[30vw]'>
            <div className='flex py-8 '>
              {videoData.map((item, indx) => (
                <div key={indx} className='relative flex h-full'>
                  <button
                    className={`mx-2 h-3 w-3 rounded-full border-2 border-transparent bg-gray-500 ${
                      indx === currentVideo && 'bg-gray-100'
                    }`}
                    onClick={() => {
                      handleVideoChange(indx);
                    }}
                  />
                  {indx === currentVideo ? (
                    <motion.div
                      className='absolute mx-2 h-3 w-3 rounded-full bg-white'
                      layoutId='underline'
                      transition={{
                        type: 'tween',
                        ease: 'easeInOut',
                        duration: 0.3,
                      }}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-4 bg-opacity-50 px-2 text-left'>
              <p className='text-md font-medium text-white'>
                {videoData[currentVideo].heading}
              </p>
              <p className='text-sm text-white'>
                {videoData[currentVideo].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsVideoCarousel;
