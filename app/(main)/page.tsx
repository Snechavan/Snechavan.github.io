'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { useThemeMode } from '../components/ThemeModeContext';

export default function Home() {
  const { isPainterMode } = useThemeMode();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              isPainterMode ? 'text-charcoal' : 'text-white'
            }`}
          >
            Sneha Chavan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl md:text-2xl mb-8 ${
              isPainterMode ? 'text-charcoal/70' : 'text-gray-300'
            }`}
          >
            Full Stack Developer & Creative Coder
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                isPainterMode
                  ? 'bg-warm-coral/10 text-warm-coral hover:bg-warm-coral/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              } transition-colors`}
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                isPainterMode
                  ? 'bg-warm-coral/10 text-warm-coral hover:bg-warm-coral/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              } transition-colors`}
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className={`p-3 rounded-full ${
                isPainterMode
                  ? 'bg-warm-coral/10 text-warm-coral hover:bg-warm-coral/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              } transition-colors`}
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a
              href="/resume.pdf"
              download
              className={`p-3 rounded-full ${
                isPainterMode
                  ? 'bg-warm-coral/10 text-warm-coral hover:bg-warm-coral/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              } transition-colors`}
            >
              <FaFileDownload className="text-xl" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 