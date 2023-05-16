import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { motion,  AnimatePresence, useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Navbar from '../Navbar/Navbar';
import { plaid1Mobile, plaid3Mobile, plaidVideo1, plaidVideo2, plaidVideo3, plaidVideo4, plaid4Mobile, plaidVideo5, plaidVideo6, plaidVideo7, plaid6Mobile, plaid7, plaid5Mobile, plaidPowertrainMobile, plaidPowertrainMobile2, plaidStyle, plaidWheels, plaidAerodynamics } from '../../assets/Images/Cars/Tesla/plaidImport';

// import { useMediaQuery } from 'react-responsive';


interface CarDetailsProps {
  data: {
    range: string;
    ZeroToHundred: string;
    topSpeed: string;
    yearOfManufacture: string;
    power: string;
  };
}


function CarDetails({ data }:CarDetailsProps) {

  const [carConnectedRef, inViewCarConnected] = useInView({ threshold: 1 });
  const [carSoundRef, inViewCarSound] = useInView({ threshold: 1 });
  const [carSpaceRef, inViewCarSpace] = useInView({ threshold: 1 });
  const [carWheelsRef, inViewCarWheels] = useInView({ threshold: 1 });
  const [carAerodynamicRef, inViewCarAerodynamic] = useInView({ threshold: 1 });
  const [carStyleRef, inViewCarStyle] = useInView({ threshold: 1 });

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();


  const animations = [
    { animation: animation1, inView: inViewCarConnected },
    { animation: animation2, inView: inViewCarSound },
    { animation: animation3, inView: inViewCarSpace },
    { animation: animation4, inView: inViewCarWheels },
    { animation: animation5, inView: inViewCarAerodynamic },
    { animation: animation6, inView: inViewCarStyle },
  ];





  useEffect(() => {
    animations.forEach(({ animation, inView }) => {
      if (inView) {
        animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      } else {
        animation.start({ opacity: 0, y: 1, transition: { duration: 0.5 } });
      }
    });
  }, [animations]);

 
  

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoChange = (indx: number) => {
    setCurrentVideo(indx);
  };



  

  // const isMobile = useMediaQuery({ maxWidth: 768 });

  
  const teslaVideosData = [
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


  const teslaImagesData = [
    {
      url: plaidPowertrainMobile,
      heading: 'Model S',
      text: 'Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.',
      zeroToHundred: '3.2 s',
      range: '634 km',
    },
    {
      url: plaidPowertrainMobile2,
      heading: 'Model S Plaid',
      text: 'Maintain 1,000+ horsepower all the way to 322 km/h with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.',
      zeroToHundred: '2.1 s*',
      range: '600 km',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBoxClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const allIngredients = [
    { icon: '🍅', label: 'Tomato' },
    { icon: '🥬', label: 'Lettuce' },
    { icon: '🧀', label: 'Cheese' },
  ];
  const [selectedTab, setSelectedTab] = useState(allIngredients[0]);
 
  return (
    <>
      <Navbar isAbsolute={true} />
     
      <div className="flex justify-center flex-col bg-cover bg-center h-screen shadow-[inset_0_-90px_90px_0_rgba(0,0,0,1)]" style={{ backgroundImage: `url(${plaid1Mobile})` }} >
        <div className="flex flex-col text-center self-center text-gray-900 mt-36 h-screen ">
          <p className='text-4xl font-medium '>Model S</p>
          <p className='text-xl font-normal '>Plaid</p>
        </div>
        <div className="flex justify-center items-center gap-3 mb-24 self-start text-white text-center w-screen px-5">
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
          <p className='text-xl font-medium'>Interior of the future S</p>
        </div>
      </div>



      <div className="flex justify-center flex-col h-screen bg-black " >
        <div className="flex flex-col text-center self-center text-white h-screen relative mt-16">

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
                  url={teslaVideosData[currentVideo].url}
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
              {teslaVideosData.map((item, indx) => (
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
              <p className="text-md font-medium text-white">{teslaVideosData[currentVideo].heading}</p>
              <p className="text-sm text-white">{teslaVideosData[currentVideo].text}</p>
            </div>

            <div className="flex flex-col bg-black gap-14 pt-24">
              
              <motion.img
                ref={carConnectedRef}
                src={plaid6Mobile}
                initial={{ opacity: 0, y: 50 }}
                animate={animation1}
              />

              <motion.div
                ref={carConnectedRef}
                initial={{ opacity: 0, y: 50 }}
                animate={animation1}
                className="flex flex-col text-left bg-opacity-50 px-6 gap-4"
              >
                <p className="text-md font-medium text-white">Stay Connected</p>
                <p className="text-sm text-white">
          Instantly connect with multi-device Bluetooth, or fast charge devices
          with wireless and 36-watt USB-C charging.
                </p>
              </motion.div>


              <motion.div
                ref={carSoundRef}
                initial={{ opacity: 0, y: 50 }}
                animate={animation2}
              >
                <ReactPlayer
                  className="h-full w-full object-cover"
                  url={plaidVideo6}
                  playing={true}
                  muted={true}
                  loop={true}
                  width="100%"
                  height="100%"
                />
              </motion.div>

              <motion.div
                ref={carSoundRef}
                initial={{ opacity: 0, y: 50 }}
                animate={animation2}
                className="flex flex-col text-left bg-opacity-50 px-6 gap-4"
              >
                <p className="text-md font-medium text-white">Immersive Sound</p>
                <p className="text-sm text-white">
          A 22-speaker, 960-watt audio system with Active Road Noise Reduction
          offers immersive listening and studio-grade sound quality.
                </p>
              </motion.div>

              <motion.img
                ref={carSpaceRef}
                src={plaid7}
                initial={{ opacity: 0, y: 50 }}
                animate={animation3}
              />

              <motion.div
                ref={carSpaceRef}
                initial={{ opacity: 0, y: 50 }}
                animate={animation3}
                className="flex flex-col text-left bg-opacity-50 px-6 gap-4"
              >
                <p className="text-md font-medium text-white">Room for Everything</p>
                <p className="text-sm text-white">
          With front and rear trunks and fold-flat seats you can fit your bike
          without taking the wheel off—and your luggage too.
                </p>
              </motion.div>




              <div className="relative flex justify-center items-end mt-10 flex-col">
                <div className="flex justify-center flex-col bg-cover bg-center h-[65vh]" style={{ backgroundImage: `url(${plaid5Mobile})` }} >
                  <div className="flex justify-center items-center gap-3 self-start text-white  mb-24 text-center w-screen h-screen mt-[32rem] px-5">
                    <div className="flex flex-col">
                      <p className='font-medium text-xl'>{data.power}</p>
                      <p className='text-xs'>Vehicle Power‡</p>
                    </div>
                    <div className="flex flex-col">
                      <p className='font-medium text-xl'>{data.yearOfManufacture}</p>
                      <p className='text-xs'>Year Of Manufacture</p>
                    </div>
                    <div className="flex flex-col">
                      <p className='font-medium text-xl'>{data.ZeroToHundred}</p>
                      <p className='text-xs'>0-100 km/h</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1 text-left text-black bg-white p-5">
                  <p className='text-md'>Plaid</p>
                  <p className='font-semibold mb-2 text-xl'>Beyond Ludicrous</p>
                  <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
                  <button type='button' className='border-2 border-black rounded-md w-full py-2 mt-5'>Order now</button>
                </div>
                <div className="flex flex-col justify-start items-start gap-1 text-left text-black bg-gray-100 px-5 py-14">
                  <p className='font-semibold mb-2 text-xl'>Electric Powertrain</p>
                  <p className='text-md'>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
                  
                </div>
                  
                
                
                

                <div className="flex flex-col items-center justify-center w-full bg-gray-100">
                  <motion.img
                    key={teslaImagesData[currentImageIndex].url}
                    src={teslaImagesData[currentImageIndex].url}
                    alt={teslaImagesData[currentImageIndex].heading}
                    className="w-full h-full object-cover "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="flex mt-4 md:mt-0">
                    {teslaImagesData.map((item, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleBoxClick(index)}
                        className={`${
                          currentImageIndex === index ? 'opacity-100' : 'opacity-25'
                        } hover:opacity-100 cursor-pointer transition-all duration-500`}
                      >
                        <div className="w-full p-4 flex flex-col text-left">
                          <h2 className="text-black font-bold mb-2 text-left">
                            {item.heading}
                          </h2>
                          <div className="flex flex-col">
                            <p className="text-black mb-2 text-sm">{item.text}</p>
                            <p className="text-black text-lg">{item.zeroToHundred}</p>
                            <p className='text-gray-800 text-xs'>0-100 km/h</p>
                            <p className="text-black text-lg">{item.range}</p>
                            <p className='text-gray-800 text-xs'>Range (WLTP)</p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  <p className='text-gray-800 text-sm p-5'>* With rollout subtracted</p>
                </div>
              </div>
              
              <div className="flex flex-col bg-black gap-14 py-10">
                <div className="flex flex-col">
                  <img src={plaid4Mobile} alt='plaidExterior' />
                  <div className="flex flex-col text-left px-6">
                    <p>Exterior</p>
                    <p className='font-medium text-2xl'>Designed for Efficiency</p>
                    <p className='mt-4 font-light'>With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
                    <button type='button' className='border-2 border-white rounded-md w-full py-2 mt-5'>Order now</button>
                  </div>
                </div>




                <motion.img
                  ref={carWheelsRef}
                  src={plaidWheels}
                  animate={animation4}
                />

                <motion.div
                  ref={carWheelsRef}
                  animate={animation4}
                  className="flex flex-col text-left bg-opacity-50 px-6 gap-4"
                >
                  <p className="text-md font-medium text-white">Relentless Performance</p>
                  <p className="text-sm text-white">
          Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.
                  </p>
                </motion.div>




                <motion.img
                  ref={carAerodynamicRef}
                  src={plaidAerodynamics}
                  animate={animation5}
                  initial={{ opacity: 0, y: 50 }}
                />

                <motion.div
                  ref={carAerodynamicRef}
                  animate={animation5}
                  initial={{ opacity: 0, y: 50 }}
                  className="flex flex-col text-left bg-opacity-50 px-6 gap-4"
                >
                  <p className="text-md font-medium text-white">Optimized Aerodynamics</p>
                  <p className="text-sm text-white">
         Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.
                  </p>
                </motion.div>





                <motion.img
                  ref={carStyleRef}
                  src={plaidStyle}
                  animate={animation6}
                  initial={{ opacity: 0, y: 50 }}
                />

                <motion.div
                  ref={carStyleRef}
                  animate={animation6}
                  initial={{ opacity: 0, y: 50 }}
                  className="flex flex-col text-left bg-opacity-50 px-6 gap-4"
                >
                  <p className="text-md font-medium text-white">Refined Styling</p>
                  <p className="text-sm text-white">
          An iconic silhouette meets refreshed, elegant proportions.
                  </p>
                </motion.div>

              </div>


         
              <div className="flex justify-center flex-col h-[65vh] relative">
                <div className="h-full w-full">
                  <ReactPlayer
                    className="object-cover"
                    url={plaidVideo7}
                    playing={true}
                    muted={true}
                    loop={true}
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center gap-3 text-white text-center mb-24 mt-[32rem] px-2">
                      <div className="flex flex-col">
                        <p className="font-medium">634 km</p>
                        <p className="text-xs">Range (WLTP)</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium">15 min</p>
                        <p className="text-xs">Recharge up to 322 km</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium">45,000+</p>
                        <p className="text-xs">Global Supercharges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="flex flex-col justify-start items-start gap-32 text-left text-black bg-white p-5">
              <div className="flex-col">
                <p className='text-md'>Range</p>
                <p className='font-semibold mb-2 text-xl'>Go Anywhere</p>
                <p>
          With up to 634 kilometers of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.
                </p>
                <button type='button' className='border-2 border-black rounded-md w-full py-2 mt-5'>Order now</button>
              </div>

              <div className="flex-col">
                <p className='font-semibold mb-2 text-xl'>Freedom to Travel</p>
                <p>
          Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.
                </p>
              </div>


              
              
            </div>
            <div className="h-[400px] flex justify-center items-center">
              <div className="rounded-2xl bg-white overflow-hidden shadow-md flex flex-col">
                <div className="flex justify-center items-center text-7xl">
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={selectedTab ? selectedTab.label : 'empty'}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {selectedTab ? selectedTab.icon : '😋'}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="bg-black p-2 rounded-b-2xl  border-gray-300">
                  <ul className="flex">
                    {allIngredients.map((item) => (
                      <li
                        key={item.label}
                        className={`flex-1 flex items-center justify-between px-2 rounded-md cursor-pointer ${
                          item === selectedTab ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => setSelectedTab(item)}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.label}</span>
                        {item === selectedTab ? (
                          <motion.div className="underline" layoutId="underline" />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          
          </div>
       
        </div>
      
      
      </div>
    </>
  );
}

export default CarDetails;