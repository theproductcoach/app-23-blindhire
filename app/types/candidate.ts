import { Job } from './job';

export interface Candidate {
  id: string;
  jobId: string;
  job?: Job;
  scrubbedText: string;
  originalText: string;
  createdAt: Date;
  updatedAt: Date;
} 