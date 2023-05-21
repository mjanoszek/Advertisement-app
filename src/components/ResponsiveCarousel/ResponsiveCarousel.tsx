import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ResponsiveCarousel = () => {
  return (
    <div className="flex items-center justify-center w-64">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="max-w-full"
      >
        <div className="carousel-item w-full">
          <div className="carousel-button-line bg-black h-[4px]"></div>
          <div className="carousel-button-content flex flex-col items-center ">
            <button className="w-full  text-black font-medium py-2 px-4 rounded mb-2 text-left">
              Munich to Zurich
            </button>
            <button className="w-full text-black  px-4 rounded text-2xl text-left font-medium">
              311 km
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-button-line bg-black h-[4px]"></div>
          <div className="carousel-button-content flex flex-col items-center">
            <button className="w-full text-black font-medium py-2 px-4 rounded mb-2 text-left">
              Amsterdam to Brussels
            </button>
            <button className="w-full  text-black  px-4 rounded text-2xl text-left font-medium">
              203 km
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-button-line bg-black h-[4px]"></div>
          <div className="carousel-button-content flex flex-col items-center">
            <button className="w-full text-black font-medium py-2 px-4 rounded mb-2 text-left">
              Brussels to Paris
            </button>
            <button className="w-full  text-black  px-4 rounded text-2xl text-left font-medium">
              203 km
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
