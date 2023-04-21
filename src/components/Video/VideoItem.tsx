import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export interface VideoItemProps {
  item: any;
  forcePause: boolean;
  setForcePause: (value: boolean) => void;
}

export const VideoItem = ({
  item,
  forcePause,
  setForcePause,
}: VideoItemProps) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setForcePause(false);
  };

  React.useEffect(() => {
    if (forcePause) {
      handlePause();
    }
  }, [forcePause]);

  return (
    <ReactPlayer
      url={item.videoUrl}
      light={
        <Image
          src={item.thumbnailImage}
          alt={item.id}
          style={{ height: '100%', objectFit: 'cover' }}
        />
      }
      width="100%"
      height="100%"
      onPlay={handlePlay}
      onPause={handlePause}
      playing={isPlaying}
    />
  );
};
