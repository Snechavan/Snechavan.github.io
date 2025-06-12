'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCode } from 'react-icons/fa';
import { useThemeMode } from './ThemeModeContext';

export default function ThemeToggle() {
  const { isPainterMode, toggleTheme } = useThemeMode();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: isPainterMode ? 0 : 5 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-3 z-50 
        transition-all duration-300 ${
          isPainterMode ? 'bg-gradient-to-r from-pink-500 to-yellow-400' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
        }`}
    >
      <AnimatePresence mode="wait">
        {isPainterMode ? (
          <motion.div
            key="paint"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <FaCode className="text-lg" />
            <span>Code Mode</span>
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <FaPalette className="text-lg" />
            <span>Painter Mode 🎨</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
