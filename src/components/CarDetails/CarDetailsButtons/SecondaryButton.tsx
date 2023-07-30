import React from 'react';

interface SecondaryButtonProps {
  theme: string;
  heading: string;
}
function SecondaryButton({ theme, heading }: SecondaryButtonProps) {
  return (
    <button
      type='button'
      className={`mt-2 w-full rounded-md border-2 p-2 px-14 font-medium min-[600px]:w-fit ${
        theme == 'light'
          ? 'border-black bg-white'
          : 'border-white bg-black text-white'
      }`}
    >
      {heading}
    </button>
  );
}

export default SecondaryButton;
