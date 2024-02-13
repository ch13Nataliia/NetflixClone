import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
import { MdFavorite } from 'react-icons/md';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  return (
    <div className="
    cursor-pointer
     w-6 
     h-6
      lg:w-10 
      lg:h-10
      bg-white 
      rounded-full 
      flex 
      justify-center 
      items-center 
      transition
      hover:bg-neutral-300"
    onClick={() => {}}>
      <MdFavorite />
    </div>
  );
};

export default FavoriteButton;
