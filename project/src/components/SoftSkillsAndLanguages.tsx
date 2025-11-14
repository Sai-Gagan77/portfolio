import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Zap, Shield, Users, Globe } from 'lucide-react';
import { useRef } from 'react';

const softSkillsData = [
  { name: 'Good Communication', icon: MessageCircle },
  { name: 'Adaptability', icon: Zap },
  { name: 'Work under pressure', icon: Shield },
  { name: 'Teamwork', icon: Users },
];

const languagesData = ['English', 'Telugu'];

export const SoftSkillsAndLanguages = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative">
      <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-10">
              SOFT SKILLS
            </h3>
            <div className="flex flex-wrap gap-4">
              {softSkillsData.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
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
                    <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                      <span className="text-sm font-light text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-10">
              LANGUAGES
            </h3>
            <div className="flex flex-wrap gap-4">
              {languagesData.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
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
                  <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <Globe className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                    <span className="text-sm font-light text-gray-700">
                      {language}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
