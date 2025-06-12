'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTrash, FaSpinner, FaSignOutAlt, FaEnvelope, FaStar, FaCheck, FaTimes, FaChartBar, FaBell, FaSync } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: string
  createdAt: string
  updatedAt: string
}

interface Testimonial {
  id: number
  name: string
  email: string
  message: string
  rating: number
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'messages' | 'testimonials'>('messages')
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalTestimonials: 0,
    pendingTestimonials: 0,
    approvedTestimonials: 0
  })
  const [isRefreshing, setIsRefreshing] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if we have a token
        const token = localStorage.getItem('auth_token')
        if (!token) {
          router.push('/admin')
          return
        }

        // Verify token with the server
        const response = await fetch('/api/auth/verify', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          // If token is invalid, clear it and redirect to login
          localStorage.removeItem('auth_token')
          router.push('/admin')
          return
        }

        // If we get here, token is valid, fetch data
        await fetchData()
      } catch (error) {
        console.error('Auth check failed:', error)
        router.push('/admin')
      }
    }

    checkAuth()
    const interval = setInterval(fetchData, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [router])

  const fetchData = async () => {
    try {
      const [messagesRes, testimonialsRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/testimonials')
      ])

      if (!messagesRes.ok || !testimonialsRes.ok) {
        throw new Error('Failed to fetch data')
      }

      const messagesData = await messagesRes.json()
      const testimonialsData = await testimonialsRes.json()

      setMessages(messagesData)
      setTestimonials(testimonialsData)

      // Calculate stats
      setStats({
        totalMessages: messagesData.length,
        totalTestimonials: testimonialsData.length,
        pendingTestimonials: testimonialsData.filter((t: Testimonial) => t.status === 'pending').length,
        approvedTestimonials: testimonialsData.filter((t: Testimonial) => t.status === 'approved').length
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      // Call the logout API
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to logout')
      }

      // Clear local storage
      localStorage.removeItem('auth_token')
      
      // Redirect to login page
      router.push('/admin')
    } catch (error) {
      console.error('Logout error:', error)
      setError('Failed to logout. Please try again.')
    }
  }

  const handleTestimonialAction = async (id: number, action: 'approve' | 'reject') => {
    try {
      const response = await fetch(`/api/testimonials?id=${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: action === 'approve' ? 'approved' : 'rejected',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update testimonial')
      }

      // Refresh data
      fetchData()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  const handleDeleteMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/contact?id=${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete message')
      }

      // Refresh data after deletion
      fetchData()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  const handleDeleteTestimonial = async (id: string) => {
    try {
      const response = await fetch(`/api/testimonials?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete testimonial');
      }

      // Refresh data after deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      setError('Failed to delete testimonial');
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      await fetchData()
    } finally {
      setIsRefreshing(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <FaSpinner className="animate-spin h-8 w-8 text-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isRefreshing ? (
                <FaSpinner className="animate-spin h-5 w-5 mr-2" />
              ) : (
                <FaSync className="h-5 w-5 mr-2" />
              )}
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <FaEnvelope className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Messages</dt>
                    <dd className="text-lg font-semibold text-gray-900">{stats.totalMessages}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <FaStar className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Testimonials</dt>
                    <dd className="text-lg font-semibold text-gray-900">{stats.totalTestimonials}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <FaBell className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Pending Testimonials</dt>
                    <dd className="text-lg font-semibold text-gray-900">{stats.pendingTestimonials}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <FaChartBar className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Approved Testimonials</dt>
                    <dd className="text-lg font-semibold text-gray-900">{stats.approvedTestimonials}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('messages')}
              className={`${
                activeTab === 'messages'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Messages
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`${
                activeTab === 'testimonials'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Testimonials
            </button>
          </nav>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'messages' ? (
            <motion.div
              key="messages"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white shadow overflow-hidden sm:rounded-md"
            >
              <ul className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <motion.li
                    key={message.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-6 py-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{message.name}</p>
                        <p className="text-sm text-gray-500 truncate">{message.email}</p>
                        <p className="text-sm font-medium text-gray-700 mt-1">{message.subject}</p>
                        <p className="mt-1 text-sm text-gray-600">{message.message}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            message.status === 'read'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                          </span>
                          <p className="text-xs text-gray-400">
                            {new Date(message.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex items-center gap-2">
                        <button
                          onClick={() => handleDeleteMessage(message.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete message"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleTestimonialAction(testimonial.id, 'approve')}
                        className={`p-2 rounded-full ${
                          testimonial.status === 'approved'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600'
                        }`}
                        title="Approve"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() => handleTestimonialAction(testimonial.id, 'reject')}
                        className={`p-2 rounded-full ${
                          testimonial.status === 'rejected'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                        }`}
                        title="Reject"
                      >
                        <FaTimes />
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(testimonial.id.toString())}
                        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.message}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < testimonial.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      testimonial.status === 'approved'
                        ? 'bg-green-100 text-green-600'
                        : testimonial.status === 'rejected'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
} 