import React from 'react';

interface SecondaryButtonProps {
  theme: string,
  heading: string
}
function SecondaryButton({ theme, heading }: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={`border-2 rounded-md w-full p-2 px-14 mt-2 font-medium min-[600px]:w-fit ${theme == 'light' ? 'bg-white border-black' : 'bg-black border-white text-white'}`}>
      {heading}
    </button>
  );
}

export default SecondaryButton;