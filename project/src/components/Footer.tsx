import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-sm font-light text-gray-500">
          © {new Date().getFullYear()} Kota Venkata Sai Gagan. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};
