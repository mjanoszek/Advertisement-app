import React from 'react';

interface CarDetailsStatsProps {
  heading: string,
  paragraph: string
}
function CarDetailsStats({ heading, paragraph }: CarDetailsStatsProps) {
  return (
    <div className="flex flex-col">
      <p className='font-medium text-md'>{heading}</p>
      <p className='text-xs'>{paragraph}</p>
    </div>
  );
}

export default CarDetailsStats;