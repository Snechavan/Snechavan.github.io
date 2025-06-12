'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaCode, FaPalette, FaBrush, FaTerminal, FaLaptopCode, FaComments, FaUserCheck, FaHandshake, FaSmile, FaRocket, FaChartLine, FaMedal, FaThumbsUp, FaAward, FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { useThemeMode } from './ThemeModeContext';

interface Testimonial {
  id: number;
  name: string;
  email: string;
  message: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export default function Testimonials() {
  const { isPainterMode } = useThemeMode();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        // Only show approved testimonials on the public page
        setTestimonials(data.filter((t: Testimonial) => t.status === 'approved'));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load testimonials');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return (
      <section id="testimonials" className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-warm-coral"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="min-h-[400px] flex items-center justify-center relative overflow-hidden">
        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 12, 0],
              rotate: [0, 5, 0],
              rotateX: [0, 10, 0],
              rotateY: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/3 text-4xl text-warm-coral/40 transform-gpu"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            <FaBrush className="transform hover:scale-110 transition-transform drop-shadow-lg" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, -12, 0],
              rotate: [0, -5, 0],
              rotateX: [0, -10, 0],
              rotateY: [0, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 right-1/3 text-5xl text-warm-coral/40 transform-gpu"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            <FaPalette className="transform hover:scale-110 transition-transform drop-shadow-lg" />
          </motion.div>
        </div>

        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <FaCode className={`text-4xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
            <p className={`text-xl ${isPainterMode ? 'text-charcoal/70' : 'text-slate-600'}`}>
              No testimonials yet. Be the first to share your experience!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-coral/5 to-blue-500/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            {isPainterMode ? (
              <FaPalette className="text-3xl text-warm-coral" />
            ) : (
              <FaCode className="text-3xl text-blue-500" />
            )}
            <h2 className={`text-4xl md:text-5xl font-bold ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`}>
              Testimonials
            </h2>
            {isPainterMode ? (
              <FaPalette className="text-3xl text-warm-coral" />
            ) : (
              <FaCode className="text-3xl text-blue-500" />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-4"
          >
            <div className={`p-3 rounded-full ${
              isPainterMode 
                ? 'bg-warm-coral/10 text-warm-coral' 
                : 'bg-blue-500/10 text-blue-500'
            }`}>
              <FaComments className="text-2xl" />
            </div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            What people say about working with me
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group ${
                isPainterMode 
                  ? 'bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800' 
                  : 'bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800'
              } rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}
            >
              <div className={`absolute -top-4 left-8 text-4xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`}>
                <FaQuoteLeft />
              </div>
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {testimonial.message}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.email}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        className={`text-sm ${
                          i < testimonial.rating 
                            ? (isPainterMode ? 'text-warm-coral' : 'text-blue-500')
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 12, 0],
            rotate: [0, 5, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/3 text-4xl text-warm-coral/20 transform-gpu"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          <FaBrush className="transform hover:scale-110 transition-transform drop-shadow-lg" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -12, 0],
            rotate: [0, -5, 0],
            rotateX: [0, -10, 0],
            rotateY: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-1/3 text-5xl text-warm-coral/20 transform-gpu"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          <FaPalette className="transform hover:scale-110 transition-transform drop-shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
} 