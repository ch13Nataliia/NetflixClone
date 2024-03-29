import useBillboard from '@/hooks/useBillboard';
import React, { useCallback } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import PLayButton from './PlayButton';
import useInfoModal from '@/hooks/useInfoModule';

const Billboard = () => {
  const { data } = useBillboard();

  const { openModal } = useInfoModal();
  const handelOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25w]">
      <video
        className="
      w-full
      h-[56.25vw]
      object-cover
      brightness-[60%]

      "
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p
          className="
        text-white 
        text-1xl 
        md:text-5xl
         h-full
          w-[50%]
           lg:text-6xl 
           font-bold 
           drop-shadow-xl"
        >
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.descrition}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PLayButton movieId={data?.id} />
          <button
            onClick={handelOpenModal}
            className="text-white bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-autotext-xs lg:text-lg flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <AiOutlineInfoCircle className="mr-1 " />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
