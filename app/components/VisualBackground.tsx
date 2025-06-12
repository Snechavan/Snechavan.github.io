'use client';

import { useThemeMode } from './ThemeModeContext';
import { motion } from 'framer-motion';

export default function VisualBackground() {
  const { isPainterMode } = useThemeMode();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500 ease-in-out pointer-events-none">
      {isPainterMode ? (
        <div className="w-full h-full bg-gradient-to-br from-yellow-100 via-pink-100 to-rose-200 animate-fade-in">
          {/* Painter Mode Elements */}
          <motion.div
            className="absolute w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-50 top-20 left-10"
            animate={{ y: [0, 30, 0], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-40 bottom-20 right-16"
            animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <motion.div
            className="absolute w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-30 top-1/2 left-1/3"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          {/* Creative Code Hints */}
          <motion.p
            className="absolute text-xs font-mono text-rose-400 top-1/2 left-1/3 opacity-60 rotate-12"
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            {'const createArt = () => \'🎨\''}
          </motion.p>
          <motion.p
            className="absolute text-xs font-mono text-blue-400 bottom-1/4 right-1/4 opacity-60 -rotate-12"
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            paintCanvas.draw();
          </motion.p>
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-lime-300 animate-fade-in">
          {/* Code Mode Elements */}
          <motion.div
            className="absolute text-green-400 font-mono text-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            style={{ top: '20%', left: '10%' }}
          >
            {'{ code: "elegant" }'}
          </motion.div>
          <motion.div
            className="absolute text-cyan-400 font-mono text-sm"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            style={{ top: '60%', right: '15%' }}
          >
            {'interface Props { cool: boolean }'}
          </motion.div>
          <motion.div
            className="absolute text-indigo-400 font-mono text-xs opacity-50"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            style={{ bottom: '10%', left: '30%' }}
          >
            console.log('Code mode on!')
          </motion.div>
          <motion.div
            className="absolute text-purple-400 font-mono text-sm"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
            style={{ top: '40%', right: '30%' }}
          >
            function awesome() {'{'}
          </motion.div>
          <motion.div
            className="absolute text-yellow-400 font-mono text-xs"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            style={{ bottom: '30%', left: '20%' }}
          >
            npm install creativity
          </motion.div>
        </div>
      )}
    </div>
  );
} 