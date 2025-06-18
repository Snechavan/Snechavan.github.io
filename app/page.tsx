'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import TestimonialForm from './components/TestimonialForm';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-soft-cream overflow-hidden">
        <div className="absolute inset-0 bg-[url('/canvas-texture.svg')] opacity-5"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center z-10"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl font-bold text-charcoal mb-6"
          >
            Hi, I'm Sneha Chavan
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-charcoal/80 mb-8 max-w-3xl mx-auto"
          >
            A Developer with an Artistic Eye for Code
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto"
          >
            I bring ideas to life with precision and imagination. Whether building secure blockchain systems 
            or implementing machine learning models, I treat code like a canvas — where logic becomes art 
            and innovation flows like brushstrokes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/resume/Sneha R.pdf" className="btn-primary" download>
              <span className="flex items-center gap-2">
                <span>📥</span> Download Resume
              </span>
            </a>
            <a href="#projects" className="btn-secondary">
              <span className="flex items-center gap-2">
                <span>📂</span> View Projects
              </span>
            </a>
            <a href="#contact" className="btn-secondary">
              <span className="flex items-center gap-2">
                <span>📬</span> Get in Touch
              </span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a href="https://github.com/Snechavan" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-warm-coral transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sneha-chavan-789181250" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-warm-coral transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:snchavan1515@gmail.com" className="text-charcoal hover:text-warm-coral transition-colors">
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <About />
      <Education />
      <Experience />
      <Projects />
      <Testimonials />
      <div className="container mx-auto px-2 py-12">
        <div className="max-w-1xl mx-auto">
          <TestimonialForm />
        </div>
      </div>
      <Contact />
      <Footer />
      <ThemeToggle />
    </main>
  );
} 