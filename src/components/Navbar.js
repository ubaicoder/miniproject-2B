"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { CheckCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ResumeAI</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/login"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/get-started"
              className="bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-500 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 glass">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Services
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/get-started"
            className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}

