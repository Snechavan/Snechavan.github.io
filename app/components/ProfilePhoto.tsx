'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useThemeMode } from './ThemeModeContext';

export default function ProfilePhoto() {
  const { isPainterMode } = useThemeMode();
  const codeSymbols = [
    { symbol: '</>', size: 'text-3xl', weight: 'font-bold' },
    { symbol: '{}', size: 'text-2xl', weight: 'font-bold' },
    { symbol: '()', size: 'text-2xl', weight: 'font-bold' },
    { symbol: '[]', size: 'text-2xl', weight: 'font-bold' },
    { symbol: '=>', size: 'text-xl', weight: 'font-semibold' },
    { symbol: ';', size: 'text-xl', weight: 'font-semibold' },
    { symbol: 'const', size: 'text-base', weight: 'font-medium' },
    { symbol: 'let', size: 'text-base', weight: 'font-medium' },
    { symbol: 'fn', size: 'text-base', weight: 'font-medium' },
    { symbol: 'if', size: 'text-base', weight: 'font-medium' },
    { symbol: 'for', size: 'text-base', weight: 'font-medium' },
    { symbol: 'while', size: 'text-base', weight: 'font-medium' }
  ];

  return (
    <motion.div 
      className="relative w-48 h-48 mx-auto mb-8"
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      {/* Code symbols background */}
      <div className="absolute -inset-16 overflow-visible">
        {codeSymbols.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute font-mono tracking-wider ${
              item.size
            } ${
              item.weight
            } ${
              isPainterMode 
                ? 'text-rose-400/70' 
                : 'text-slate-400/70'
            }`}
            style={{
              left: `${5 + (i % 4) * 30}%`,
              top: `${5 + Math.floor(i / 4) * 30}%`,
              transform: `rotate(${Math.random() * 8 - 4}deg)`,
              textShadow: isPainterMode
                ? '0 0 8px rgba(251, 113, 133, 0.3)'
                : '0 0 8px rgba(148, 163, 184, 0.3)'
            }}
            animate={{
              y: [0, -3, 0],
              opacity: [0.7, 0.9, 0.7],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* Decorative circles */}
      <motion.div
        className="absolute -inset-3 rounded-full border border-slate-200/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute -inset-2 rounded-full border border-slate-200/20"
        animate={{
          rotate: [360, 0],
          scale: [1.02, 1, 1.02],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main photo container */}
      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src="/me.jpg"
          alt="Profile Photo"
          fill
          sizes="(max-width: 768px) 100vw, 256px"
          className={`object-cover transition-all duration-500 ${
            isPainterMode 
              ? 'filter sepia-30 saturate-120' 
              : 'filter grayscale-30 contrast-110'
          }`}
          style={{
            filter: isPainterMode 
              ? 'sepia(0.3) saturate(1.2)' 
              : 'grayscale(0.3) contrast(1.1)'
          }}
        />
      </div>
      
      {/* Interactive glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isPainterMode
            ? [
                '0 0 15px rgba(255, 182, 193, 0.3)',
                '0 0 30px rgba(255, 182, 193, 0.4)',
                '0 0 15px rgba(255, 182, 193, 0.3)'
              ]
            : [
                '0 0 15px rgba(148, 163, 184, 0.3)',
                '0 0 30px rgba(148, 163, 184, 0.4)',
                '0 0 15px rgba(148, 163, 184, 0.3)'
              ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute -inset-4"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-slate-200/40"
            style={{
              left: `${50 + 40 * Math.cos(i * Math.PI / 3)}%`,
              top: `${50 + 40 * Math.sin(i * Math.PI / 3)}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
} 