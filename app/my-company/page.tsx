import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { MOCK_COMPANY } from "../types/company";
import { JOBS } from "../types/job";
import Link from "next/link";

export default function MyCompanyPage() {
  const companyJobs = JOBS.filter((job) => MOCK_COMPANY.jobs.includes(job.id));

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center pt-8">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
          <Hero
            title="My Company"
            subtitle="Manage your company profile and job listings."
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className="max-w-2xl w-full p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4 text-white">
              {MOCK_COMPANY.name}
            </h1>
            <p className="text-gray-300 mb-2">{MOCK_COMPANY.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-400">Industry</p>
                <p className="text-white">{MOCK_COMPANY.industry}</p>
              </div>
              <div>
                <p className="text-gray-400">Size</p>
                <p className="text-white">{MOCK_COMPANY.size}</p>
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">{MOCK_COMPANY.location}</p>
              </div>
              <div>
                <p className="text-gray-400">Website</p>
                <a
                  href={MOCK_COMPANY.website}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {MOCK_COMPANY.website}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Job Listings</h2>
            <div className="space-y-4">
              {companyJobs.map((job) => (
                <div key={job.id} className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">
                    {job.title}
                  </h3>
                  <p className="text-gray-300">
                    {job.department} • {job.level}
                  </p>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="text-blue-400 hover:underline mt-2 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
