import { Candidate } from "../types/candidate";

// Simple in-memory store for server-side storage
let candidatesStore: Candidate[] = [];

export const ServerStorage = {
  save(candidate: Candidate): void {
    try {
      candidatesStore.push(candidate);
    } catch (error) {
      console.error('Error saving candidate:', error);
      throw new Error('Failed to save candidate');
    }
  },

  getAll(): Candidate[] {
    try {
      return candidatesStore;
    } catch (error) {
      console.error('Error getting candidates:', error);
      return [];
    }
  },

  getByJobId(jobId: string): Candidate[] {
    try {
      return candidatesStore.filter(c => c.jobId === jobId);
    } catch (error) {
      console.error('Error getting candidates by job ID:', error);
      return [];
    }
  },

  clear(): void {
    try {
      candidatesStore = [];
    } catch (error) {
      console.error('Error clearing candidates:', error);
    }
  }
}; 