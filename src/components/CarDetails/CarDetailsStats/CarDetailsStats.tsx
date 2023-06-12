import React from 'react';
import { IconType } from 'react-icons/lib';



interface CarDetailsStatsProps {
  heading: string | IconType,
  paragraph: string
}


function CarDetailsStats({ heading, paragraph }: CarDetailsStatsProps) {
  
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {typeof heading === 'string' ? (
        <p className="text-base sm:text-2xl font-medium">{heading}</p>
      ) : (
        <>{heading}</>
      )}
        
      
      <p className='text-xs sm:text-base'>{paragraph}</p>
    </div>
  );
}

export default CarDetailsStats;