import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  border: 'none',
  borderRadius: 32,
  fontWeight: 'semibold',
  height: '60px',
  width: 320,
  padding: `0 1.5rem`,
});

const solid = defineStyle({
  border: 'none',
  borderRadius: 32,
  fontWeight: 'semibold',
  height: '60px',
  width: 320,
  padding: `0 1.5rem`,
});

const buttonTheme = defineStyleConfig({
  variants: {
    outline,
    solid,
  },
});

export const customComponents = {
  Button: buttonTheme,
};
