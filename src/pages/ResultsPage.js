"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExclamationTriangleIcon, DocumentArrowDownIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

const ResultsPage = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [showTooltip, setShowTooltip] = useState(null)

  const mockResults = {
    overallScore: 75,
    atsCompatibility: 80,
    formatting: 70,
    content: 75,
    improvements: [
      { category: "formatting", text: "Increase line spacing for better readability" },
      { category: "content", text: "Add more quantifiable achievements" },
      { category: "keywords", text: "Include more industry-specific keywords" },
      { category: "grammar", text: "Fix minor grammatical errors in the second paragraph" },
    ],
  }

  const filteredImprovements = mockResults.improvements.filter(
    (improvement) => activeTab === "all" || improvement.category === activeTab,
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume Analysis Results</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Here's a detailed breakdown of your resume's performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overall Score</h2>
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 36 36">
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
                strokeDasharray={`${mockResults.overallScore}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{mockResults.overallScore}%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">ATS Compatibility</h2>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${mockResults.atsCompatibility}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {mockResults.atsCompatibility}%
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Content Quality</h2>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${mockResults.content}%` }}></div>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{mockResults.content}%</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Suggested Improvements</h2>
          <div className="relative">
            <button
              onClick={() => setShowTooltip(!showTooltip)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <AdjustmentsHorizontalIcon className="h-6 w-6" />
            </button>
            {showTooltip && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setActiveTab("all")
                      setShowTooltip(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    All
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("formatting")
                      setShowTooltip(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Formatting
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("content")
                      setShowTooltip(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Content
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("keywords")
                      setShowTooltip(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Keywords
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <ul className="space-y-4">
          {filteredImprovements.map((improvement, index) => (
            <li key={index} className="flex items-start">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{improvement.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => {
            // Implement PDF download logic here
            console.log("Downloading PDF report...")
          }}
        >
          <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
          Download PDF Report
        </motion.button>
      </div>
    </div>
  )
}

export default ResultsPage

