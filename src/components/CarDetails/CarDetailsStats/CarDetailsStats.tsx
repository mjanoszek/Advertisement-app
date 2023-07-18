import React from 'react';
import { IconType } from 'react-icons/lib';

interface CarDetailsStatsProps {
  heading: string | IconType,
  paragraph: string
}

function CarDetailsStats({ heading, paragraph }: CarDetailsStatsProps) {
  
  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      {typeof heading === 'string' ? (
        <p className="text-base min-[600px]:text-2xl min-[900px]:text-xl font-medium">{heading}</p>
      ) : (
        <>{heading}</>
      )}
        
      
      <p className='text-xs sm:text-base min-[900px]:text-[0.8rem]'>{paragraph}</p>
    </div>
  );
}

export default CarDetailsStats;