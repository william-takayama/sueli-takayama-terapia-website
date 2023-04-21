import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  border: 'none',
  borderRadius: [24, 32],
  fontWeight: 'semibold',
  height: ['48px', '60px'],
  width: 320,
  padding: `0 1.5rem`,
});

const solid = defineStyle({
  border: 'none',
  borderRadius: [24, 32],
  fontWeight: 'semibold',
  height: ['48px', '60px'],
  width: 320,
  padding: `0 1.5rem`,
});

const buttonTheme = defineStyleConfig({
  variants: {
    outline,
    solid,
  },
});

export const captionCarouselTheme = defineStyleConfig({
  baseStyle: {
    height: '100%',
    width: '100%',
  },
});

export const customComponents = {
  Button: buttonTheme,
  CaptionCarousel: captionCarouselTheme,
};
