'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaSpinner, FaCode, FaDatabase, FaServer, FaTerminal, FaGitAlt, FaReact, FaNodeJs, FaNetworkWired, FaUsers, FaTrophy, FaBrain, FaComments, FaUserCheck, FaHandshake, FaSmile, FaLightbulb, FaRocket, FaChartLine, FaMedal, FaShareAlt, FaAddressBook, FaCheckCircle, FaClock, FaCalendarCheck, FaPalette, FaUser } from 'react-icons/fa';
import { useThemeMode } from './ThemeModeContext';

export default function Contact() {
  const { isPainterMode } = useThemeMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}:`, value); // Debug log
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Debug log
    console.log('Form data before validation:', formData);
    console.log('Message field value:', formData.message);
    console.log('Message field type:', typeof formData.message);

    // Validate required fields
    if (!formData.name.trim()) {
      setError('Name is required');
      setLoading(false);
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      setLoading(false);
      return;
    }
    if (!formData.subject.trim()) {
      setError('Subject is required');
      setLoading(false);
      return;
    }
    if (!formData.message || !formData.message.trim()) {
      setError('Message is required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const skills = [
    { name: 'Java & Advanced Java', icon: FaCode, level: 90 },
    { name: 'Frontend Development', icon: FaCode, level: 80 },
    { name: 'Problem Solving', icon: FaBrain, level: 80 }
  ];

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
      isPainterMode ? 'bg-gradient-to-br from-soft-cream to-white' : 'bg-gradient-to-br from-slate-50 to-white'
    }`}>
      {/* Floating Technical Symbols */}
      <div className="absolute inset-0 pointer-events-none z-0">
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
                Contact Me
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
              Let's create something amazing together
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`rounded-2xl p-8 shadow-lg relative overflow-hidden ${
                isPainterMode ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              {/* Floating Background Icons */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 right-10 opacity-10"
                >
                  <FaAddressBook className={`text-6xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-10 left-10 opacity-10"
                >
                  <FaUserCheck className={`text-5xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/4 opacity-10"
                >
                  <FaHandshake className={`text-4xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                </motion.div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <FaAddressBook className={`text-2xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                <h3 className={`text-2xl font-bold ${
                  isPainterMode ? 'text-charcoal' : 'text-slate-800'
                }`}>
                  Get in Touch
                </h3>
              </div>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    isPainterMode 
                      ? 'bg-soft-cream/50 hover:bg-soft-cream' 
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-500/10'
                  }`}>
                    <FaEnvelope className={`text-xl ${
                      isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-sm ${
                      isPainterMode ? 'text-charcoal/60' : 'text-slate-600'
                    }`}>Email</p>
                    <a href="mailto:snchavan1515@gmail.com" className={`hover:text-blue-500 transition-colors ${
                      isPainterMode ? 'text-charcoal' : 'text-slate-800'
                    }`}>
                      snchavan1515@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    isPainterMode 
                      ? 'bg-soft-cream/50 hover:bg-soft-cream' 
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-500/10'
                  }`}>
                    <FaPhone className={`text-xl ${
                      isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-sm ${
                      isPainterMode ? 'text-charcoal/60' : 'text-slate-600'
                    }`}>Phone</p>
                    <a href="tel:+917350296838" className={`hover:text-blue-500 transition-colors ${
                      isPainterMode ? 'text-charcoal' : 'text-slate-800'
                    }`}>
                      +91 7350296838
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    isPainterMode 
                      ? 'bg-soft-cream/50 hover:bg-soft-cream' 
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-500/10'
                  }`}>
                    <FaMapMarkerAlt className={`text-xl ${
                      isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-sm ${
                      isPainterMode ? 'text-charcoal/60' : 'text-slate-600'
                    }`}>Location</p>
                    <p className={isPainterMode ? 'text-charcoal' : 'text-slate-800'}>
                      Near Nanded City, Pune-41
                    </p>
                  </div>
                </motion.div>

                <div className="pt-6 border-t border-gray-100">
                  <p className={`text-sm mb-4 ${
                    isPainterMode ? 'text-charcoal/60' : 'text-slate-600'
                  }`}>Connect with me</p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://github.com/Snechavan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isPainterMode 
                          ? 'bg-soft-cream text-charcoal hover:text-warm-coral' 
                          : 'bg-slate-100 text-slate-800 hover:text-blue-500'
                      }`}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.linkedin.com/in/sneha-chavan-789181250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isPainterMode 
                          ? 'bg-soft-cream text-charcoal hover:text-warm-coral' 
                          : 'bg-slate-100 text-slate-800 hover:text-blue-500'
                      }`}
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`rounded-2xl p-8 shadow-lg relative overflow-hidden ${
                isPainterMode ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              {/* Floating Background Icons */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 right-10 opacity-10"
                >
                  <FaEnvelope className={`text-6xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-10 left-10 opacity-10"
                >
                  <FaPaperPlane className={`text-5xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/4 opacity-10"
                >
                  <FaComments className={`text-4xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                </motion.div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <FaEnvelope className={`text-3xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
                <h2 className={`text-4xl font-bold ${
                  isPainterMode ? 'text-charcoal' : 'text-slate-800'
                }`}>
                  Contact Me
                </h2>
                <FaEnvelope className={`text-3xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isPainterMode ? 'text-charcoal' : 'text-slate-700'
                    }`}>
                      Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-4 py-2 border ${
                          isPainterMode
                            ? 'border-gray-200 text-charcoal focus:border-warm-coral'
                            : 'border-slate-200 text-slate-800 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 ${
                          isPainterMode
                            ? 'focus:ring-warm-coral/20'
                            : 'focus:ring-blue-500/20'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isPainterMode ? 'text-charcoal' : 'text-slate-700'
                    }`}>
                      Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-4 py-2 border ${
                          isPainterMode
                            ? 'border-gray-200 text-charcoal focus:border-warm-coral'
                            : 'border-slate-200 text-slate-800 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 ${
                          isPainterMode
                            ? 'focus:ring-warm-coral/20'
                            : 'focus:ring-blue-500/20'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                    isPainterMode ? 'text-charcoal' : 'text-slate-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isPainterMode
                        ? 'bg-white border-gray-200 text-charcoal focus:border-warm-coral'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 ${
                      isPainterMode
                        ? 'focus:ring-warm-coral/20'
                        : 'focus:ring-blue-500/20'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    isPainterMode ? 'text-charcoal' : 'text-slate-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    rows={5}
                    required
                  />
                </div>

                {error && (
                  <div className="p-4 text-red-700 bg-red-100 rounded-lg dark:bg-red-900 dark:text-red-200">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="p-4 text-green-700 bg-green-100 rounded-lg dark:bg-green-900 dark:text-green-200">
                    {success}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                    isPainterMode
                      ? 'bg-warm-coral text-white hover:bg-warm-coral/90 disabled:bg-warm-coral/50'
                      : 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-500/50'
                  }`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`rounded-2xl p-8 shadow-lg relative overflow-hidden max-w-4xl mx-auto ${
              isPainterMode ? 'bg-white' : 'bg-slate-50'
            }`}
          >
            {/* Floating Background Icons */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 opacity-10"
              >
                <FaCalendarCheck className={`text-6xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-10 left-10 opacity-10"
              >
                <FaClock className={`text-5xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/4 opacity-10"
              >
                <FaCheckCircle className={`text-4xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <FaCalendarCheck className={`text-2xl ${isPainterMode ? 'text-warm-coral' : 'text-blue-500'}`} />
              <h3 className={`text-2xl font-bold ${
                isPainterMode ? 'text-charcoal' : 'text-slate-800'
              }`}>
                Currently Available
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl text-center ${
                  isPainterMode 
                    ? 'bg-soft-cream/50 hover:bg-soft-cream' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-500/10'
                }`}>
                  <FaCode className={`text-2xl ${
                    isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                  }`} />
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isPainterMode ? 'text-charcoal' : 'text-slate-800'
                }`}>
                  🚀 Open for Internship Roles
                </h4>
                <p className={`text-sm ${
                  isPainterMode ? 'text-charcoal/70' : 'text-slate-600'
                }`}>
                  Actively seeking internship opportunities in software development to gain hands-on experience and grow in real-world environments.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl text-center ${
                  isPainterMode 
                    ? 'bg-soft-cream/50 hover:bg-soft-cream' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-500/10'
                }`}>
                  <FaUsers className={`text-2xl ${
                    isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                  }`} />
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isPainterMode ? 'text-charcoal' : 'text-slate-800'
                }`}>
                  🤝 Collaborative Learning
                </h4>
                <p className={`text-sm ${
                  isPainterMode ? 'text-charcoal/70' : 'text-slate-600'
                }`}>
                  Eager to connect with peers through study groups and tech discussions to enhance collaborative learning and coding skills.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl text-center ${
                  isPainterMode 
                    ? 'bg-soft-cream/50 hover:bg-soft-cream' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  isPainterMode ? 'bg-warm-coral/10' : 'bg-blue-500/10'
                }`}>
                  <FaTrophy className={`text-2xl ${
                    isPainterMode ? 'text-warm-coral' : 'text-blue-500'
                  }`} />
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isPainterMode ? 'text-charcoal' : 'text-slate-800'
                }`}>
                  🧠 Code & Compete
                </h4>
                <p className={`text-sm ${
                  isPainterMode ? 'text-charcoal/70' : 'text-slate-600'
                }`}>
                  Passionate about solving algorithmic challenges and taking part in hackathons and coding contests to sharpen problem-solving abilities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 