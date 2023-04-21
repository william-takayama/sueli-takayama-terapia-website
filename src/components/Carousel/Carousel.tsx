import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from 'react-slick';
import { VideoItem } from '../Video/VideoItem';
import { StaticImageData } from 'next/image';

type VideoItem = {
  id: string;
  videoUrl: string;
  thumbnailImage: StaticImageData;
  title: string;
};

export interface VideosCarouselProps {
  videos: VideoItem[];
}

export default function VideosCarousel({ videos }: VideosCarouselProps) {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [forcePause, setForcePause] = React.useState(false);

  // Settings for the slider
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const top = useBreakpointValue({ base: '95%', md: '95%' });
  const side = useBreakpointValue({ base: '32px', md: '40px' });

  const handlePreviousSlide = () => {
    setForcePause(true);
    slider?.slickPrev();
  };

  const handleNextSlide = () => {
    setForcePause(true);
    slider?.slickNext();
  };

  return (
    <Box position="relative" width="full" height="full" overflow="hidden">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={handlePreviousSlide}
        backgroundColor="gray.600"
        borderRadius="50%"
      >
        <BiChevronLeft size={32} color="white" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={handleNextSlide}
        backgroundColor="gray.600"
        borderRadius="50%"
      >
        <BiChevronRight size={32} color="white" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {videos.map((video, index) => (
          <Box id="box" key={index} position="relative" h="full">
            <VideoItem
              item={video}
              forcePause={forcePause}
              setForcePause={setForcePause}
            />
            <Stack
              spacing={6}
              w="full"
              maxW="lg"
              position="absolute"
              bottom={0}
              h={20}
              backgroundColor="gray.200"
              justifyContent="flex-start"
              zIndex={99}
              minW="full"
            >
              <Text
                mt={4}
                px={8}
                textAlign="center"
                fontWeight={700}
                textTransform="uppercase"
                fontSize={['sm', 'sm', 'md']}
              >
                Depoimento ({index + 1}/{videos.length}): {video.title}
              </Text>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
