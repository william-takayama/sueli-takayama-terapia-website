import { Box } from '@chakra-ui/react';
import { AnimationProps, motion } from 'framer-motion';
import React from 'react';

interface IAnimatedDotProps {
  animation: AnimationProps['animate'];
  initialAnimation: AnimationProps['initial'];
  height: number;
  width: number;
  duration: number;
  delay?: number;
  color?: string;
}

const AnimatedDot = ({
  animation,
  color = 'white',
  height,
  initialAnimation,
  width,
  duration,
  delay,
}: IAnimatedDotProps) => (
  <motion.div
    style={{
      backgroundColor: color,
      borderRadius: '50%',
      height,
      width,
      overflow: 'hidden',
    }}
    layout
    initial={initialAnimation}
    animate={animation}
    transition={{ repeat: Infinity, delay, duration, ease: 'easeIn' }}
  />
);

interface IAnimatedDotsProps {
  isMobile: boolean;
}

const getXValue = (value: number, unit: string, isMobile: boolean) => {
  return `${isMobile ? 2 * value : value}${unit}`;
};

export const AnimatedDots = ({ isMobile }: IAnimatedDotsProps) => {
  return (
    <Box
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      overflow="hidden"
    >
      <AnimatedDot
        width={4}
        height={4}
        duration={4}
        initialAnimation={{
          x: getXValue(40, 'vw', isMobile),
          y: '20vh',
          opacity: 0.2,
          scale: 1,
        }}
        animation={{
          x: getXValue(5, 'vw', isMobile),
          y: 0,
          opacity: 0.8,
          scale: 2,
        }}
      />
      <AnimatedDot
        width={3.2}
        height={3}
        duration={4.2}
        initialAnimation={{
          x: getXValue(47, 'vw', isMobile),
          y: '12vh',
          opacity: 0.2,
          scale: 1,
        }}
        animation={{
          x: getXValue(38, 'vw', isMobile),
          y: 0,
          opacity: 0.8,
          scale: 2,
        }}
      />
      <AnimatedDot
        width={5.5}
        height={4.5}
        duration={4.5}
        initialAnimation={{
          x: getXValue(38, 'vw', isMobile),
          y: '30vh',
          opacity: 0.2,
          scale: 1,
        }}
        animation={{
          x: getXValue(0, 'vw', isMobile),
          y: '18vh',
          opacity: 0.8,
          scale: 2,
        }}
      />

      <AnimatedDot
        width={5.5}
        height={4.5}
        duration={2}
        delay={2}
        initialAnimation={{
          x: getXValue(12, 'vw', isMobile),
          y: '24vh',
          opacity: 0,
          scale: 1,
        }}
        animation={{
          x: getXValue(0, 'vw', isMobile),
          y: '12vh',
          opacity: 0.8,
          scale: 1.5,
        }}
      />

      <AnimatedDot
        width={9}
        height={7}
        duration={5.5}
        initialAnimation={{
          x: getXValue(40, 'vw', isMobile),
          y: '35vh',
          opacity: 0.1,
          scale: 1,
        }}
        animation={{
          x: getXValue(0, 'vw', isMobile),
          y: '50vh',
          opacity: 0.8,
          scale: 2,
        }}
      />
      <AnimatedDot
        width={7.5}
        height={5.5}
        duration={5.5}
        initialAnimation={{
          x: getXValue(30, 'vw', isMobile),
          y: '38vh',
          opacity: 0.1,
          scale: 1,
        }}
        animation={{
          x: getXValue(0, 'vw', isMobile),
          y: '45vh',
          opacity: 0.8,
          scale: 2,
        }}
      />

      <AnimatedDot
        width={4}
        height={4}
        duration={6}
        initialAnimation={{
          x: getXValue(40, 'vw', isMobile),
          y: '40vh',
          opacity: 0.2,
          scale: 1,
        }}
        animation={{
          x: getXValue(-30, 'vw', isMobile),
          y: '100vh',
          opacity: 0.8,
          scale: 2,
        }}
      />
      <AnimatedDot
        width={3.2}
        height={3}
        duration={4.2}
        initialAnimation={{
          x: getXValue(47, 'vw', isMobile),
          y: '88vh',
          opacity: 0.2,
          scale: 1,
        }}
        animation={{
          x: getXValue(-30, 'vw', isMobile),
          y: '100vh',
          opacity: 0.8,
          scale: 2,
        }}
      />
      <AnimatedDot
        width={5.5}
        height={4.5}
        duration={4.5}
        initialAnimation={{
          x: getXValue(38, 'vw', isMobile),
          y: '70vh',
          opacity: 0.2,
          scale: 1,
        }}
        animation={{
          x: getXValue(0, 'vw', isMobile),
          y: '92vh',
          opacity: 0.8,
          scale: 2,
        }}
      />
    </Box>
  );
};
