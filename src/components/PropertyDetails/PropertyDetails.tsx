import React, { useState, useEffect } from 'react';
import { Slider } from '../Slider/Slider';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { useMediaQuery } from 'react-responsive';


function PropertyDetails({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 630 });

  const API_KEY = import.meta.env.VITE_GEO_CODE_API_KEY;

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(data.location)}&key=${API_KEY}`,
      );
            

      const dataResponse = await response.json();
      setLongitude(dataResponse.results[0].geometry.lng);
      setLatitude(dataResponse.results[0].geometry.lat);
      
     
    };

    fetchData();
  }, [data.location]);
  

  
  return (
    <div className='flex justify-center items-start h-screen lg:px-14 mt-[20vw]'>
      <div className="flex justify-center items-center w-screen flex-col lg:w-4/6 lg:items-start lg:m-2 ">
        <div className="max-sm:pb-2 xl:w-full rounded-md  w-screen  lg:w-full min-[500px]:mb-10 min-[600px]:mb-20 min-[700px]:mb-28 min-[800px]:mb-48 lg:mb-14">
          <Slider image={data.images} isLarge={true} isMobile={isMobile}/>
        </div>
        <div className="flex justify-center items-center self-center flex-col z-20 mt-10 gap-5 mx-2">
          
          <div className="flex flex-col justify-start items-start self-start gap-1 ">
            <p className='font-bold text-xl xl:text-2xl'>{data.location}</p>

            <p className='font-semibold'>For Sale</p>
            <p>{data.price}</p>

          </div>
          <div className="flex flex-col self-start gap-2 ">
            <div className="flex  flex-row gap-5 ">
              <p className='flex gap-2 items-center'><FaBath/>{data.beds}</p>
              <p className='flex gap-2 items-center'><FaBed/>{data.baths}</p>
              <p className='flex gap-2 items-center'><SlSizeFullscreen/>{data.area}</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className='font-semibold'>About this Home</p>
              <p className='text-sm sm:text-md '>{data.description}</p>
            </div>
            <div className='flex items-center justify-center mt-5'>
              
              <iframe width="100%" height="400" src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&amp;layer=mapnik`}></iframe>

            </div>
          </div>
         
        </div>
        
      </div>
      
      <div className="hidden lg:flex content-center items-start h-screen w-3/6  ">
        <div className="flex items-center justify-center flex-col text-center border border-gray-400 rounded-sm py-10">
          <p className='font-bold text-xl xl:text-2xl p-2'>Request for more information</p>
          <form className='flex flex-col  gap-5 mt-10 p-3'>
            <input type="text" className='border border-black rounded-sm p-2' placeholder='Name'/>
            <input type="email" className='border border-black rounded-sm p-2' placeholder='Email'/>
            <input type='tel' className='border border-black rounded-sm p-2' placeholder='Your phone'/>
            <textarea id="" cols="30" rows="5" className='border border-black rounded-sm p-2' placeholder='Write a message'></textarea>
            <input type="submit" value="Send" className='border border-black rounded-sm w-1/3 p-1 self-center' />
          </form>
         
        </div>
      </div>
    </div>
  );
}




export default PropertyDetails;