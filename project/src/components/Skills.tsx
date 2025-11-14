import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const skillsData = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
];

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position += 0.5;
      if (position > container.scrollWidth - container.clientWidth) {
        position = 0;
      }
      container.scrollLeft = position;
      setScrollPosition(position);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 mb-4">
            TECH STACK
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-8 overflow-hidden pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {[...skillsData, ...skillsData].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{
                  y: -12,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                className="flex-shrink-0 cursor-hover group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-indigo-300 h-40 w-40 flex flex-col items-center justify-center">
                  <div className="mb-4 h-16 w-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 text-center tracking-tight">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute left-0 top-0 bottom-4 w-32 bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-4 w-32 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-sm font-semibold text-gray-500 uppercase tracking-widest"
        >
          Auto-scrolling showcase
        </motion.div>
      </motion.div>
    </section>
  );
};
