import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useRef, useState } from 'react';

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/kotagagan87@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-32 px-6 bg-white relative">
      <motion.div style={{ opacity }} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 mb-4">
            GET IN TOUCH
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8"
          />
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 group cursor-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm font-light text-gray-500">Email</p>
                <a
                  href="mailto:kotagagan87@gmail.com"
                  className="text-base font-normal text-gray-900 hover:text-blue-600 transition-colors duration-300"
                >
                  kotagagan87@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm font-light text-gray-500">Phone</p>
                <p className="text-base font-normal text-gray-900">Available on request</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm font-light text-gray-500">LinkedIn</p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal text-gray-900 hover:text-blue-600 transition-colors duration-300"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300 font-light shadow-sm"
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300 font-light shadow-sm"
              />
            </div>

            <div>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300 font-light resize-none shadow-sm"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl font-light tracking-wide hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-hover"
            >
              {isSubmitting ? (
                'Sending...'
              ) : submitStatus === 'success' ? (
                'Sent Successfully!'
              ) : submitStatus === 'error' ? (
                'Failed to Send'
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};
