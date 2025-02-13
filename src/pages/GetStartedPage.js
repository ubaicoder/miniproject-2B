import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export default function GetStartedPage() {
  const features = [
    "AI-powered resume analysis",
    "Personalized improvement suggestions",
    "ATS compatibility check",
    "Industry-specific keyword recommendations",
    "Interview preparation tools",
    "Career coaching sessions",
  ]

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">Get Started with</span>
            <span className="block gradient-text">ResumeAI</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Unlock your career potential with our AI-powered resume analysis and career coaching services.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="score-card"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Why Choose ResumeAI?</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="score-card"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get Started Now</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Take the first step towards your dream career. Sign up now and experience the power of AI-driven career
              advancement.
            </p>
            <div className="space-y-4">
              <Link
                to="/signup"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Create an Account
              </Link>
              <Link
                to="/"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Try Demo
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="score-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Upload Your Resume</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Simply upload your current resume in PDF or Word format.
              </p>
            </div>
            <div className="score-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. AI Analysis</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our AI engine analyzes your resume for improvements and ATS compatibility.
              </p>
            </div>
            <div className="score-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3. Get Personalized Feedback</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Receive detailed suggestions to enhance your resume and boost your job prospects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

