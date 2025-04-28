"use client";

import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { JOBS } from "./types/job";
import { extractTextFromFile } from "./utils/fileExtract";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedJobId, setSelectedJobId] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
      setSuccess(null);
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setError(null);
      setSuccess(null);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !selectedJobId) {
      setError("Please select both a file and a job position");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Extract text from file (PDF, DOCX, or plain text)
      const fileText = await extractTextFromFile(file);

      // Send extracted text to the API
      const response = await fetch("/api/scrubber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: fileText, jobId: selectedJobId }),
      });

      if (!response.ok) {
        throw new Error("Failed to process the file");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Store the candidate in localStorage
      const existingCandidates = JSON.parse(
        localStorage.getItem("blindhire_candidates") || "[]"
      );
      existingCandidates.push(data.candidate);
      localStorage.setItem(
        "blindhire_candidates",
        JSON.stringify(existingCandidates)
      );

      setSuccess(
        "Resume submitted successfully! You can view it in the Candidates tab."
      );
      setFile(null);
      setSelectedJobId("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while processing your file"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center pt-8">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
          <Hero
            title="Welcome to BlindHire"
            subtitle="Upload a CV to remove bias and anonymise personal information."
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          {/* Why BlindHire Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Why BlindHire?
            </h2>
            <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-10">
              Unconscious bias can affect hiring decisions, often without
              companies even realising it. BlindHire helps you make fairer, more
              merit-based choices by anonymising CVs at the very first stage.
              Build stronger teams, foster diversity, and focus on what matters
              — the work.
            </p>
          </div>

          <h1 className="text-3xl font-bold text-center mb-4 text-white">
            Welcome to BlindHire
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Upload a CV to remove bias and anonymise personal information.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Job Selection */}
              <div className="relative">
                <label
                  htmlFor="job"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Select Job Position
                </label>
                <select
                  id="job"
                  value={selectedJobId}
                  onChange={(e) => setSelectedJobId(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                >
                  <option value="">Select a job position</option>
                  {JOBS.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-9 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="space-y-4">
                {/* Choose File Button */}
                <div className="flex justify-center">
                  <label className="cursor-pointer">
                    <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Choose File
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-800 text-gray-400">or</span>
                  </div>
                </div>

                {/* Drag and Drop Area */}
                <div
                  className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
                    isDragging
                      ? "border-blue-500 bg-blue-900/20"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <svg
                    className={`mx-auto h-12 w-12 mb-3 ${
                      isDragging ? "text-blue-400" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p
                    className={`text-sm ${
                      isDragging ? "text-blue-400" : "text-gray-400"
                    }`}
                  >
                    Drag and drop your file here
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PDF, DOC, or DOCX files only
                  </p>
                </div>

                {/* Selected File Display */}
                {file && (
                  <div className="mt-4 p-3 bg-gray-700 rounded-md flex items-center justify-between">
                    <p className="text-sm text-gray-200">
                      Selected: <span className="font-medium">{file.name}</span>
                    </p>
                    <button
                      onClick={() => setFile(null)}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                      title="Remove file"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!file || !selectedJobId || isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit"
              )}
            </button>

            {/* Success Message */}
            {success && (
              <div className="mt-4 p-3 bg-green-900/50 border border-green-700 rounded-md">
                <p className="text-sm text-green-200">{success}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-md">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}
          </form>

          {/* Integration Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h2 className="text-xl font-semibold text-center text-white mb-6">
              Connect your hiring platform
            </h2>
            <div className="flex flex-col items-center space-y-3">
              {[
                "Lever",
                "Workday",
                "Greenhouse",
                "SmartRecruiters",
                "BambooHR",
              ].map((platform) => (
                <button
                  key={platform}
                  className="w-full max-w-xs px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-md hover:bg-gray-700 hover:border-gray-500 transition-colors relative group"
                  title="Integration coming soon"
                >
                  {platform}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Integration coming soon
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
