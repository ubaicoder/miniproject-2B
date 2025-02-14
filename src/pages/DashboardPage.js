"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DocumentTextIcon, ChartBarIcon, ClockIcon } from "@heroicons/react/24/outline"

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("resumes")

  const mockResumes = [
    { id: 1, name: "Software Engineer Resume", date: "2023-05-15", score: 85 },
    { id: 2, name: "Product Manager Resume", date: "2023-05-10", score: 78 },
    { id: 3, name: "Data Scientist Resume", date: "2023-05-05", score: 92 },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Dashboard</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Track and manage your resume analyses</p>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === "resumes"
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("resumes")}
          >
            <DocumentTextIcon className="h-6 w-6 mx-auto mb-2" />
            Resumes
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === "analytics"
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("analytics")}
          >
            <ChartBarIcon className="h-6 w-6 mx-auto mb-2" />
            Analytics
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === "history"
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("history")}
          >
            <ClockIcon className="h-6 w-6 mx-auto mb-2" />
            History
          </button>
        </div>

        <div className="p-6">
          {activeTab === "resumes" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Resumes</h2>
              <div className="space-y-4">
                {mockResumes.map((resume) => (
                  <div
                    key={resume.id}
                    className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{resume.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: {resume.date}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-blue-500 mr-2">{resume.score}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Score</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Analytics</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed analytics of your resume performance will be displayed here.
              </p>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Analysis History</h2>
              <p className="text-gray-600 dark:text-gray-300">Your resume analysis history will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

