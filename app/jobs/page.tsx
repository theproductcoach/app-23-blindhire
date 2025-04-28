"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { JOBS } from "../types/job";
import Link from "next/link";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center pt-8">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
          <Hero title="Job Ads" subtitle="Browse our current job openings." />
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Current Openings
          </h1>

          <div className="space-y-6">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-gray-700 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">
                      {job.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-600 text-gray-200 rounded">
                        {job.department}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-600 text-gray-200 rounded">
                        {job.level}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-400">
                    Requirements:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="text-gray-300 text-sm">
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/candidates?jobId=${job.id}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Candidates
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
