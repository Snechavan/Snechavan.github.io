'use client';

import { motion } from 'framer-motion';
import { useThemeMode } from './ThemeModeContext';
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaCalendarAlt,
  FaBuilding,
  FaPalette,
  FaBrush,
  FaHeart,
  FaJava,
  FaPython,
  FaReact,
} from 'react-icons/fa';

const Projects = () => {
  const { isPainterMode } = useThemeMode();

  const projects = [
    {
      title: '🏨 Hotel Management System',
      period: 'June 2023 – July 2023',
      company: 'Globeminds Technologies',
      description:
        'A complete hotel operations platform with room booking, guest management, check-in/out, and billing. Designed to simplify hotel workflow and improve guest experiences.',
      techStack: ['Advanced Java', 'Core Java', 'Java Swing', 'HeidiSQL', 'DBMS'],
    },
    {
      title: '🌍 Land Registry System (Blockchain DApp)',
      description:
        "A decentralized platform for maintaining secure, tamper-proof land ownership records. Uses blockchain's immutability and decentralization to streamline ownership transfer.",
      techStack: ['HTML', 'Solidity', 'Node.js', 'Truffle', 'Ganache'],
    },
    {
      title: '🤖 AlgoMiner – Machine Learning Toolkit',
      description:
        'A desktop-based application that implements and visualizes major ML algorithms including: KNN, K-Means Clustering, Decision Tree, Random Forest, and SVM.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Tkinter'],
    },
  ];

  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${
      isPainterMode ? 'bg-gradient-to-br from-soft-cream to-white' : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      {/* 3D Floating Elements Container */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {isPainterMode ? (
          // Painter Mode Elements
          <>
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 8, 0],
                rotateX: [0, 15, 0],
                rotateY: [0, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-1/4 text-5xl text-warm-coral/40 transform-gpu"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <FaPalette className="transform hover:scale-110 transition-transform drop-shadow-lg" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 25, 0],
                x: [0, -15, 0],
                rotate: [0, -8, 0],
                rotateX: [0, -15, 0],
                rotateY: [0, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 right-1/4 text-4xl text-warm-coral/40 transform-gpu"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <FaBrush className="transform hover:scale-110 transition-transform drop-shadow-lg" />
            </motion.div>
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
          </>
        ) : (
          // Coder Mode Elements
          <>
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 8, 0],
                rotateX: [0, 15, 0],
                rotateY: [0, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-1/4 text-5xl text-slate-400/50 transform-gpu"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <FaJava className="transform hover:scale-110 transition-transform drop-shadow-lg" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 25, 0],
                x: [0, -15, 0],
                rotate: [0, -8, 0],
                rotateX: [0, -15, 0],
                rotateY: [0, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 right-1/4 text-4xl text-slate-400/50 transform-gpu"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <FaPython className="transform hover:scale-110 transition-transform drop-shadow-lg" />
            </motion.div>
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
              className="absolute bottom-1/4 left-1/3 text-4xl text-slate-400/50 transform-gpu"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <FaReact className="transform hover:scale-110 transition-transform drop-shadow-lg" />
            </motion.div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              {isPainterMode ? (
                <FaPalette className="text-3xl text-warm-coral" />
              ) : (
                <FaCode className="text-3xl text-blue-500" />
              )}
              <h2 className={`text-4xl font-bold ${
                isPainterMode ? 'text-charcoal' : 'text-slate-800'
              }`}>
                My Code Gallery
              </h2>
              {isPainterMode ? (
                <FaPalette className="text-3xl text-warm-coral" />
              ) : (
                <FaCode className="text-3xl text-blue-500" />
              )}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-center mb-12 max-w-2xl mx-auto ${
                isPainterMode ? 'text-charcoal/80' : 'text-slate-600'
              }`}
            >
              Each project is like an artwork — built with precision, creativity, and purpose.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const firstChar = project.title.charAt(0);
              const isEmoji = firstChar.length > 1; // Emojis are typically 2 characters long
              const cleanTitle = isEmoji ? project.title.slice(2).trim() : project.title;
              const showJavaIcon = project.techStack.some(tech => tech.toLowerCase().includes('java'));
              const showBlockchainIcon = project.techStack.some(tech => tech.toLowerCase().includes('blockchain') || tech.toLowerCase().includes('solidity'));
              const showMLIcon = project.techStack.some(tech => tech.toLowerCase().includes('python') || tech.toLowerCase().includes('ml'));

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`group p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl transform-gpu backdrop-blur-sm ${
                    isPainterMode
                      ? 'bg-white/90 border border-warm-coral/30 text-charcoal'
                      : 'bg-white/90 border border-blue-500/30 text-slate-800'
                  }`}
                  style={{ perspective: '1000px' }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-50'
                    }`}
                  >
                    {showJavaIcon && <FaServer className={`text-2xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />}
                    {showBlockchainIcon && <FaDatabase className={`text-2xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />}
                    {showMLIcon && <FaLaptopCode className={`text-2xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />}
                  </motion.div>

                  {/* Title with neat emoji */}
                  <h3 className={`text-xl font-semibold mb-2 flex items-center ${
                    isPainterMode ? 'text-charcoal' : 'text-slate-800'
                  }`}>
                    {isEmoji && (
                      <span
                        role="img"
                        aria-hidden="true"
                        className="inline-block mr-2 text-lg leading-none"
                        style={{ lineHeight: 1 }}
                      >
                        {firstChar}
                      </span>
                    )}
                    {cleanTitle}
                  </h3>

                  {/* Meta Info */}
                  {project.period && (
                    <div className={`flex items-center gap-3 mb-4 text-sm ${
                      isPainterMode ? 'text-charcoal/70' : 'text-slate-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className={isPainterMode ? 'text-warm-coral' : 'text-blue-500'} />
                        <span>{project.period}</span>
                      </div>
                      {project.company && (
                        <>
                          <span className={isPainterMode ? 'text-charcoal/30' : 'text-slate-300'}>|</span>
                          <div className="flex items-center gap-1">
                            <FaBuilding className={isPainterMode ? 'text-warm-coral' : 'text-blue-500'} />
                            <span>{project.company}</span>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <p className={`mb-4 text-sm ${
                    isPainterMode ? 'text-charcoal/80' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isPainterMode
                            ? 'bg-warm-coral/10 text-warm-coral'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Common GitHub Button */}
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/Snechavan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-6 py-3 font-semibold rounded-lg shadow transition-colors duration-300 ${
                isPainterMode
                  ? 'bg-warm-coral text-charcoal hover:bg-warm-coral/90'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              View More Projects on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
