import { motion } from "framer-motion"
import { DocumentCheckIcon, PresentationChartLineIcon, AcademicCapIcon } from "@heroicons/react/24/outline"

export default function ServicesPage() {
  const services = [
    {
      title: "Resume Analysis",
      description: "Get a comprehensive analysis of your resume with AI-powered insights and recommendations.",
      icon: DocumentCheckIcon,
    },
    {
      title: "Career Coaching",
      description: "One-on-one sessions with experienced career coaches to guide your professional journey.",
      icon: PresentationChartLineIcon,
    },
    {
      title: "Interview Preparation",
      description: "Practice interviews with AI and receive feedback to improve your performance.",
      icon: AcademicCapIcon,
    },
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
            <span className="block">Our</span>
            <span className="block gradient-text">Services</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive solutions to boost your career and land your dream job.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="score-card"
            >
              <service.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{service.title}</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose ResumeAI?</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="score-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI-Powered Analysis</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Cutting-edge AI technology for accurate and insightful resume analysis.
              </p>
            </div>
            <div className="score-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Expert Career Advice</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Guidance from experienced professionals in various industries.
              </p>
            </div>
            <div className="score-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personalized Approach</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Tailored solutions to meet your unique career goals and challenges.
              </p>
            </div>
            <div className="score-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Continuous Support</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Ongoing assistance throughout your job search and career journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

