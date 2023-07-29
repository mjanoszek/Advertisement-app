import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface CarDetailsCarouselProps {
  type: 'images' | 'videos';
  carouselData: Array<{
    name?: string
    url: string,
    heading?: string,
    text?: string,
    zeroToHundred?: string
    range?: string
    distance?: string
  }>;
  
}


const CarDetailsCarousel = ({ carouselData, type }: CarDetailsCarouselProps) => {
  
  const [selecteddataIndex, setSelecteddataIndex] = useState(0);

  const handleButtonClick = (indx: number) => {
    setSelecteddataIndex(indx);
  };

  const renderArrow = () => null; 

  return (
    <div className="flex items-center justify-center w-full">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="max-w-full"
        renderArrowNext={renderArrow}
        renderArrowPrev={renderArrow}
        selectedItem={selecteddataIndex}
      >
        {carouselData.map((data, indx: number) => (
          <div className="carousel-item-wrapper " key={indx}>
            <div className="carousel-item-full-bleed flex justify-center items-center">
              {type === 'images' ? 
                <img src={data.url} alt={data.name ? data.name : data.heading } className="carousel-item-data" />
                :
                <ReactPlayer
                  className="h-full w-full object-cover "
                  url={data.url}
                  playing={true}
                  muted={true}
                  loop={true}
                  width='100%'
                  height='100%'
                
                />
              }
            </div>
            <div className="px-5 w-full flex flex-col ">
              <div className="carousel-button-line bg-black h-[4px] mt-4 "></div>
              <div className="carousel-button-content flex flex-col items-start mt-5 mx-2">
                <button
                  className="carousel-button text-black font-medium py-2 rounded text-left"
                  onClick={() => handleButtonClick(indx)}
                >
                  {data.name && data.name}
                </button>
                <button className="carousel-button text-black  rounded text-2xl text-left font-medium">
                  {data.distance && data.distance}
                </button>
                <div className="w-full flex flex-col text-start">
                  <h2 className="text-black font-bold mb-2 text-left">
                    {data.heading && data.heading}
                  </h2>
                  {data.text &&  <p className="text-black mb-2 text-sm">{data.text}</p>}
                  
                  {'range' in data && 
                  <div className="flex flex-col ">
                    <p className="text-black mb-2 text-sm">{data.text}</p>
                    <p className="text-black text-lg">{data.zeroToHundred}</p>
                    <p className='text-gray-800 text-xs'>0-100 km/h</p>
                    <p className="text-black text-lg">{data.range}</p>
                    <p className='text-gray-800 text-xs'>Range (WLTP)</p>
                  </div>
                  }
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
