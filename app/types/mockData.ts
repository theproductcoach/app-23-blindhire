import { Candidate } from './candidate';

export const MOCK_CANDIDATES: Candidate[] = [
  // Junior Product Manager Candidates
  {
    id: '1',
    jobId: '1',
    scrubbedText: `APPLICANT #1

EXPERIENCE:
- 1.5 years as Product Analyst at TechStart
- Led user research for mobile app features
- Collaborated with engineering team on feature prioritization
- Created product roadmaps and user stories

SKILLS:
- Product Management
- User Research
- Agile Methodologies
- Data Analysis
- JIRA
- Figma`,
    originalText: '',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15')
  },
  {
    id: '2',
    jobId: '1',
    scrubbedText: `APPLICANT #2

EXPERIENCE:
- 2 years as Business Analyst at FinTech Solutions
- Developed product requirements documentation
- Conducted market research and competitive analysis
- Worked with cross-functional teams on feature development

SKILLS:
- Product Management
- Market Research
- Requirements Gathering
- Stakeholder Management
- SQL
- Product Analytics`,
    originalText: '',
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-03-20')
  },

  // Product Manager Candidates
  {
    id: '3',
    jobId: '2',
    scrubbedText: `APPLICANT #3

EXPERIENCE:
- 4 years as Product Manager at E-commerce Platform
- Led development of checkout optimization features
- Managed $2M product budget
- Increased conversion rate by 25%

SKILLS:
- Product Strategy
- A/B Testing
- User Experience
- Data-Driven Decision Making
- Product Roadmapping
- Stakeholder Management`,
    originalText: '',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: '4',
    jobId: '2',
    scrubbedText: `APPLICANT #4

EXPERIENCE:
- 3.5 years as Product Manager at SaaS Company
- Launched 3 major product features
- Managed team of 5 developers
- Increased user retention by 40%

SKILLS:
- Product Development
- Team Leadership
- User Research
- Agile Methodologies
- Product Analytics
- Technical Writing`,
    originalText: '',
    createdAt: new Date('2024-03-18'),
    updatedAt: new Date('2024-03-18')
  },

  // Senior Product Manager Candidates
  {
    id: '5',
    jobId: '3',
    scrubbedText: `APPLICANT #5

EXPERIENCE:
- 6 years as Senior Product Manager at Enterprise Software
- Led product strategy for $10M product line
- Managed team of 15 across 3 countries
- Increased revenue by 35% year over year

SKILLS:
- Product Strategy
- Team Leadership
- Market Analysis
- Budget Management
- Stakeholder Management
- Product Vision`,
    originalText: '',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05')
  },
  {
    id: '6',
    jobId: '3',
    scrubbedText: `APPLICANT #6

EXPERIENCE:
- 7 years in Product Management roles
- Led product development for AI-powered platform
- Managed $5M product budget
- Increased user engagement by 50%

SKILLS:
- AI/ML Product Development
- Product Strategy
- Team Leadership
- Data Analysis
- Technical Architecture
- Product Marketing`,
    originalText: '',
    createdAt: new Date('2024-03-12'),
    updatedAt: new Date('2024-03-12')
  },

  // AI Software Engineer Candidates
  {
    id: '7',
    jobId: '6',
    scrubbedText: `APPLICANT #7

EXPERIENCE:
- 4 years as Machine Learning Engineer
- Developed NLP models for text classification
- Built recommendation systems
- Optimized model performance by 40%

SKILLS:
- Python
- TensorFlow
- PyTorch
- Natural Language Processing
- Machine Learning
- Data Science`,
    originalText: '',
    createdAt: new Date('2024-03-08'),
    updatedAt: new Date('2024-03-08')
  },
  {
    id: '8',
    jobId: '6',
    scrubbedText: `APPLICANT #8

EXPERIENCE:
- 3.5 years as AI Engineer
- Developed computer vision systems
- Built deep learning models for image recognition
- Reduced inference time by 60%

SKILLS:
- Computer Vision
- Deep Learning
- Python
- C++
- CUDA
- Model Optimization`,
    originalText: '',
    createdAt: new Date('2024-03-16'),
    updatedAt: new Date('2024-03-16')
  },

  // Account Manager Candidates
  {
    id: '9',
    jobId: '7',
    scrubbedText: `APPLICANT #9

EXPERIENCE:
- 4 years as Account Manager at SaaS Company
- Managed portfolio of 20 enterprise clients
- Increased client retention by 30%
- Generated $2M in upsell revenue

SKILLS:
- Account Management
- Client Relations
- Sales Strategy
- Contract Negotiation
- CRM Management
- Business Development`,
    originalText: '',
    createdAt: new Date('2024-03-14'),
    updatedAt: new Date('2024-03-14')
  },
  {
    id: '10',
    jobId: '7',
    scrubbedText: `APPLICANT #10

EXPERIENCE:
- 3 years as Senior Account Manager
- Managed $5M client portfolio
- Led client onboarding and training
- Increased client satisfaction scores by 25%

SKILLS:
- Client Management
- Sales Strategy
- Customer Success
- Project Management
- Data Analysis
- Team Leadership`,
    originalText: '',
    createdAt: new Date('2024-03-19'),
    updatedAt: new Date('2024-03-19')
  },

  // Support Specialist Candidates
  {
    id: '11',
    jobId: '8',
    scrubbedText: `APPLICANT #11

EXPERIENCE:
- 2 years as Technical Support Specialist
- Resolved 1000+ customer tickets
- Maintained 95% customer satisfaction rate
- Created knowledge base articles

SKILLS:
- Technical Support
- Customer Service
- Troubleshooting
- Documentation
- Ticketing Systems
- Product Knowledge`,
    originalText: '',
    createdAt: new Date('2024-03-11'),
    updatedAt: new Date('2024-03-11')
  },
  {
    id: '12',
    jobId: '8',
    scrubbedText: `APPLICANT #12

EXPERIENCE:
- 1.5 years as Customer Support Specialist
- Handled 50+ customer interactions daily
- Reduced average response time by 40%
- Trained new support team members

SKILLS:
- Customer Support
- Problem Solving
- Communication
- Team Training
- Process Improvement
- Technical Documentation`,
    originalText: '',
    createdAt: new Date('2024-03-17'),
    updatedAt: new Date('2024-03-17')
  }
]; 