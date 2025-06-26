'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCode, FaBars, FaTimes, FaMoon, FaSun, FaPalette, FaLaptopCode, FaBrush, FaTerminal } from 'react-icons/fa';
import { useThemeMode } from './ThemeModeContext';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Certifications', href: '/#certifications' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isPainterMode, toggleTheme } = useThemeMode();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isPainterMode
            ? 'bg-cream/80 backdrop-blur-md shadow-lg'
            : 'bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {isPainterMode ? (
          // Painter Mode Elements
          <>
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-20 text-2xl text-warm-coral/20"
            >
              <FaPalette />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 left-20 text-2xl text-warm-coral/20"
            >
              <FaBrush />
            </motion.div>
          </>
        ) : (
          // Coder Mode Elements
          <>
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-20 text-2xl text-blue-500/20"
            >
              <FaLaptopCode />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 left-20 text-2xl text-blue-500/20"
            >
              <FaTerminal />
            </motion.div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`relative w-10 h-10 rounded-lg flex items-center justify-center ${
                    isPainterMode 
                      ? 'bg-warm-coral/10 text-warm-coral' 
                      : 'bg-blue-500/10 text-blue-500'
                  }`}
                >
                  {isPainterMode ? (
                    <FaPalette className="text-2xl" />
                  ) : (
                    <FaCode className="text-2xl" />
                  )}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center ${
                      isPainterMode 
                        ? 'bg-warm-coral text-white' 
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    <FaBrush className="text-xs" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="flex flex-col">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xl font-bold ${
                    isPainterMode ? 'text-charcoal' : 'text-slate-800'
                  }`}
                >
                  CodeCanvas
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`text-xs ${
                    isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                  }`}
                >
                  {isPainterMode ? 'Where Art Meets Code' : 'Where Code Meets Art'}
                </motion.span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-2 ${
            isPainterMode 
              ? 'bg-cream/90 shadow-lg' 
              : 'bg-gray-800/90 shadow-lg'
          } backdrop-blur-md px-4 py-2 rounded-full`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isPainterMode
                    ? isActive(item.href)
                      ? 'bg-warm-coral text-white shadow-lg shadow-warm-coral/20'
                      : 'text-charcoal hover:bg-warm-coral/10 hover:text-warm-coral'
                    : isActive(item.href)
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'text-gray-200 hover:bg-blue-500/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-full ${
                isPainterMode
                  ? 'bg-warm-coral/10 text-warm-coral hover:bg-warm-coral/20'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              }`}
            >
              {isPainterMode ? <FaCode /> : <FaPalette />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <FaTimes
                className={`text-xl ${
                  isPainterMode ? 'text-charcoal' : 'text-white'
                }`}
              />
            ) : (
              <FaBars
                className={`text-xl ${
                  isPainterMode ? 'text-charcoal' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              isPainterMode ? 'bg-cream' : 'bg-gray-900'
            }`}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-sm font-medium ${
                    isPainterMode
                      ? isActive(item.href)
                        ? 'text-warm-coral'
                        : 'text-charcoal hover:text-warm-coral'
                      : isActive(item.href)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center py-2 text-sm font-medium ${
                  isPainterMode
                    ? 'text-charcoal hover:text-warm-coral'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {isPainterMode ? 'Switch to Coder Mode' : 'Switch to Painter Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}