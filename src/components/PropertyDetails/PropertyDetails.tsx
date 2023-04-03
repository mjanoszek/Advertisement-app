import React, { useState, useEffect } from 'react';
import { Slider } from '../Slider/Slider';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';


function PropertyDetails({ data }) {

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

    <div className="flex justify-center items-start gap-10 h-screen w-screen  ">
      <div className="flex justify-start items-start w-screen flex-col mt-[20vw]">
        <div className="max-sm:pb-2 xl:w-full rounded-md w-screen ">
          <Slider image={data.images} isLarge={true}/>
        </div>
        <div className="flex justify-center items-center self-center flex-col z-20 m-2 mt-10 gap-5  ">
          <div className="flex flex-col justify-start items-start self-start">
            <p className='font-semibold'>For Sale</p>
            <p className='font-bold text-xl xl:text-2xl'>{data.location}</p>
          </div>
          <div className="flex flex-col self-start gap-2">
            <p>{data.price}</p>
            <div className="flex  flex-row gap-5 ">
              <p className='flex gap-2 items-center'><FaBath/>{data.beds}</p>
              <p className='flex gap-2 items-center'><FaBed/>{data.baths}</p>
              <p className='flex gap-2 items-center'><SlSizeFullscreen/>{data.area}</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className='font-semibold'>About this Home</p>
              <p className='text-sm sm:text-md lg:text-lg'>{data.description}</p>
            </div>
            <div className='flex items-center justify-center mt-5'>
              
              <iframe width="100%" height="300" src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&amp;layer=mapnik`}></iframe>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}




export default PropertyDetails;