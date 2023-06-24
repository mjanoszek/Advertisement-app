import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

function CarDetailsTextAnimation({ heading, textSize }) {

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animation}
    >
      <p className={`text-${textSize} font-medium `}>{heading}</p>
    </motion.div>
  );
}

export default CarDetailsTextAnimation;