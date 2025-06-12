'use client';

import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaLaptopCode, FaPaintBrush, FaBrush } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useThemeMode } from './ThemeModeContext';

interface FloatingElementProps {
  icon: IconType;
  text: string;
  color: string;
  delay: number;
  position: { x: number; y: number };
}

export default function ThemeAnimation() {
  const { isPainterMode } = useThemeMode();

  const floatingElements: FloatingElementProps[] = [
    {
      icon: isPainterMode ? FaPalette : FaCode,
      text: isPainterMode ? 'design()' : 'function()',
      color: isPainterMode ? '#FF6B6B' : '#4ECDC4',
      delay: 0,
      position: { x: -20, y: -10 }
    },
    {
      icon: isPainterMode ? FaBrush : FaLaptopCode,
      text: isPainterMode ? 'class Art' : 'const create',
      color: isPainterMode ? '#4ECDC4' : '#FFE66D',
      delay: 0.2,
      position: { x: 20, y: 10 }
    },
    {
      icon: isPainterMode ? FaPalette : FaCode,
      text: isPainterMode ? 'paint()' : 'code()',
      color: isPainterMode ? '#FFE66D' : '#FF6B6B',
      delay: 0.4,
      position: { x: 0, y: -20 }
    },
    {
      icon: isPainterMode ? FaBrush : FaLaptopCode,
      text: isPainterMode ? 'create()' : 'build()',
      color: isPainterMode ? '#FF6B6B' : '#4ECDC4',
      delay: 0.6,
      position: { x: -15, y: 15 }
    }
  ];

  const FloatingElement = ({ icon: Icon, text, color, delay, position }: FloatingElementProps) => {
    return (
      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: position.x,
          y: position.y,
        }}
        transition={{
          duration: 2,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${color}20, ${color}40)`,
              boxShadow: `0 4px 20px ${color}30`
            }}
          >
            <Icon className="text-3xl" style={{ color }} />
          </div>
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 }}
          >
            <span className="text-sm font-mono" style={{ color }}>
              {text}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-soft-cream/50 to-white/50 backdrop-blur-sm" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/canvas-texture.svg')] opacity-5" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-warm-coral/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-warm-coral/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Floating Elements */}
      <div className="relative w-full h-full">
        {floatingElements.map((element, index) => (
          <FloatingElement key={index} {...element} />
        ))}
      </div>
    </div>
  );
} 