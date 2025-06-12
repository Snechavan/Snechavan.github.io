'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaProjectDiagram, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaPalette, FaBrush } from 'react-icons/fa';
import Image from 'next/image';
import { useThemeMode } from './ThemeModeContext';

const experiences = [
  {
    title: "Intern",
    company: "Globeminds Technologies",
    location: "Pune, Maharashtra",
    period: "June 2023 – July 2023",
    icon: FaBriefcase,
    image: "/image1.png",
    achievements: [
      "Developed Java-based applications using Core & Advanced Java",
      "Solved real-world problems using modular, efficient code",
      "Led a small intern team, enhancing leadership and communication skills",
      "Delivered a functioning hotel management system as a collaborative project"
    ],
    skills: ["Java", "Core Java", "Advanced Java", "Team Leadership", "Problem Solving"]
  }
];

export default function Experience() {
  const { isPainterMode } = useThemeMode();

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/canvas-texture.svg')] opacity-3"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/30 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50/30 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                Professional Journey
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
              My path of growth and achievements in the tech industry
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Experience Cards */}
            <div className="space-y-6 lg:pr-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow h-[550px] flex flex-col relative overflow-hidden"
                >
                  {/* Floating Symbols */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Top Row */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                        rotate: [0, 3, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute top-4 right-4 text-2xl ${
                        isPainterMode ? 'text-warm-coral/20' : 'text-blue-500/20'
                      }`}
                    >
                      {isPainterMode ? <FaPalette /> : <FaCode />}
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        x: [0, -5, 0],
                        rotate: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute top-4 left-4 text-2xl ${
                        isPainterMode ? 'text-warm-coral/20' : 'text-slate-500/20'
                      }`}
                    >
                      {isPainterMode ? <FaBrush /> : <FaProjectDiagram />}
                    </motion.div>

                    {/* Middle Row */}
                    <motion.div
                      animate={{
                        y: [0, 12, 0],
                        x: [0, 8, 0],
                        rotate: [0, -4, 0],
                      }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute top-1/3 right-1/4 text-3xl ${
                        isPainterMode ? 'text-warm-coral/20' : 'text-blue-500/20'
                      }`}
                    >
                      {isPainterMode ? <FaPalette /> : <FaCode />}
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        x: [0, -8, 0],
                        rotate: [0, 4, 0],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute top-1/3 left-1/4 text-2xl ${
                        isPainterMode ? 'text-warm-coral/20' : 'text-slate-500/20'
                      }`}
                    >
                      {isPainterMode ? <FaBrush /> : <FaProjectDiagram />}
                    </motion.div>

                    {/* Bottom Row */}
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                        x: [0, -6, 0],
                        rotate: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute bottom-4 left-4 text-2xl ${
                        isPainterMode ? 'text-warm-coral/20' : 'text-slate-500/20'
                      }`}
                    >
                      {isPainterMode ? <FaPalette /> : <FaCode />}
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 6, 0],
                        rotate: [0, 3, 0],
                      }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute bottom-4 right-4 text-2xl ${
                        isPainterMode ? 'text-warm-coral/20' : 'text-blue-50/20'
                      }`}
                    >
                      {isPainterMode ? <FaBrush /> : <FaProjectDiagram />}
                    </motion.div>
                  </div>

                  <div className="flex items-start gap-5 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-lg ${isPainterMode ? 'bg-blue-50' : 'bg-slate-50'} shadow-sm`}
                    >
                      <FaBriefcase className={`text-3xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                    </motion.div>
                    <div>
                      <h3 className={`font-playfair text-3xl font-bold ${
                        isPainterMode ? 'text-charcoal' : 'text-slate-800'
                      }`}>
                        {experience.title}
                      </h3>
                      <p className={`${
                        isPainterMode ? 'text-charcoal/90' : 'text-slate-700'
                      } font-semibold text-xl mt-1`}>
                        {experience.company}
                      </p>
                      <div className={`flex items-center gap-5 text-base mt-3 ${
                        isPainterMode ? 'text-charcoal/80' : 'text-slate-600'
                      }`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <FaMapMarkerAlt className={`${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                          <span>{experience.location}</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <FaCalendarAlt className={`${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                          <span>{experience.period}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex-1 overflow-y-auto">
                    <h4 className={`${
                      isPainterMode ? 'text-charcoal/90' : 'text-slate-700'
                    } font-semibold text-xl mb-4`}>Key Achievements</h4>
                    <ul className="space-y-4">
                    {experience.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                          whileHover={{ x: 5 }}
                          className={`flex items-start gap-3 text-lg ${
                            isPainterMode ? 'text-charcoal/80' : 'text-slate-600'
                          }`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaCheckCircle className={`mt-1 ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                          </motion.div>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                  </div>

                  <div className="mt-8">
                    <h4 className={`${
                      isPainterMode ? 'text-charcoal/90' : 'text-slate-700'
                    } font-semibold text-xl mb-4`}>Skills Developed</h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isPainterMode 
                              ? 'bg-warm-coral/10 text-warm-coral' 
                              : 'bg-blue-50 text-blue-500'
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl group lg:sticky lg:top-8"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
              
              {/* Floating Symbols Around Image */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top Left */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-8 left-8 text-2xl ${
                    isPainterMode ? 'text-warm-coral/30' : 'text-blue-500/30'
                  }`}
                >
                  {isPainterMode ? <FaPalette /> : <FaCode />}
                </motion.div>

                {/* Top Right */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, -10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-12 right-12 text-xl ${
                    isPainterMode ? 'text-warm-coral/30' : 'text-slate-500/30'
                  }`}
                >
                  {isPainterMode ? <FaBrush /> : <FaProjectDiagram />}
                </motion.div>

                {/* Middle Left */}
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-1/2 left-8 text-2xl ${
                    isPainterMode ? 'text-warm-coral/30' : 'text-blue-500/30'
                  }`}
                >
                  {isPainterMode ? <FaPalette /> : <FaCode />}
                </motion.div>

                {/* Middle Right */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-1/2 right-8 text-xl ${
                    isPainterMode ? 'text-warm-coral/30' : 'text-slate-500/30'
                  }`}
                >
                  {isPainterMode ? <FaBrush /> : <FaProjectDiagram />}
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    x: [0, -10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute bottom-12 left-12 text-2xl ${
                    isPainterMode ? 'text-warm-coral/30' : 'text-blue-500/30'
                  }`}
                >
                  {isPainterMode ? <FaPalette /> : <FaCode />}
                </motion.div>

                {/* Bottom Right */}
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3.7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute bottom-8 right-8 text-xl ${
                    isPainterMode ? 'text-warm-coral/30' : 'text-slate-500/30'
                  }`}
                >
                  {isPainterMode ? <FaBrush /> : <FaProjectDiagram />}
                </motion.div>
              </div>
              
              {/* Image Container */}
              <div className="relative h-full w-full p-8 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/image1.png"
                    alt="Globeminds Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    quality={75}
                  />
                </motion.div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 to-white/50 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <FaBuilding className={`text-2xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      isPainterMode ? 'text-charcoal' : 'text-slate-800'
                    }`}>Globeminds Technologies</h3>
                    <p className={`text-base ${
                      isPainterMode ? 'text-charcoal/80' : 'text-slate-600'
                    }`}>Pune, Maharashtra</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
