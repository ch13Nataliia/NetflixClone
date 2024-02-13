import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
import { MdFavorite } from 'react-icons/md';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';

import { FaCheck } from 'react-icons/fa';

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId } });
    } else {
      response = await axios.post('/api/favorite', {movieId} );
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? FaCheck : MdFavorite;
  return (
    <div
      onClick={toggleFavorites}
      className="
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
    >
      <Icon />
    </div>
  );
};

export default FavoriteButton;
