import React, { useState, useEffect } from 'react';
import { Slider } from '../Slider/Slider';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Navbar/Navbar';




function PropertyDetails({ data }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);
  


  const fullText = 'By submitting an email through this form, you represent and warrant that you have obtained all necessary consents, approvals, and authorizations from any third parties whose personal information or other sensitive data you may include in your message. You further agree to use this form only for lawful purposes and not to send any unsolicited or unauthorized commercial messages or spam. You acknowledge that the transmission of any information through this form is at your own risk and that you are solely responsible for any consequences or damages that may arise from such transmission';
  

  const truncatedText = (
    <p className='text-xs'>
      {fullText.slice(0, 100)}...{' '}
      <span onClick={toggleShowMore} className='text-blue-700'>Read more</span>
    </p>
  );

  const textToShow = (
    <p className='text-xs'>
      {fullText}{' '}
      <span onClick={toggleShowMore}  className='text-blue-700'>Read less</span>
    </p>
  );


  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    <>
      {!isMobile && <Navbar isAbsolute={false} />}
      <div className='flex justify-center items-start h-screen lg:px-14  pt-[20vw] '>
        <div className="flex justify-center items-center w-screen flex-col xl:w-screen lg:items-start lg:mt-10 xl:mt-16">
          <div className="w-screen min-[500px]:mb-10 lg:mb-32 xl:mb-24">
            <Slider image={data.images} isLarge={true} isMobile={isMobile}/>
           
          </div>



          <div className="flex max-md:flex-col self-center z-20 mt-[10vw] lg:mt-[5vw] xl:mt-[12vw] 2xl:mt-[15vw] gap-5 mx-2 md:mx-8 xl:mx-16 mb-12">

        
            <div className="flex flex-col self-start gap-2 lg:w-5/6">
              <p className='text-xl xl:text-2xl'>{data.location}</p>
              <p className='font-medium xl:text-xl'>For Sale</p>
              <p className=' font-medium md:text-lg lg:text-xl xl:text-2xl'>{data.price}</p>
              <div className="flex flex-row gap-5 xl:text-lg">
                <p className='flex gap-2 items-center '><FaBath/>{data.beds}</p>
                <p className='flex gap-2 items-center'><FaBed/>{data.baths}</p>
                <p className='flex gap-2 items-center'><SlSizeFullscreen/>{data.area}</p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className='font-medium 2xl:text-xl'>About this Home</p>
                <p className='text-sm sm:text-md 2xl:text-lg '>{data.description}</p>
              </div>
              <div className='flex items-center justify-center mt-5'>
                <iframe className='rounded-xl h-[350px]' width="100%"   src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&amp;layer=mapnik`}></iframe>
              </div>
            </div>
           

            <form className='flex w-[250px] lg:w-[350px] flex-col self-center text-center gap-2 lg:gap-5 mt-10 lg:ml-5 p-3 h-fit border border-gray-400 rounded-md shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
              <p className='font-medium text-xl xl:text-2xl p-2'>Request for more information</p>
              <input type="text" className='border border-black rounded-sm p-2' placeholder='Name'/>
              <input type="email" className='border border-black rounded-sm p-2' placeholder='Email'/>
              <input type='tel' className='border border-black rounded-sm p-2' placeholder='Your phone'/>
              <textarea  className="resize rounded-sm border border-black p-2" rows={parseInt('4')} placeholder='Write a message'></textarea>
              <input type="submit" value="Send" className='border border-black rounded-sm w-1/3 p-1 self-center' />
              <div>
                {showMore ? textToShow : truncatedText}
              </div>
            </form>
          </div>
      
            
        
        </div>
      
    
      </div>
    </>
  );
  
}




export default PropertyDetails;


