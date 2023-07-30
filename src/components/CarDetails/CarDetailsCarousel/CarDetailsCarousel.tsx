import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarDetailsCarouselProps {
  type: 'images' | 'videos';
  carouselData: Array<{
    name?: string;
    url: string;
    heading?: string;
    text?: string;
    zeroToHundred?: string;
    range?: string;
    distance?: string;
  }>;
}

const CarDetailsCarousel = ({
  carouselData,
  type,
}: CarDetailsCarouselProps) => {
  const [selecteddataIndex, setSelecteddataIndex] = useState(0);

  const handleButtonClick = (indx: number) => {
    setSelecteddataIndex(indx);
  };

  const renderArrow = () => null;

  return (
    <div className='flex w-full items-center justify-center'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className='max-w-full'
        renderArrowNext={renderArrow}
        renderArrowPrev={renderArrow}
        selectedItem={selecteddataIndex}
      >
        {carouselData.map((data, indx: number) => (
          <div className='carousel-item-wrapper ' key={indx}>
            <div className='carousel-item-full-bleed flex items-center justify-center'>
              {type === 'images' ? (
                <img
                  src={data.url}
                  alt={data.name ? data.name : data.heading}
                  className='carousel-item-data'
                />
              ) : (
                <ReactPlayer
                  className='h-full w-full object-cover '
                  url={data.url}
                  playing={true}
                  muted={true}
                  loop={true}
                  width='100%'
                  height='100%'
                />
              )}
            </div>
            <div className='flex w-full flex-col px-5 '>
              <div className='carousel-button-line mt-4 h-[4px] bg-black '></div>
              <div className='carousel-button-content mx-2 mt-5 flex flex-col items-start'>
                <button
                  className='carousel-button rounded py-2 text-left font-medium text-black'
                  onClick={() => handleButtonClick(indx)}
                >
                  {data.name && data.name}
                </button>
                <button className='carousel-button rounded  text-left text-2xl font-medium text-black'>
                  {data.distance && data.distance}
                </button>
                <div className='flex w-full flex-col text-start'>
                  <h2 className='mb-2 text-left font-bold text-black'>
                    {data.heading && data.heading}
                  </h2>
                  {data.text && (
                    <p className='mb-2 text-sm text-black'>{data.text}</p>
                  )}

                  {'range' in data && (
                    <div className='flex flex-col '>
                      <p className='mb-2 text-sm text-black'>{data.text}</p>
                      <p className='text-lg text-black'>{data.zeroToHundred}</p>
                      <p className='text-xs text-gray-800'>0-100 km/h</p>
                      <p className='text-lg text-black'>{data.range}</p>
                      <p className='text-xs text-gray-800'>Range (WLTP)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {}
    </div>
  );
};

export default CarDetailsCarousel;
