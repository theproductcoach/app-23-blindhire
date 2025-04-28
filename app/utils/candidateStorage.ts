import { Candidate } from "../types/candidate";

const CANDIDATES_STORAGE_KEY = 'blindhire_candidates';

export const CandidateStorage = {
  save(candidate: Candidate): void {
    try {
      const existing = this.getAll();
      existing.push(candidate);
      localStorage.setItem(CANDIDATES_STORAGE_KEY, JSON.stringify(existing));
    } catch (error) {
      console.error('Error saving candidate:', error);
      throw new Error('Failed to save candidate');
    }
  },

  getAll(): Candidate[] {
    try {
      const data = localStorage.getItem(CANDIDATES_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting candidates:', error);
      return [];
    }
  },

  getByJobId(jobId: string): Candidate[] {
    try {
      return this.getAll().filter(c => c.jobId === jobId);
    } catch (error) {
      console.error('Error getting candidates by job ID:', error);
      return [];
    }
  },

  clear(): void {
    try {
      localStorage.removeItem(CANDIDATES_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing candidates:', error);
    }
  }
}; 