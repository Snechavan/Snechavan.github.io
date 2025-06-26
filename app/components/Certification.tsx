"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaAward, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaTrophy, FaAws, FaLinux, FaUserShield, FaRobot, FaBrain, FaPython, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import { certifications } from "../lib/certifications";
import { useThemeMode } from "./ThemeModeContext";

export default function Certification() {
  const { isPainterMode } = useThemeMode();
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 4);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaCertificate className={`text-3xl ${isPainterMode ? "text-warm-coral" : "text-blue-500"}`} />
            <h2 className={`text-4xl md:text-5xl font-bold ${isPainterMode ? "text-warm-coral" : "text-blue-500"}`}>
              Certifications
            </h2>
            <FaAward className={`text-3xl ${isPainterMode ? "text-warm-coral" : "text-blue-500"}`} />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My proudest achievements and credentials
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <AnimatePresence>
            {visibleCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-300 ${
                  isPainterMode
                    ? "bg-soft-cream text-charcoal"
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  {cert.badgeUrl ? (
                    <div className="w-20 h-20 relative mb-2">
                      <Image
                        src={cert.badgeUrl}
                        alt={cert.title + " badge"}
                        fill
                        className="object-contain rounded-full border-4 border-blue-100 dark:border-gray-700 shadow-md"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center mb-2 rounded-full border-4 border-blue-100 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800">
                      {cert.issuer === 'Amazon Web Services' ? (
                        <FaAws className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-yellow-400"}`} />
                      ) : cert.issuer === 'Linux Foundation' ? (
                        <FaLinux className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-gray-700"}`} />
                      ) : cert.issuer === 'CyberFrat' ? (
                        <FaUserShield className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-purple-600"}`} />
                      ) : cert.title.toLowerCase().includes('chatgpt') ? (
                        <FaRobot className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-green-500"}`} />
                      ) : cert.title.toLowerCase().includes('machine learning') ? (
                        <FaBrain className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-pink-500"}`} />
                      ) : cert.title.toLowerCase().includes('python') ? (
                        <FaPython className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-yellow-600"}`} />
                      ) : cert.title.toLowerCase().includes('power bi') ? (
                        <FaChartBar className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-blue-600"}`} />
                      ) : (
                        <FaCertificate className={`text-4xl ${isPainterMode ? "text-warm-coral" : "text-blue-500"}`} />
                      )}
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-1 ${isPainterMode ? "text-warm-coral" : "text-blue-500"}`}>{cert.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{cert.issuer}</p>
                  {cert.date && <p className="text-xs font-medium mb-2">{cert.date}</p>}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors underline hover:no-underline ${isPainterMode ? "text-warm-coral" : "text-blue-500"}`}
                    >
                      View Credential <FaExternalLinkAlt className="inline text-xs" />
                    </a>
                  )}
                </div>
                {/* Decorative gradient ring */}
                <div className="absolute -inset-1 rounded-2xl pointer-events-none group-hover:opacity-100 opacity-60 transition-all duration-300 z-0" style={{background: isPainterMode ? "linear-gradient(135deg, #ffb19933 0%, #ff084433 100%)" : "linear-gradient(135deg, #3b82f633 0%, #1e3a8a33 100%)"}} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {certifications.length > 4 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isPainterMode
                  ? "bg-gradient-to-r from-warm-coral to-yellow-400 text-white hover:scale-105 hover:shadow-2xl focus:ring-warm-coral"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 hover:shadow-2xl focus:ring-blue-500"
                }`}
              style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
            >
              <FaTrophy className="text-2xl" />
              {showAll ? "Show Less" : "See All Achievements"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 