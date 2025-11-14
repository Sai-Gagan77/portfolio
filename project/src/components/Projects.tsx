import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Activity } from 'lucide-react';
import { useRef, useState } from 'react';
import { useParallax } from '../hooks/useParallax';

const projectsData = [
  {
    title: 'Skill Connect',
    description: 'Full stack web app with Spring Boot, React, MySQL. Real-time chat, service booking, QA for registration/login/booking/chat.',
    icon: Layers,
    tags: ['Spring Boot', 'React', 'MySQL'],
  },
  {
    title: 'Logistic Regression Mental Health Analysis',
    description: 'Python and Flask, EDA, ML classification, interactive dashboard for psychiatric data.',
    icon: Activity,
    tags: ['Python', 'Flask', 'Machine Learning'],
  },
];

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="projects" ref={ref} className="min-h-screen py-32 px-6 bg-dark relative">
      <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-secondary mb-4">
            PROJECTS
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"
          />
        </motion.div>

        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { y } = useParallax(50, ref);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const Icon = project.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 20,
        delay: index * 0.2,
      }}
      className="cursor-hover group"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className="relative bg-primary rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-secondary/20"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/50 via-transparent to-secondary/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: 'translateZ(10px)' }}
        />

        <div className="relative" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-8 h-8 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-normal text-secondary mb-4">
                {project.title}
              </h3>
              <p className="text-base font-light text-secondary/80 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-dark text-secondary text-sm font-light rounded-full border border-secondary/20 group-hover:bg-primary transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
