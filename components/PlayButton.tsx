import React from 'react';
import { IoPlay } from 'react-icons/io5';
import { useRouter } from 'next/router';

interface PlayButtonProps {
  movieId: string;
}

const PLayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
<button className=" 
bg-white 
rounded-md 
py-1 md:py-2
 px-2 md:px-4 
 w-auto 
 text-xs lg:text-lg
 font-semibold
  flex 
  flex-row 

  items-center
   hover:bg-neutral-300 
   transition">Play</button>
  );
};

export default PLayButton;
