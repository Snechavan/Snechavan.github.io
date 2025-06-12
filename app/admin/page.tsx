'use client';

import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaArrowLeft, FaPalette, FaCode, FaBrush, FaLaptopCode, FaUser, FaLock, FaExclamationCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useThemeMode } from '../components/ThemeModeContext';
import { useRouter } from 'next/navigation';

// Floating symbols to animate
const floatingSymbols = [
  { icon: '🎨', delay: 0 },
  { icon: '💻', delay: 0.2 },
  { icon: '🎯', delay: 0.4 },
  { icon: '📊', delay: 0.6 },
];

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isPainterMode } = useThemeMode();
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('auth_token');
    if (token) {
      router.push('/admin/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token in localStorage
      localStorage.setItem('auth_token', data.token);
      
      // Redirect to dashboard
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      isPainterMode ? 'bg-cream' : 'bg-slate-50'
    }`}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {isPainterMode ? (
          // Painter Mode Elements
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
          </>
        ) : (
          // Coder Mode Elements
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
              <FaLaptopCode />
            </motion.div>
          </>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm ${
          isPainterMode 
            ? 'bg-white/90 border border-warm-coral/20' 
            : 'bg-white/90 border border-blue-200'
        }`}
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            {isPainterMode ? (
              <FaPalette className="text-3xl text-warm-coral" />
            ) : (
              <FaCode className="text-3xl text-blue-500" />
            )}
            <h1 className={`text-2xl font-bold ${
              isPainterMode ? 'text-charcoal' : 'text-slate-800'
            }`}>
              Admin Login
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className={`h-0.5 w-12 ${
              isPainterMode ? 'bg-warm-coral/30' : 'bg-blue-500/30'
            }`} />
            <p className={`text-sm ${
              isPainterMode ? 'text-charcoal/70' : 'text-slate-600'
            }`}>
              Enter your credentials to access the admin dashboard
            </p>
            <div className={`h-0.5 w-12 ${
              isPainterMode ? 'bg-warm-coral/30' : 'bg-blue-500/30'
            }`} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
              isPainterMode ? 'text-warm-coral' : 'text-blue-500'
            }`}>
              <FaUser className="text-lg" />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                isPainterMode
                  ? 'bg-white border-gray-200 text-charcoal focus:border-warm-coral'
                  : 'bg-white border-gray-200 text-slate-800 focus:border-blue-500'
              } focus:outline-none focus:ring-2 ${
                isPainterMode
                  ? 'focus:ring-warm-coral/20'
                  : 'focus:ring-blue-500/20'
              }`}
            />
          </div>

          <div className="relative">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
              isPainterMode ? 'text-warm-coral' : 'text-blue-500'
            }`}>
              <FaLock className="text-lg" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                isPainterMode
                  ? 'bg-white border-gray-200 text-charcoal focus:border-warm-coral'
                  : 'bg-white border-gray-200 text-slate-800 focus:border-blue-500'
              } focus:outline-none focus:ring-2 ${
                isPainterMode
                  ? 'focus:ring-warm-coral/20'
                  : 'focus:ring-blue-500/20'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                isPainterMode ? 'text-charcoal/50' : 'text-slate-500'
              } hover:${
                isPainterMode ? 'text-warm-coral' : 'text-blue-500'
              } transition-colors`}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-lg text-sm ${
                isPainterMode 
                  ? 'bg-red-50 text-red-600' 
                  : 'bg-red-50 text-red-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <FaExclamationCircle />
                <span>{error}</span>
              </div>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              isPainterMode
                ? 'bg-warm-coral text-white hover:bg-warm-coral/90'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span>{isLoading ? 'Logging in...' : 'Login'}</span>
              {isPainterMode ? (
                <FaPalette className="text-lg" />
              ) : (
                <FaCode className="text-lg" />
              )}
            </div>
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="/"
            className={`inline-flex items-center text-sm ${
              isPainterMode
                ? 'text-charcoal/70 hover:text-warm-coral'
                : 'text-slate-600 hover:text-blue-500'
            } transition-colors`}
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </a>
        </div>
      </motion.div>
    </div>
  );
}
