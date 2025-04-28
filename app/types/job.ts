export interface Job {
  id: string;
  title: string;
  level: 'entry' | 'mid' | 'senior' | 'leadership';
  department: 'product' | 'engineering' | 'sales' | 'support';
  description: string;
  requirements: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const JOBS: Job[] = [
  {
    id: '1',
    title: 'Junior Product Manager',
    level: 'entry',
    department: 'product',
    description: 'Join our product team as a Junior Product Manager and help shape the future of our products.',
    requirements: [
      '1-2 years of product management experience',
      'Strong analytical skills',
      'Excellent communication abilities',
      'Basic understanding of agile methodologies'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: 'Product Manager',
    level: 'mid',
    department: 'product',
    description: 'Lead product initiatives and drive innovation in our product team.',
    requirements: [
      '3-5 years of product management experience',
      'Proven track record of successful product launches',
      'Strong stakeholder management skills',
      'Experience with agile methodologies'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'Senior Product Manager',
    level: 'senior',
    department: 'product',
    description: 'Take on complex product challenges and mentor junior team members.',
    requirements: [
      '5+ years of product management experience',
      'Experience leading cross-functional teams',
      'Strong strategic thinking',
      'Proven ability to drive product vision'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    title: 'Group Product Manager',
    level: 'leadership',
    department: 'product',
    description: 'Lead multiple product teams and drive organizational product strategy.',
    requirements: [
      '7+ years of product management experience',
      'Experience managing product teams',
      'Strong leadership skills',
      'Strategic vision for product development'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    title: 'VP of Product',
    level: 'leadership',
    department: 'product',
    description: 'Lead the entire product organization and drive company-wide product strategy.',
    requirements: [
      '10+ years of product management experience',
      'Experience leading large product organizations',
      'Strong executive presence',
      'Strategic vision for company growth'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    title: 'AI Software Engineer',
    level: 'mid',
    department: 'engineering',
    description: 'Build and deploy AI solutions that power our products.',
    requirements: [
      '3+ years of software engineering experience',
      'Experience with machine learning frameworks',
      'Strong Python skills',
      'Understanding of AI/ML concepts'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '7',
    title: 'Account Manager',
    level: 'mid',
    department: 'sales',
    description: 'Manage client relationships and drive business growth.',
    requirements: [
      '3+ years of account management experience',
      'Strong relationship-building skills',
      'Excellent communication abilities',
      'Experience in B2B sales'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '8',
    title: 'Support Specialist',
    level: 'entry',
    department: 'support',
    description: 'Provide exceptional support to our customers and help them succeed.',
    requirements: [
      '1-2 years of customer support experience',
      'Strong problem-solving skills',
      'Excellent communication abilities',
      'Technical aptitude'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]; 