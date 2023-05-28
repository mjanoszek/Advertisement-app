import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';

const CarDetailsAnimation = ({ imageSrc, heading, paragraph, showVideo, videoUrl }) => {
  const [ref, inView] = useInView({ threshold: 1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 1, transition: { duration: 0.5 } });
    }
  }, [animation, inView]);

  return (
    <>
      {showVideo && (
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={animation}>
          <ReactPlayer className="h-full w-full object-cover" url={videoUrl} playing muted loop width="100%" height="100%" />
        </motion.div>
      )}

      <motion.img ref={ref} src={imageSrc} initial={{ opacity: 0, y: 50 }} animate={animation} />

      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={animation} className="flex flex-col text-left bg-opacity-50 px-6 gap-4">
        <p className="text-md font-medium text-white">{heading}</p>
        <p className="text-sm text-white">{paragraph}</p>
      </motion.div>
    </>
  );
};

export default CarDetailsAnimation;
