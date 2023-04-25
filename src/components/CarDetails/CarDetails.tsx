import React, { useState } from 'react';
import ReactPlayer from 'react-player';
// import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import plaid1Mobile from '../../assets/Images/Cars/Tesla/plaid1Mobile.jpeg';
import plaid3Mobile from '../../assets/Images/Cars/Tesla/plaid3Mobile.jpeg';
import plaidVideo1 from '../../assets/Images/Cars/Tesla/plaidVideo1.mp4';
import plaidVideo2 from '../../assets/Images/Cars/Tesla/plaidVideo2.mp4';
import plaidVideo3 from '../../assets/Images/Cars/Tesla/plaidVideo3.mp4';
import plaidVideo4 from '../../assets/Images/Cars/Tesla/plaidVideo4.mp4';
import plaidVideo5 from '../../assets/Images/Cars/Tesla/plaidVideo5.mp4';


function CarDetails({ data }) {

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

  const [current, setCurrent] = useState(0);

  const handleVideoChange = (indx: number) => {
    setCurrent(indx);
  };
 

  // const isMobile = useMediaQuery({ maxWidth: 768 });

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



      <div className="flex justify-center flex-col h-screen bg-black" >
        <div className="flex flex-col text-center self-center text-white mt-36 h-screen  ">
          <div className="flex flex-col gap-10 ">
            <div className="relative">
              <ReactPlayer
                className="h-full w-full object-cover "
                url={teslaData[current].url}
                playing={true}
                muted={true}
                loop={true}
                width='100%'
                height='100%'
              />

              
              <div className="flex flex-col justify-start gap-10 absolute top-64">
                <div className="flex justify-start px-4 ">
                  {teslaData.map((item, indx) => (
                    <>

                      <button
                        key={indx}
                        className={`mx-2 rounded-full h-3 w-3 border-2 border-transparent bg-gray-500   ${
                          indx === current && 'bg-gray-100'
                        }`}
                        onClick={() => {
                          handleVideoChange(indx);
                        }}
                      
                      />
                      {indx === current ? (
                        <motion.div className="underline bg-white w-3 h-3 rounded-full " layoutId="underline" />
                      ) : null}
                    </>

                  ))}



                  {/* {tabs.map((item) => (
                    <li
                      key={item.label}
                      className={item === selectedTab ? 'selected' : ''}
                      onClick={() => setSelectedTab(item)}
                    >
                      {`${item.icon} ${item.label}`}
                      {item === selectedTab ? (
                        <motion.div className="underline" layoutId="underline" />
                      ) : null}
                    </li>
                  ))} */}






                </div>
                <div className="flex flex-col text-left bg-opacity-50 px-6 gap-4 ">
                  <p className="text-md font-medium text-white">{teslaData[current].heading}</p>
                  <p className="text-sm text-white">{teslaData[current].text}</p>
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