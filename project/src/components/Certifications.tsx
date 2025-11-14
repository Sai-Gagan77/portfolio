import { motion, useScroll, useTransform } from 'framer-motion';
import { Award } from 'lucide-react';
import { useRef } from 'react';

const certificationsData = [
  'AI-ML',
  'Cybersecurity',
  'Cloud',
  'Android Developer',
  'NPTEL IIOT',
];

export const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="certifications" ref={ref} className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative">
      <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 mb-4">
            CERTIFICATIONS
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              className="cursor-hover group"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5 text-gray-700" />
                </div>
                <span className="text-base font-light text-gray-700">
                  {cert}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
