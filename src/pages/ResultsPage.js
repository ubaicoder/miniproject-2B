import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { CheckCircleIcon, ExclamationCircleIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline"

export default function ResultsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const fileName = location.state?.fileName || "resume.pdf"

  // Mock analysis results
  const results = {
    score: 75,
    sections: [
      {
        title: "ATS Compatibility",
        score: 85,
        items: [
          { text: "PDF format is ATS-friendly", status: "success" },
          { text: "Simple formatting detected", status: "success" },
          { text: "No complex tables or graphics", status: "success" },
        ],
      },
      {
        title: "Content Analysis",
        score: 70,
        items: [
          { text: "Good use of action verbs", status: "success" },
          { text: "Add more quantifiable achievements", status: "warning" },
          { text: "Include more industry keywords", status: "warning" },
        ],
      },
      {
        title: "Formatting",
        score: 90,
        items: [
          { text: "Consistent font usage", status: "success" },
          { text: "Proper section headings", status: "success" },
          { text: "Good use of white space", status: "success" },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Resume Analysis Results</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{fileName}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {results.sections.map((section, index) => (
              <div key={section.title} className="mb-8 score-card">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h2>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Score</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{section.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${section.score}%` }}
                    ></div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      {item.status === "success" ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      ) : (
                        <ExclamationCircleIcon className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                      )}
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="score-card text-center">
              <div className="relative inline-flex">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{results.score}%</span>
                </div>
                <svg className="w-32 h-32" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray={`${results.score}, 100`}
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Overall Score</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Your resume is performing well but has room for improvement.
              </p>
              <button
                onClick={() => {
                  // Implement download functionality
                  alert("Downloading report...")
                }}
                className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                Download Report
              </button>
              <button
                onClick={() => navigate("/")}
                className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Analyze Another Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

