import React from 'react';
import { BsSpeedometer } from 'react-icons/bs';
import { FaBath, FaBed, FaWater, FaRoute } from 'react-icons/fa';
import { MdWatch } from 'react-icons/md';
import { PiCircleHalfTiltFill, PiEngineFill } from 'react-icons/pi';
import { SlSizeFullscreen } from 'react-icons/sl';

interface ProductDescriptionProps {
  data: {
    baths?: string;
    beds?: string;
    area?: string;
    diameter?: string;
    waterResistance?: string;
    material?: string;
    maxSpeed?: string;
    range?: string;
    engine?: string;
  };
  category: 'Property' | 'Watch' | 'Jet';
}

const ProductDescription = ({ data, category }: ProductDescriptionProps) => {
  const categoryData = {
    Property: [
      { icon: <FaBath />, description: data.baths },
      { icon: <FaBed />, description: data.beds },
      { icon: <SlSizeFullscreen />, description: data.area },
    ],
    Watch: [
      { icon: <PiCircleHalfTiltFill />, description: data.diameter },
      { icon: <FaWater />, description: data.waterResistance },
      { icon: <MdWatch />, description: data.material },
    ],
    Jet: [
      { icon: <BsSpeedometer />, description: `Max speed: ${data.maxSpeed}` },
      { icon: <FaRoute />, description: data.range },
      { icon: <PiEngineFill />, description: data.engine },
    ],
  };

  const categoryInfo = categoryData[category];

  return (
    <div className='flex flex-row gap-5 xl:text-lg'>
      {categoryInfo.map((item) => {
        return (
          <p className='flex items-center gap-2'>
            {item.icon}
            <p>{`${item.description}`}</p>
          </p>
        );
      })}
    </div>
  );
};

export default ProductDescription;
