import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' ||
                           target.tagName === 'BUTTON' ||
                           target.closest('a') ||
                           target.closest('button') ||
                           target.classList.contains('cursor-hover');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: x - 6,
          y: y - 6,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          isHovering ? 'bg-blue-400' : 'bg-white'
        }`} />
      </motion.div>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div className="w-10 h-10 rounded-full border border-white" />
      </motion.div>
    </>
  );
};
