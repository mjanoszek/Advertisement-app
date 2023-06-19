import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';
import { useMediaQuery } from 'react-responsive';


interface CarDetailsAnimationProps {
  imageSrc: string | null,
  heading: string,
  paragraph: string | null,
  showVideo: boolean | null,
  videoUrl: string | null,
}
const CarDetailsAnimation = ({ imageSrc, heading, paragraph, showVideo, videoUrl }: CarDetailsAnimationProps) => {
  const [ref, inView] = useInView({ threshold: 1 });
  const animation = useAnimation();

  const isMobile = useMediaQuery({ maxWidth: 600 });

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 1, transition: { duration: 0.5 } });
    }
  }, [animation, inView]);

  return (
    <>
      {showVideo && videoUrl !== null && (
        <div className={`flex  ${isMobile ? 'flex-col gap-8' : 'flex-row-reverse gap-4 px-8 '} min-[900px]:px-28`}>
          <div className="flex">
            <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={animation}  >
              <ReactPlayer
                className="h-full w-full object-cover flex"
                url={videoUrl}
                playing
                muted
                loop
                width="100%"
                height="100%"
              />
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
            className="flex flex-col text-left justify-center bg-opacity-50 px-6 gap-4 min-[600px]:pr-6 min-[600px]:px-0 "
          >
            <p className="text-md font-medium text-white">{heading}</p>
            <p className="text-sm text-white">{paragraph}</p>
          </motion.div>
        </div>
      )}
      {imageSrc !== null && (
        <div className={`flex ${isMobile ? 'flex-col gap-8' : 'flex-row gap-4 px-8' } min-[900px]:px-28`}>
          <div className="flex">
            <motion.img ref={ref} src={imageSrc} initial={{ opacity: 0, y: 50 }} animate={animation}  />
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
            className="flex flex-col text-left justify-center bg-opacity-50 px-6 min-[600px]:pl-6 gap-4"
          >
            <p className="text-md font-medium text-white">{heading}</p>
            <p className="text-sm text-white">{paragraph}</p>
          </motion.div>
        </div>
      )}

      
    </>
  );
};

export default CarDetailsAnimation;
