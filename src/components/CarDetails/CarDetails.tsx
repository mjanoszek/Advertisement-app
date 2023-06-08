import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../Navbar/Navbar';
import CarDetailsCarousel from '../CarDetails/CarDetailsCarousel/CarDetailsCarousel';
import { plaidModel, plaidAutopilot,  amsterdamToBrussels, brusselsToParis, munichToZurich, osloToGothenburg, plaid1Mobile, plaid3Mobile, plaidVideo1, plaidVideo2, plaidVideo3, plaidVideo4, plaid4Mobile, plaidVideo5, plaidVideo6, plaidVideo7, plaid6Mobile, plaid7, plaid5Mobile, plaidPowertrainMobile, plaidPowertrainMobile2, plaidStyle, plaidWheels, plaidAerodynamics } from '../../assets/Images/Cars/Tesla/plaidImport';
import CarDetailsAnimation from './CarDetailsAnimation/CarDetailsAnimation';
import CarDetailsStats from './CarDetailsStats/CarDetailsStats';
import CarDetailsVideoCarousel from './CarDetailsVideoCarousel/CarDetailsVideoCarousel';
import { MdOutlineCamera } from 'react-icons/md';


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


function CarDetails({ data }: CarDetailsProps) {
  
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



  const images = [
    {
      name: 'Munich to Zurich',
      distance: '311 km',
      url: munichToZurich,
    },
    {
      name: 'Amsterdam to Brussels',
      distance: '203 km',
      url: amsterdamToBrussels,
    },
    {
      name: 'Brussels to Paris',
      distance: '320 km',
      url: brusselsToParis,
    },
    {
      name: 'Oslo to Gothenburg',
      distance: '295 km',
      url: osloToGothenburg,
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
        <div className="flex justify-center items-center gap-3 mb-8  text-white text-center w-screen px-5">
          <div className="text-xl flex gap-[7vw]">
            <CarDetailsStats heading={data.range} paragraph={'Range (WLTP)'}/>
            <CarDetailsStats heading={data.ZeroToHundred} paragraph={'0-100 km/h'}/>
            <CarDetailsStats heading={data.topSpeed} paragraph={'Top Speed'}/>
          </div>
        </div>
        <div className="flex justify-center items-center  text-white text-center w-screen px-5">
          <button type='button' className='border-2 bg-white text-black font-medium rounded-md w-full py-2 mx-5'>Order Now</button>
        </div>
        
      </div>



      <div className="flex justify-center flex-col bg-cover bg-center h-screen shadow-[inset_0_360px_69px_0_rgba(0,0,0,0.6)]" style={{ backgroundImage: `url(${plaid3Mobile})` }} >
        <div className="flex flex-col text-center self-center text-white mt-36 h-screen ">
          <div className="text-xl">
            <CarDetailsAnimation
              imageSrc={null}
              heading={'Interior of the future S'}
              paragraph={null}
              showVideo={null}
              videoUrl={null}
            />
          </div>
        </div>
      </div>



      <div className="flex justify-center flex-col h-screen bg-black " >
        <div className="flex flex-col text-center self-center text-white h-screen relative mt-16">
        
          <CarDetailsVideoCarousel videoData={teslaVideosData}/>


          <div className="flex flex-col bg-black gap-14 pt-24">

            <CarDetailsAnimation
              imageSrc={plaid6Mobile}
              heading="Stay Connected"
              paragraph="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
              showVideo={false} 
              videoUrl={null}              
            />

            <CarDetailsAnimation
              imageSrc={null} 
              heading="Immersive Sound"
              paragraph="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."
              showVideo={true}
              videoUrl={plaidVideo6}
            />

            <CarDetailsAnimation
              imageSrc={plaid7}
              heading="Room for Everything"
              paragraph="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
              showVideo={false} 
              videoUrl={null}
            />



            <div className="relative flex justify-center items-end mt-10 flex-col">
              <div className="flex justify-center flex-col bg-cover bg-center h-[65vh]" style={{ backgroundImage: `url(${plaid5Mobile})` }} >
                <div className="flex gap-3 text-white  mb-24  w-screen h-screen mt-[32rem] px-5">
                  <CarDetailsStats heading={data.power} paragraph={'Vehicle Power‡'}/>
                  <CarDetailsStats heading={data.yearOfManufacture} paragraph={'Year Of Manufacture'}/>
                  <CarDetailsStats heading={data.ZeroToHundred} paragraph={'0-100 km/h'}/>
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
                <CarDetailsCarousel images={teslaImagesData}/>

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

              <CarDetailsAnimation
                imageSrc={plaidWheels}
                heading="Relentless Performance"
                paragraph="Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road."
                showVideo={false} 
                videoUrl={null}              
              />

              <CarDetailsAnimation
                imageSrc={plaidAerodynamics}
                heading="Optimized Aerodynamics"
                paragraph="Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
                showVideo={false} 
                videoUrl={null}              
              />

              <CarDetailsAnimation
                imageSrc={plaidStyle}
                heading="Refined Styling"
                paragraph="An iconic silhouette meets refreshed, elegant proportions."
                showVideo={false} 
                videoUrl={null}              
              />

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
                    <CarDetailsStats heading={'634 km'} paragraph={'Range (WLTP)'}/>
                    <CarDetailsStats heading={'15 min'} paragraph={'Recharge up to 322 km'}/>
                    <CarDetailsStats heading={'45,00+'} paragraph={'Global Supercharges'}/>
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
              <button type='button' className='border-2 font-medium border-black rounded-md w-full py-2 mt-5'>Order now</button>
              <button type='button' className='bg-gray-100 font-medium rounded-md w-full py-2 mt-5'>Find my route</button>

            </div>

            <div className="flex-col">
              <p className='font-semibold mb-2 text-xl'>Freedom to Travel</p>
              <p>
          Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.
              </p>
            </div>
              
              
          </div>
          <div className="flex flex-col">
            <CarDetailsCarousel images={images}/>
            <div className="flex flex-col justify-start items-start  text-left text-black bg-white p-5">
              <button type='button' className='border-2 border-black font-medium rounded-md w-full py-2 mt-5'>Learn more</button>
            </div>
          </div>


          <div className="flex justify-center flex-col bg-cover bg-center h-[65vh]" >
            <div className="flex justify-center  items-center text-black   text-center w-screen h-screen  px-5">
              <p>in progress</p>
            </div>
          </div>

          <div className="flex justify-center flex-col bg-cover bg-center h-[65vh]" style={{ backgroundImage: `url(${plaidAutopilot})` }} >
            <div className="flex gap-3 text-black  mb-24 w-screen h-screen mt-[32rem] px-5">
              <CarDetailsStats heading={'360°'} paragraph={'Degrees of Visibility'}/>
              <CarDetailsStats heading={'250 m'} paragraph={'Of Powerful Visual Processing'}/>
              <CarDetailsStats heading={<MdOutlineCamera/>} paragraph={'Tesla Vison'}/>
            </div>
          </div>
          
          
        </div>
      
      
      </div>
    </>
  );
}

export default CarDetails;





