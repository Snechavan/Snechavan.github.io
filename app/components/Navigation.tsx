'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserLock, FaCode, FaPalette, FaBrush } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
import { useThemeMode } from './ThemeModeContext';

interface NavItem {
  name: string;
  href: string;
  icon?: IconType;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'Admin', href: '/admin', icon: FaUserLock }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { isPainterMode } = useThemeMode();

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems
        .filter(item => item.href.startsWith('#'))
        .map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (!href.startsWith('#')) return;
  
    const element = document.getElementById(href.substring(1));
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else {
      router.push(href);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
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
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeSection === item.href.substring(1)
                    ? isPainterMode
                      ? 'text-warm-coral'
                      : 'text-blue-500'
                    : isPainterMode
                      ? 'text-charcoal hover:text-warm-coral'
                      : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                {item.icon && <item.icon className="text-sm" />}
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isPainterMode
                ? 'text-charcoal hover:text-warm-coral'
                : 'text-slate-600 hover:text-blue-500'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden ${
            isPainterMode ? 'bg-white' : 'bg-slate-50'
          } shadow-lg`}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeSection === item.href.substring(1)
                      ? isPainterMode
                        ? 'text-warm-coral'
                        : 'text-blue-500'
                      : isPainterMode
                        ? 'text-charcoal hover:text-warm-coral'
                        : 'text-slate-600 hover:text-blue-500'
                  }`}
                >
                  {item.icon && <item.icon className="text-sm" />}
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 