import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none pt-6"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 4px 16px rgba(0, 0, 0, 0.05)',
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-auto bg-white/80 backdrop-blur-2xl rounded-full px-8 py-4 shadow-lg border border-white/20"
      >
        <div className="flex justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter" style={{ fontFamily: "'Courier New', monospace" }}>
                SG
              </span>
            </div>
            <span className="font-black text-sm tracking-tighter hidden sm:inline text-gray-900">
              KOTA
            </span>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-8 items-center"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.08, type: 'spring', stiffness: 200 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-semibold tracking-wide text-gray-700 hover:text-indigo-600 transition-colors duration-300 relative group uppercase"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>
    </motion.header>
  );
};
