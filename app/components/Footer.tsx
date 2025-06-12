'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaFileDownload, FaBriefcase, FaComments, FaHeart, FaCode, FaPalette } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useThemeMode } from './ThemeModeContext';
import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
  icon?: IconType;
  download?: boolean;
}

export default function Footer() {
  const { isPainterMode } = useThemeMode();
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/#about' },
      { name: 'Projects', href: '/#projects' },
      { name: 'Contact', href: '/#contact' },
    ],
    'Resources': [
      { 
        name: 'Resume', 
        href: '/resume/Sneha R.pdf',
        icon: FaFileDownload,
        download: true 
      },
      { 
        name: 'CodeCanvas', 
        href: '/',
        icon: FaBriefcase
      },
      { 
        name: 'Testimonials', 
        href: '/#testimonials',
        icon: FaComments
      },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Snechavan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sneha-chavan-789181250', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:snchavan1515@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`relative overflow-hidden ${
      isPainterMode ? 'bg-soft-cream' : 'bg-slate-900'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 text-4xl text-white/20"
        >
          <FaCode />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 text-4xl text-white/20"
        >
          <FaCode />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 text-4xl text-white/20"
        >
          <FaPalette />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className={`p-2 rounded-lg ${
                isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-500/10'
              }`}>
                <FaCode className={`text-2xl ${
                  isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                }`} />
              </div>
              <h3 className={`text-xl font-bold ${
                isPainterMode ? 'text-charcoal' : 'text-white'
              }`}>
                Sneha Chavan
              </h3>
            </motion.div>
            <p className={`text-sm ${
              isPainterMode ? 'text-charcoal/70' : 'text-gray-400'
            }`}>
              A Developer with an Artistic Eye for Code
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className={`text-lg font-semibold ${
                isPainterMode ? 'text-charcoal' : 'text-white'
              }`}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-sm transition-colors ${
                        isPainterMode
                          ? 'text-charcoal/70 hover:text-warm-coral'
                          : 'text-gray-400 hover:text-blue-400'
                      }`}
                      download={link.download}
                    >
                      <div className="flex items-center gap-2">
                        {link.icon && <link.icon className="text-lg" />}
                        {link.name}
                      </div>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full transition-colors ${
                isPainterMode
                  ? 'bg-warm-coral/10 hover:bg-warm-coral/20 text-warm-coral'
                  : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'
              }`}
              aria-label={social.label}
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-center text-sm ${
            isPainterMode ? 'text-charcoal/60' : 'text-gray-500'
          }`}
        >
          <p>
            © {currentYear} Sneha Chavan. All rights reserved.
          </p>
          <p className="mt-2">
            Made with <FaCode className="inline text-blue-500 mx-1" /> and{' '}
            <FaPalette className="inline text-warm-coral mx-1" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 