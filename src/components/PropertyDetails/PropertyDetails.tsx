import React, { useState, useEffect } from 'react';
import { Slider } from '../Slider/Slider';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Navbar/Navbar';
import { PropertyItem } from '../../types/PropertyItem';
import AdvertisementForm from '../AdvertisementForm/AdvertisementForm';

interface PropertyDetailsProps {
  data: PropertyItem;
}

function PropertyDetails({ data }: PropertyDetailsProps) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const fullText =
    'By submitting an email through this form, you represent and warrant that you have obtained all necessary consents, approvals, and authorizations from any third parties whose personal information or other sensitive data you may include in your message. You further agree to use this form only for lawful purposes and not to send any unsolicited or unauthorized commercial messages or spam. You acknowledge that the transmission of any information through this form is at your own risk and that you are solely responsible for any consequences or damages that may arise from such transmission';

  const truncatedText = (
    <p className='text-xs'>
      {fullText.slice(0, 100)}...{' '}
      <span onClick={toggleShowMore} className='text-blue-700'>
        Read more
      </span>
    </p>
  );

  const textToShow = (
    <p className='text-xs'>
      {fullText}{' '}
      <span onClick={toggleShowMore} className='text-blue-700'>
        Read less
      </span>
    </p>
  );

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const API_KEY = import.meta.env.VITE_GEO_CODE_API_KEY;

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          data.location
        )}&key=${API_KEY}`
      );

      const dataResponse = await response.json();
      setLongitude(dataResponse.results[0].geometry.lng);
      setLatitude(dataResponse.results[0].geometry.lat);
    };

    fetchData();
  }, [data.location]);

  return (
    <>
      <Navbar isAbsolute={false} />
      <div className='flex h-screen items-start justify-center pt-[22vw] lg:px-14 '>
        <div className='flex w-screen flex-col items-center justify-center lg:mt-10 lg:items-start xl:mt-16 xl:w-screen'>
          <div className='w-screen min-[500px]:mb-10 lg:mb-32 xl:mb-24'>
            <Slider image={data.images} isMobile={isMobile} isInMenu={false} />
          </div>

          <div className='z-20 mx-2 mb-12 mt-[10vw] flex gap-5 self-center max-md:flex-col md:mx-8 lg:mt-[5vw] xl:mx-16 xl:mt-[12vw] 2xl:mt-[15vw]'>
            <div className='flex flex-col gap-2 self-start lg:w-5/6'>
              <p className='text-xl xl:text-2xl'>{data.location}</p>
              <p className='font-medium xl:text-xl'>For Sale</p>
              <p className=' font-medium md:text-lg lg:text-xl xl:text-2xl'>
                {data.price}
              </p>
              <div className='flex flex-row gap-5 xl:text-lg'>
                <p className='flex items-center gap-2 '>
                  <FaBath />
                  {data.beds}
                </p>
                <p className='flex items-center gap-2'>
                  <FaBed />
                  {data.baths}
                </p>
                <p className='flex items-center gap-2'>
                  <SlSizeFullscreen />
                  {data.area}
                </p>
              </div>
              <div className='mt-2 flex flex-col gap-2'>
                <p className='font-medium 2xl:text-xl'>About this Home</p>
                <p className='sm:text-md text-sm 2xl:text-lg '>
                  {data.description}
                </p>
              </div>
              <div className='mt-5 flex items-center justify-center'>
                <iframe
                  className='h-[350px] rounded-xl'
                  width='100%'
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&amp;layer=mapnik`}
                ></iframe>
              </div>
            </div>
            <AdvertisementForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
