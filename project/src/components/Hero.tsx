import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

export const Hero = () => {
  const { ref, y } = useParallax(30);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-6">
      <motion.div
        style={{ y }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.6,
          }}
          className="text-7xl md:text-8xl font-black tracking-tighter mb-6 text-gray-900"
        >
          Kota Venkata Sai Gagan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 0.8,
          }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl font-light text-gray-500 tracking-wide">
            Java Full Stack Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            delay: 1,
          }}
          className="text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          To build a long-term career in a forward-thinking organization that encourages continuous learning, skill development, and professional growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            className="text-gray-400"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};
