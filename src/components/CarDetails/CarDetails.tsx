import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion,  AnimatePresence  } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import Navbar from '../Navbar/Navbar';
import { plaid1Mobile, plaid3Mobile, plaidVideo1, plaidVideo2, plaidVideo3, plaidVideo4, plaidVideo5, plaidVideo6, plaid6Mobile, plaid7 } from '../../assets/Images/Cars/Tesla/plaidImport';

// import { useMediaQuery } from 'react-responsive';




function CarDetails({ data }) {

 
  const imgRef = useInView({ threshold: 0.5 });
  const textRef1 = useInView({ threshold: 0.5 });
  const videoRef = useInView({ threshold: 0.5 });
  const textRef2 = useInView({ threshold: 0.5 });
  const imgRef2 = useInView({ threshold: 0.5 });
  const textRef3 = useInView({ threshold: 0.5 });

  const imgAnimation = useSpring({
    opacity: imgRef.inView ? 1 : 0,
    transform: imgRef.inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

 
  const textAnimation1 = useSpring({
    opacity: textRef1.inView ? 1 : 0,
    transform: textRef1.inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const videoAnimation = useSpring({
    opacity: videoRef.inView ? 1 : 0,
    transform: videoRef.inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });


  const textAnimation2 = useSpring({
    opacity: textRef2.inView ? 1 : 0,
    transform: textRef2.inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const imgAnimation2 = useSpring({
    opacity: imgRef2.inView ? 1 : 0,
    transform: imgRef2.inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const textAnimation3 = useSpring({
    opacity: textRef3.inView ? 1 : 0,
    transform: textRef3.inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });




  const [current, setCurrent] = useState(0);

  const handleVideoChange = (indx: number) => {
    setCurrent(indx);
  };
 

  // const isMobile = useMediaQuery({ maxWidth: 768 });

  
  const teslaData = [
    {
      url: plaidVideo1,
      heading: 'Cinematic Experience',
      text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
    },
    {
      url: plaidVideo2,
      heading: 'Yoke Steering',
      text: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.',
    },
    {
      url: plaidVideo3,
      heading: 'Perfect Environment',
      text: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.',
    },
    {
      url: plaidVideo4,
      heading: 'Redesigned Second Row',
      text: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
    },
    {
      url: plaidVideo5,
      heading: 'Console-Grade Gaming',
      text: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.',
    },
  ];

  
  return (
    <>
      <Navbar isAbsolute={true} />
     
      <div className="flex justify-center flex-col bg-cover bg-center h-screen shadow-[inset_0_-90px_90px_0_rgba(0,0,0,1)]" style={{ backgroundImage: `url(${plaid1Mobile})` }} >
        <div className="flex flex-col text-center self-center text-gray-900 mt-36 h-screen ">
          <p className='text-4xl font-medium '>Model S</p>
          <p className='text-xl font-normal '>Plaid</p>
        </div>
        <div className="flex justify-center items-center gap-5 self-start text-white  mb-24 text-center w-screen">
          <div className="flex flex-col">
            <p className='font-medium text-xl'>{data.range}</p>
            <p className='text-xs'>Range</p>
            <p className='text-xs'>(WLTP)</p>
          </div>
          <div className="flex flex-col">
            <p className='font-medium text-xl'>{data.ZeroToHundred}</p>
            <p className='text-xs'>0-100 km/h</p>
          </div>
          <div className="flex flex-col">
            <p className='font-medium text-xl'>{data.topSpeed}</p>
            <p className='text-xs'>Top Speed</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col bg-cover bg-center h-screen shadow-[inset_0_90px_90px_0_rgba(0,0,0,0.6)]" style={{ backgroundImage: `url(${plaid3Mobile})` }} >
        <div className="flex flex-col text-center self-center text-white mt-36 h-screen ">
          <p className='text-xl font-medium '>Interior of the future S</p>
        </div>
      </div>



      <div className="flex justify-center flex-col h-screen bg-black " >
        <div className="flex flex-col text-center self-center text-white h-screen relative mt-16">

          <div className="absolute top-10">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.3 }}
              >
                <ReactPlayer
                  className="h-full w-full object-cover "
                  url={teslaData[current].url}
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
              {teslaData.map((item, indx) => (
                <div key={indx} className="relative h-full">
                  <button
                    className={`mx-2 rounded-full h-3 w-3 border-2 border-transparent bg-gray-500 ${
                      indx === current && 'bg-gray-100'
                    }`}
                    onClick={() => {
                      handleVideoChange(indx);
                    }}
                  />
                  {indx === current ? (
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
              <p className="text-md font-medium text-white">{teslaData[current].heading}</p>
              <p className="text-sm text-white">{teslaData[current].text}</p>
            </div>

            <div className="flex flex-col bg-black gap-14 py-24">
              <animated.img
                ref={imgRef.ref}
                src={plaid6Mobile}
                style={imgAnimation}
              />

              <animated.div style={textAnimation1} ref={textRef1.ref} className='flex flex-col text-left bg-opacity-50 px-6 gap-4'>
                <p className="text-md font-medium text-white">Stay Connected</p>
                <p className="text-sm text-white">Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
              </animated.div>

              <animated.div style={videoAnimation} ref={videoRef.ref}>
                <ReactPlayer
                  className="h-full w-full object-cover"
                  url={plaidVideo6}
                  playing={true}
                  muted={true}
                  loop={true}
                  width='100%'
                  height='100%'
                />
              </animated.div>
              <animated.div style={textAnimation2} ref={textRef2.ref} className='flex flex-col text-left bg-opacity-50 px-6 gap-4'>
                <p className="text-md font-medium text-white">Immersive Sound</p>
                <p className="text-sm text-white">A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
              </animated.div>


              <animated.img
                ref={imgRef2.ref}
                src={plaid7}
                style={imgAnimation2}
              />

              <animated.div style={textAnimation3} ref={textRef3.ref} className='flex flex-col text-left bg-opacity-50 px-6 gap-4'>
                <p className="text-md font-medium text-white">Room for Everything</p>
                <p className="text-sm text-white">With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
              </animated.div>
            </div>
          </div>

          
        </div>
       
         
      

       
      </div>
      
    
    </>
  );
}

export default CarDetails;