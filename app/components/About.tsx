'use client';

import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaBrain, FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaLightbulb, FaRocket, FaBrush, FaDatabase, FaServer, FaTerminal } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import ProfilePhoto from './ProfilePhoto';
import { useThemeMode } from './ThemeModeContext';

export default function About() {
  const { isPainterMode } = useThemeMode();

  const skills = [
    { name: 'Java & Advanced Java', icon: FaCode, level: 90 },
    { name: 'Frontend Development', icon: FaCode, level: 80 },
    { name: 'Problem Solving', icon: FaBrain, level: 80 }
  ];

  const techStack = [
    { icon: SiReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiTailwindcss, name: 'Tailwind' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/canvas-texture.svg')] opacity-3"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-50/30 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {isPainterMode ? (
          <>
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 left-10 text-3xl text-warm-coral/20"
            >
              <FaPalette />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-40 right-20 text-2xl text-warm-coral/20"
            >
              <FaBrush />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-40 left-20 text-2xl text-warm-coral/20"
            >
              <FaPalette />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-60 left-40 text-2xl text-warm-coral/20"
            >
              <FaBrush />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 left-10 text-3xl text-blue-500/20"
            >
              <FaCode />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-40 right-20 text-2xl text-blue-500/20"
            >
              <FaDatabase />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-40 left-20 text-2xl text-blue-500/20"
            >
              <FaServer />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-60 left-40 text-2xl text-blue-500/20"
            >
              <FaTerminal />
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
          {/* Header Section with Icons */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              {isPainterMode ? (
                <FaPalette className="text-3xl text-warm-coral" />
              ) : (
                <FaCode className="text-3xl text-blue-500" />
              )}
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-4xl md:text-5xl font-bold text-center font-playfair ${
                  isPainterMode ? 'text-charcoal' : 'text-slate-800'
                }`}
              >
                About Me
              </motion.h2>
              {isPainterMode ? (
                <FaPalette className="text-3xl text-warm-coral" />
              ) : (
                <FaCode className="text-3xl text-blue-500" />
              )}
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-center ${
                isPainterMode ? 'text-charcoal/80' : 'text-slate-600'
              } text-lg mb-4 max-w-2xl mx-auto`}
            >
              Where Code Meets Creativity
            </motion.p>
            
            {/* Tech Stack Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-4"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <tech.icon className="text-3xl text-slate-700 hover:text-blue-500 transition-colors" />
                  <span className="text-sm text-slate-600">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-12">
            {/* Profile Photo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-slate-50/40 rounded-full blur-xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/40 to-blue-50/40 rounded-full blur-xl transform rotate-6"></div>
              <div className="relative z-10">
                <ProfilePhoto />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-3xl space-y-8"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <FaRocket className={`text-3xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                  <h2 className={`text-4xl font-bold ${
                    isPainterMode ? 'text-charcoal' : 'text-slate-800'
                  }`}>
                    My Journey
                  </h2>
                  <FaRocket className={`text-3xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                </div>
                <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                  I'm a passionate developer who sees code as a canvas for creativity. With a strong foundation in both 
                  technical and artistic principles, I bring a unique perspective to every project.
                </p>
                
                <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                  My journey in technology has been driven by a desire to create meaningful solutions that not only 
                  function flawlessly but also delight users with their design and interaction.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-4">
                {[
                  { name: "Java & Advanced Java", level: 85 },
                  { name: "Frontend Development", level: 80 },
                  { name: "c++", level: 89 },
                  { name: "Innovation", level: 90 }
                ].map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="flex justify-between">
                      <motion.span 
                        className={`text-sm font-medium ${
                          isPainterMode ? 'text-charcoal' : 'text-slate-700'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className={`text-sm ${
                          isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2,
                          delay: index * 0.2 + 0.2,
                          ease: "easeOut"
                        }}
                        className={`h-full rounded-full ${
                          isPainterMode ? 'bg-warm-coral' : 'bg-blue-500'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center gap-6 pt-4"
              >
                <a
                  href="https://github.com/Snechavan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-500 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sneha-chavan-789181250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:snchavan1515@gmail.com"
                  className="text-slate-700 hover:text-blue-500 transition-colors"
                >
                  <FaEnvelope size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}