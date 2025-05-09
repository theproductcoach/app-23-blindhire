"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import { Candidate } from "../types/candidate";
import { JOBS } from "../types/job";
import { CandidateStorage } from "../utils/candidateStorage";

export default function CandidatesContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDemoCandidates, setShowDemoCandidates] = useState(false);

  useEffect(() => {
    if (jobId) {
      setSelectedJob(jobId);
    }
  }, [jobId]);

  const loadCandidates = () => {
    const allCandidates = CandidateStorage.getAll();

    // Filter out demo candidates if demo mode is off
    const filteredCandidates = allCandidates.filter(
      (c: Candidate) => showDemoCandidates || !c.id.startsWith("demo-")
    );

    // Apply job filter if selected
    const jobFilteredCandidates = selectedJob
      ? filteredCandidates.filter((c: Candidate) => c.jobId === selectedJob)
      : filteredCandidates;

    setCandidates(jobFilteredCandidates);
  };

  useEffect(() => {
    loadCandidates();
  }, [selectedJob, showDemoCandidates]);

  const handleToggleDemo = () => {
    setShowDemoCandidates(!showDemoCandidates);
  };

  const getJobTitle = (jobId: string) => {
    const job = JOBS.find((j) => j.id === jobId);
    return job ? job.title : "Unknown Position";
  };

  const handleOpenModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center pt-8">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
          <Hero
            title="Candidates"
            subtitle={
              selectedJob
                ? `Candidates for ${getJobTitle(selectedJob)}`
                : "Browse all candidates"
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          <div className="flex justify-end mb-6">
            <div className="flex items-center space-x-2">
              <label htmlFor="demo-toggle" className="text-sm text-gray-300">
                Show Demo Candidates
              </label>
              <button
                id="demo-toggle"
                onClick={handleToggleDemo}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  showDemoCandidates ? "bg-blue-600" : "bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showDemoCandidates ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Candidate List</h1>
            <div className="flex items-center space-x-4">
              <select
                value={selectedJob || ""}
                onChange={(e) => setSelectedJob(e.target.value || null)}
                className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Jobs</option>
                {JOBS.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {candidates.length === 0 ? (
            <p className="text-gray-300 text-center py-8">
              No candidates found for this position.
            </p>
          ) : (
            <div className="space-y-2">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-white">
                        {`Candidate #${candidate.id}`}
                      </h3>
                      {candidate.id.startsWith("demo-") && (
                        <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                          Demo
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">
                        {getJobTitle(candidate.jobId)}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-400">
                        Applied{" "}
                        {new Date(candidate.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenModal(candidate)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedCandidate ? getJobTitle(selectedCandidate.jobId) : ""}
      >
        {selectedCandidate && (
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono">
              {selectedCandidate.scrubbedText}
            </pre>
          </div>
        )}
      </Modal>
    </div>
  );
}
