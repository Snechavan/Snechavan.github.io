'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity, FaAward } from 'react-icons/fa';
import { useThemeMode } from './ThemeModeContext';

interface EducationItem {
  icon: React.ElementType;
  title: string;
  institution: string;
  period: string;
  details: string;
  grade?: string;
}

export default function Education() {
  const { isPainterMode } = useThemeMode();

  const educationData: EducationItem[] = [
    {
      icon: FaSchool,
      title: 'High School',
      institution: 'Ahilyadevi High School for Girls, Pune, India',
      period: 'June 2021',
      details: 'Completed with excellent academic performance',
      grade: '89.60%'
    },
    {
      icon: FaGraduationCap,
      title: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic Pune',
      period: 'June 2024',
      details: 'First Class with Distinction',
      grade: 'First Class with Distinction'
    },
    {
      icon: FaUniversity,
      title: 'Degree in Computer Engineering',
      institution: 'Savitribai Phule Pune University',
      period: 'August 2024 - Present',
      details: 'Currently Pursuing',
      grade: 'Ongoing'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            {isPainterMode ? (
              <FaGraduationCap className="text-3xl text-warm-coral" />
            ) : (
              <FaGraduationCap className="text-3xl text-blue-500" />
            )}
            <h2 className={`text-4xl md:text-5xl font-bold ${
              isPainterMode ? 'text-warm-coral' : 'text-blue-500'
            }`}>
              Education
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My Academic Journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-6 rounded-2xl shadow-lg ${
                isPainterMode
                  ? 'bg-soft-cream text-charcoal'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
              }`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className={`p-3 rounded-full ${
                  isPainterMode
                    ? 'bg-warm-coral text-white'
                    : 'bg-blue-500 text-white'
                }`}>
                  <item.icon className="text-2xl" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className={`text-xl font-bold mb-2 ${
                  isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                }`}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {item.institution}
                </p>
                <p className="text-sm font-medium mb-4">
                  {item.period}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FaAward className={`${
                    isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                  }`} />
                  <span className="text-sm font-medium">
                    {item.grade}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.details}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-current to-transparent opacity-5 rounded-bl-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 