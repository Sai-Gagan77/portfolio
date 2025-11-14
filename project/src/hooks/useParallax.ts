import { useTransform, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export const useParallax = (distance: number = 50) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return { ref, y };
};

export const useParallaxValue = (scrollYProgress: MotionValue<number>, inputRange: number[], outputRange: number[]) => {
  return useTransform(scrollYProgress, inputRange, outputRange);
};
