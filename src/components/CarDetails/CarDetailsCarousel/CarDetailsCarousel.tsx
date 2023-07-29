import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface CarDetailsCarouselProps {
  carouselImages: Array<{
    name?: string
    url: string,
    heading?: string,
    text?: string,
    zeroToHundred?: string
    range?: string
    distance?: string
  }>;
  
}


const CarDetailsCarousel = ({ carouselImages }: CarDetailsCarouselProps) => {
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleButtonClick = (indx: number) => {
    setSelectedImageIndex(indx);
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
        selectedItem={selectedImageIndex}
      >
        {carouselImages.map((image, indx: number) => (
          <div className="carousel-item-wrapper " key={indx}>
            <div className="carousel-item-full-bleed flex justify-center items-center">
              <img src={image.url} alt={image.name ? image.name : image.heading } className="carousel-item-image" />
            </div>
            <div className="px-5 w-3/4 ">
              <div className="carousel-button-line bg-black h-[4px] mt-4 "></div>
              <div className="carousel-button-content flex flex-col items-start mt-5 ">
                <button
                  className="carousel-button text-black font-medium py-2 rounded mb-2 text-left"
                  onClick={() => handleButtonClick(indx)}
                >
                  {image.name && image.name}
                </button>
                <button className="carousel-button text-black  rounded text-2xl text-left font-medium">
                  {image.distance && image.distance}
                </button>
                <div className="w-full flex flex-col text-left">
                  <h2 className="text-black font-bold mb-2 text-left">
                    {image.heading && image.heading}
                  </h2>
                  {'range' in image && 
                  <div className="flex flex-col ">
                    <p className="text-black mb-2 text-sm">{image.text}</p>
                    <p className="text-black text-lg">{image.zeroToHundred}</p>
                    <p className='text-gray-800 text-xs'>0-100 km/h</p>
                    <p className="text-black text-lg">{image.range}</p>
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
