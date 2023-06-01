import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';




function CarDetailsVideoCarousel({ videoData }) {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoChange = (index: number) => {
    setCurrentVideo(index);
  };

  return (
    <div>
      <div className="absolute top-10">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <ReactPlayer
              className="h-full w-full object-cover "
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
             
                
              
      <div className="flex flex-col justify-start gap-10 mt-64">
        <div className="flex justify-start px-4">
          {videoData.map((item, indx) => (
            <div key={indx} className="relative h-full">
              <button
                className={`mx-2 rounded-full h-3 w-3 border-2 border-transparent bg-gray-500 ${
                  indx === currentVideo && 'bg-gray-100'
                }`}
                onClick={() => {
                  handleVideoChange(indx);
                }}
              />
              {indx === currentVideo ? (
                <motion.div
                  className="bg-white w-3 h-3 rounded-full absolute mx-2 "
                  layoutId="underline"
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 0.3,
                  }}
                  style={{
                    top: '31%',
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col text-left bg-opacity-50 px-6 gap-4">
          <p className="text-md font-medium text-white">{videoData[currentVideo].heading}</p>
          <p className="text-sm text-white">{videoData[currentVideo].text}</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsVideoCarousel;