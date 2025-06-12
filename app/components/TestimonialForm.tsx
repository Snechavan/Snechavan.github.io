'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaStar, FaSpinner, FaCheck, FaExclamationTriangle, FaQuoteLeft,  FaThumbsUp, FaAward, FaCheckCircle,
  FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
  FaComments, FaHandshake, FaSmile, FaLightbulb,  FaChartLine, FaMedal, FaShareAlt, FaPalette, FaBrush
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { useThemeMode } from './ThemeModeContext';
import Image from 'next/image';

export default function TestimonialForm() {
  const { isPainterMode } = useThemeMode();
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (submitStatus === 'success' && formRef.current) {
      const timer = setTimeout(() => setSubmitStatus('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const testimonialData = {
        name: formData.get('name'),
        email: formData.get('email'),
        rating: parseInt(formData.get('rating') as string),
        comment: formData.get('comment')
      };

      // Store in database
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testimonialData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit testimonial');
      }

      setSubmitStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageLoad = () => setIsImageLoaded(true);

  return (
    <section
      id="testimonials"
      className={`py-20 relative overflow-hidden ${
      isPainterMode ? 'bg-gradient-to-br from-soft-cream to-white' : 'bg-gradient-to-br from-slate-50 to-white'
      }`}
    >
      {/* Floating Background Symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Java */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[10%] left-[10%] text-4xl text-blue-500/20"
        >
          <FaJava />
        </motion.div>

        {/* Python */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[20%] right-[15%] text-4xl text-yellow-500/20"
        >
          <FaPython />
        </motion.div>

        {/* React */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[40%] left-[20%] text-4xl text-blue-400/20"
        >
          <FaReact />
        </motion.div>

        {/* TypeScript */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[60%] right-[25%] text-4xl text-blue-600/20"
        >
          <SiTypescript />
        </motion.div>

        {/* Node.js */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[70%] left-[15%] text-4xl text-green-500/20"
        >
          <FaNodeJs />
        </motion.div>

        {/* Database */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[30%] right-[30%] text-4xl text-purple-500/20"
        >
          <FaDatabase />
        </motion.div>

        {/* HTML5 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[50%] left-[35%] text-4xl text-orange-500/20"
        >
          <FaHtml5 />
        </motion.div>

        {/* CSS3 */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[80%] right-[20%] text-4xl text-blue-500/20"
        >
          <FaCss3Alt />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[25%] left-[40%] text-4xl text-yellow-500/20"
        >
          <FaJs />
        </motion.div>

        {/* Git */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[65%] right-[35%] text-4xl text-orange-600/20"
        >
          <FaGitAlt />
        </motion.div>

        {/* Next.js */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[45%] left-[30%] text-4xl text-black/20"
        >
          <SiNextdotjs />
        </motion.div>

        {/* Tailwind */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[85%] left-[25%] text-4xl text-cyan-500/20"
        >
          <SiTailwindcss />
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <FaQuoteLeft className="text-4xl text-blue-500" />
              <h2 className={`text-4xl font-bold ${isPainterMode ? 'text-charcoal' : 'text-slate-800'}`}>
                Share Your Experience
              </h2>
              <FaQuoteLeft className="text-4xl text-blue-500 rotate-180" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-lg max-w-2xl mx-auto ${isPainterMode ? 'text-charcoal/70' : 'text-slate-600'}`}
            >
              Let others know about your experience working with me. Your feedback helps me grow and improve.
            </motion.p>
          </div>
    
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl group"
            >
              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full filter blur-3xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full filter blur-3xl animate-float-delayed"></div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 text-blue-400/80 animate-float"
              >
                <FaStar className="text-4xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 text-purple-400/80 animate-float-delayed"
              >
                <FaQuoteLeft className="text-4xl" />
              </motion.div>
                <Image
                  src="/images/test.png"
                  alt="Share Your Experience"
                  fill
                onLoad={handleImageLoad}
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              {!isImageLoaded && <div className="absolute inset-0 bg-gray-100 animate-pulse" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                    <motion.h3 
                  className="text-3xl font-bold mb-3"
                      whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Your Voice Matters
                    </motion.h3>
                <p className="text-white/90 text-lg mb-4">
                      Share your thoughts and help others discover the value of working together.
                    </p>
                <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="text-2xl text-yellow-400" />
                        ))}
                      </div>
                  <span className="text-white/90 text-base">Join our community</span>
                </div>
              </div>
            </motion.div>

            {/* Form Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col justify-center"
            >
              {/* Floating decorative icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-4 left-4 text-blue-400/30 text-7xl pointer-events-none select-none"
              >
                <FaStar />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-4 right-6 text-purple-400/30 text-8xl pointer-events-none select-none"
              >
                <FaQuoteLeft />
              </motion.div>

              {/* Additional floating icons */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/4 right-1/4 text-blue-400/20 text-5xl pointer-events-none select-none"
              >
                <FaComments />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-1/4 left-1/4 text-purple-400/20 text-5xl pointer-events-none select-none"
              >
                
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  x: [0, 12, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 7.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/3 left-1/3 text-blue-400/20 text-4xl pointer-events-none select-none"
              >
                <FaHandshake />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  x: [0, -12, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 6.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-1/3 right-1/3 text-purple-400/20 text-4xl pointer-events-none select-none"
              >
                <FaSmile />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                  rotate: [0, 6, 0],
                }}
                transition={{
                  duration: 7.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-2/3 left-2/3 text-blue-400/20 text-5xl pointer-events-none select-none"
              >
                <FaLightbulb />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: [0, -10, 0],
                  rotate: [0, -6, 0],
                }}
                transition={{
                  duration: 6.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-2/3 right-2/3 text-purple-400/20 text-5xl pointer-events-none select-none"
              >
                
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 8, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 7.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-3/4 left-1/4 text-blue-400/20 text-4xl pointer-events-none select-none"
              >
                <FaChartLine />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  x: [0, -8, 0],
                  rotate: [0, -4, 0],
                }}
                transition={{
                  duration: 7.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-1/4 right-1/4 text-purple-400/20 text-4xl pointer-events-none select-none"
              >
                <FaMedal />
              </motion.div>

              {/* Background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-100/40 via-purple-100/20 to-transparent pointer-events-none -z-10" />

              <div className="flex items-center gap-4 mb-8">
                <FaAward className={`text-5xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                <h3 className={`text-4xl font-bold ${isPainterMode ? 'text-charcoal' : 'text-slate-800'}`}>
                Send Your Testimonial
              </h3>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <FaShareAlt className={`text-2xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                <p className={`text-xl ${isPainterMode ? 'text-charcoal' : 'text-slate-800'}`}>
                  Share Your Experience
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full relative z-10">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-5 rounded-xl bg-green-50 text-green-700"
                    >
                      <div className="flex items-center gap-3">
                        <FaCheck className="text-xl text-green-500" />
                        <span className="text-lg">Thank you for your testimonial!</span>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-5 rounded-xl bg-red-50 text-red-700"
                    >
                      <div className="flex items-center gap-3">
                        <FaExclamationTriangle className="text-xl text-red-500" />
                        <span className="text-lg">{errorMessage}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 cursor-text">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className={`w-full px-5 py-3 rounded-xl border transition ${
                      isPainterMode
                        ? 'bg-white border-warm-coral/30 text-charcoal focus:border-warm-coral focus:ring-warm-coral/20'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-slate-700 focus:ring-slate-700/20'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                  {/* Email */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 cursor-text">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`w-full px-5 py-3 rounded-xl border transition ${
                      isPainterMode
                        ? 'bg-white border-warm-coral/30 text-charcoal focus:border-warm-coral focus:ring-warm-coral/20'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-slate-700 focus:ring-slate-700/20'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                </div>

                {/* Role */}
                <div className="relative">
                  <label htmlFor="role" className="block text-sm font-medium mb-2 cursor-text">
                    Your Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    required
                    placeholder="e.g., Developer, Designer"
                    className={`w-full px-5 py-3 rounded-xl border transition ${
                      isPainterMode
                        ? 'bg-white border-warm-coral/30 text-charcoal focus:border-warm-coral focus:ring-warm-coral/20'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-slate-700 focus:ring-slate-700/20'
                    }`}
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <span className={`font-medium ${isPainterMode ? 'text-charcoal' : 'text-slate-700'}`}>
                    Your Rating:
                  </span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        aria-label={`${star} star${star > 1 ? 's' : ''}`}
                        className={`text-3xl cursor-pointer transition-colors ${
                          rating >= star 
                            ? isPainterMode
                              ? 'text-warm-coral drop-shadow-lg' 
                              : 'text-slate-700 drop-shadow-lg'
                            : isPainterMode
                              ? 'text-warm-coral/30 hover:text-warm-coral/50'
                              : 'text-slate-300 hover:text-slate-400'
                        }`}
                      >
                        <FaStar />
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="rating" value={rating} />
                </div>

                {/* Comment */}
                <div className="relative">
                  <label htmlFor="comment" className="block text-sm font-medium mb-2 cursor-text">
                    Your Testimonial
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    required
                    rows={4}
                    className={`w-full px-5 py-3 rounded-xl border transition resize-none ${
                      isPainterMode
                        ? 'bg-white border-warm-coral/30 text-charcoal focus:border-warm-coral focus:ring-warm-coral/20'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-slate-700 focus:ring-slate-700/20'
                    }`}
                    placeholder="Write your feedback here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 w-full flex justify-center items-center gap-3 rounded-xl font-semibold py-4 transition disabled:opacity-50 disabled:cursor-not-allowed ${
                    isPainterMode
                      ? 'bg-warm-coral hover:bg-warm-coral/90 text-charcoal shadow-lg hover:shadow-warm-coral/20'
                      : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <FaSpinner className="animate-spin text-xl" />
                  ) : (
                    <FaCheck className="text-xl" />
                  )}
                  Send Testimonial
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
