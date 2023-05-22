import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// interface ResponsiveCarouselProps {
//   name: string;
//   distance: string;
//   url: string;
// }

const ResponsiveCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleButtonClick = (indx: number) => {
    setSelectedImageIndex(indx);
  };

  const renderArrow = () => null; // Return null to hide the Next Slide button

  return (
    <div className="flex items-center justify-center w-[90vw]">
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
        {images.map((image, index) => (
          <div className="carousel-item" key={index} >
            <img src={image.url}  alt={image.name}/>
            <div className="carousel-button-line bg-black h-[4px] mt-8 w-8"></div>
            <div className="carousel-button-content flex flex-col items-center">
              <button
                className="w-full text-black font-medium py-2 px-4 rounded mb-2 text-left"
                onClick={() => handleButtonClick(index)}
              >
                {image.name}
              </button>
              <button className="w-full  text-black  px-4 rounded text-2xl text-left font-medium">
                {image.distance}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
