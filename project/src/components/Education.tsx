import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useRef } from 'react';

const educationData = [
  {
    institution: 'Usha Rama College of Engineering and Technology',
    degree: 'B.Tech in AI & Data Science',
    score: 'CGPA 7.6',
    period: '2021 - 2025',
  },
  {
    institution: 'Srinivasa Graviity College',
    degree: 'Intermediate MPC',
    score: '79%',
    period: '2019 - 2021',
  },
  {
    institution: 'Sri Chaitanya Techno School',
    degree: 'Secondary Education',
    score: '90%',
    period: '2018 - 2019',
  },
];

export const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="education" ref={ref} className="min-h-screen py-32 px-6 bg-white relative">
      <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 mb-4">
            EDUCATION
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 20,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              className="cursor-hover group"
            >
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20 * (index + 1)]) }}
                className="relative bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap className="w-7 h-7 text-gray-700" />
                    </div>
                  </div>

                  <h3 className="text-xl font-normal text-gray-900 mb-3 leading-snug min-h-[3.5rem]">
                    {edu.institution}
                  </h3>

                  <p className="text-sm font-light text-gray-600 mb-2">
                    {edu.degree}
                  </p>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                    <span className="text-lg font-medium text-gray-900">
                      {edu.score}
                    </span>
                    <span className="text-sm font-light text-gray-500">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
