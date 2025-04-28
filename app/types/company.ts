export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  size: 'small' | 'medium' | 'large' | 'enterprise';
  location: string;
  website: string;
  logo?: string;
  jobs: string[]; // Array of job IDs
  createdAt: Date;
  updatedAt: Date;
}

export const MOCK_COMPANY: Company = {
  id: '1',
  name: 'TechCorp Inc.',
  description: 'A leading technology company specializing in AI solutions.',
  industry: 'Technology',
  size: 'medium',
  location: 'San Francisco, CA',
  website: 'https://techcorp.example.com',
  jobs: ['1', '2', '3', '4', '5', '6', '7', '8'],
  createdAt: new Date(),
  updatedAt: new Date()
}; 