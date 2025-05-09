import { Candidate } from '../types/candidate';

export const demoCandidates: Candidate[] = [
  // Junior Product Manager Candidates
  {
    id: 'demo-jpm-1',
    jobId: '1',
    scrubbedText: `PROFESSIONAL SUMMARY
Recent graduate with a passion for product management and user experience.

PROFESSIONAL EXPERIENCE
Product Management Intern | Tech Company A | 2023
• Assisted in user research and data analysis
• Created user stories and product requirements
• Participated in sprint planning and retrospectives

EDUCATION
Bachelor of Science in Business Administration
University of Technology | 2019-2023
• Concentration in Product Management
• GPA: 3.8/4.0

SKILLS
• Product Management: User Research, Requirements Gathering
• Tools: JIRA, Figma, Google Analytics
• Communication: Technical Writing, Presentations
• Analysis: Data Analysis, Market Research`,
    originalText: `PROFESSIONAL SUMMARY
Recent graduate with a passion for product management and user experience.

PROFESSIONAL EXPERIENCE
Product Management Intern | Amazon | 2023
• Assisted in user research and data analysis
• Created user stories and product requirements
• Participated in sprint planning and retrospectives

EDUCATION
Bachelor of Science in Business Administration
University of Washington | 2019-2023
• Concentration in Product Management
• GPA: 3.8/4.0

SKILLS
• Product Management: User Research, Requirements Gathering
• Tools: JIRA, Figma, Google Analytics
• Communication: Technical Writing, Presentations
• Analysis: Data Analysis, Market Research

CONTACT
Emily Chen
emily.chen@email.com
(555) 123-4567
LinkedIn: linkedin.com/in/emilychen`,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15')
  },
  {
    id: 'demo-jpm-2',
    jobId: '1',
    scrubbedText: `PROFESSIONAL SUMMARY
Entry-level product professional with strong analytical skills and user-centric mindset.

PROFESSIONAL EXPERIENCE
Product Analyst | Tech Company B | 2023-Present
• Conducted user interviews and surveys
• Created product analytics dashboards
• Assisted in A/B testing implementation

EDUCATION
Bachelor of Science in Computer Science
Technical University | 2019-2023
• Minor in Business Administration
• Dean's List: All Semesters

SKILLS
• Analytics: SQL, Python, Tableau
• Product: User Research, A/B Testing
• Tools: Amplitude, Mixpanel, JIRA
• Communication: Technical Documentation`,
    originalText: `PROFESSIONAL SUMMARY
Entry-level product professional with strong analytical skills and user-centric mindset.

PROFESSIONAL EXPERIENCE
Product Analyst | Microsoft | 2023-Present
• Conducted user interviews and surveys
• Created product analytics dashboards
• Assisted in A/B testing implementation

EDUCATION
Bachelor of Science in Computer Science
Georgia Tech | 2019-2023
• Minor in Business Administration
• Dean's List: All Semesters

SKILLS
• Analytics: SQL, Python, Tableau
• Product: User Research, A/B Testing
• Tools: Amplitude, Mixpanel, JIRA
• Communication: Technical Documentation

CONTACT
Michael Rodriguez
michael.r@email.com
(555) 987-6543
GitHub: github.com/michaelr`,
    createdAt: new Date('2024-03-14'),
    updatedAt: new Date('2024-03-14')
  },

  // Product Manager Candidates
  {
    id: 'demo-pm-1',
    jobId: '2',
    scrubbedText: `PROFESSIONAL SUMMARY
Product Manager with 4 years of experience in B2B SaaS products.

PROFESSIONAL EXPERIENCE
Product Manager | Tech Company C | 2021-Present
• Led development of enterprise analytics platform
• Increased user engagement by 40%
• Managed cross-functional team of 8 members

Associate Product Manager | Tech Company D | 2019-2021
• Launched new features for mobile app
• Conducted user research and market analysis
• Collaborated with engineering on technical solutions

EDUCATION
Master of Business Administration
Business University | 2017-2019

Bachelor of Science in Computer Science
State University | 2013-2017

SKILLS
• Product Strategy: Roadmapping, Prioritization
• Technical: SQL, API Design, Agile
• Tools: JIRA, Confluence, Figma
• Leadership: Team Management, Stakeholder Communication`,
    originalText: `PROFESSIONAL SUMMARY
Product Manager with 4 years of experience in B2B SaaS products.

PROFESSIONAL EXPERIENCE
Product Manager | Salesforce | 2021-Present
• Led development of enterprise analytics platform
• Increased user engagement by 40%
• Managed cross-functional team of 8 members

Associate Product Manager | Adobe | 2019-2021
• Launched new features for mobile app
• Conducted user research and market analysis
• Collaborated with engineering on technical solutions

EDUCATION
Master of Business Administration
Stanford University | 2017-2019

Bachelor of Science in Computer Science
UC Berkeley | 2013-2017

SKILLS
• Product Strategy: Roadmapping, Prioritization
• Technical: SQL, API Design, Agile
• Tools: JIRA, Confluence, Figma
• Leadership: Team Management, Stakeholder Communication

CONTACT
David Kim
david.kim@email.com
(555) 234-5678
LinkedIn: linkedin.com/in/davidkim`,
    createdAt: new Date('2024-03-13'),
    updatedAt: new Date('2024-03-13')
  },
  {
    id: 'demo-pm-2',
    jobId: '2',
    scrubbedText: `PROFESSIONAL SUMMARY
Product Manager with expertise in mobile applications and user experience.

PROFESSIONAL EXPERIENCE
Product Manager | Tech Company E | 2020-Present
• Led mobile app development with 1M+ users
• Improved app store rating from 3.8 to 4.5
• Implemented user feedback system

Product Analyst | Tech Company F | 2018-2020
• Analyzed user behavior and metrics
• Created product recommendations
• Worked with design team on UX improvements

EDUCATION
Bachelor of Science in Human-Computer Interaction
Design University | 2014-2018

SKILLS
• Mobile: iOS, Android, React Native
• UX: User Research, Wireframing
• Analytics: Amplitude, Firebase
• Tools: Sketch, Figma, JIRA`,
    originalText: `PROFESSIONAL SUMMARY
Product Manager with expertise in mobile applications and user experience.

PROFESSIONAL EXPERIENCE
Product Manager | Uber | 2020-Present
• Led mobile app development with 1M+ users
• Improved app store rating from 3.8 to 4.5
• Implemented user feedback system

Product Analyst | Twitter | 2018-2020
• Analyzed user behavior and metrics
• Created product recommendations
• Worked with design team on UX improvements

EDUCATION
Bachelor of Science in Human-Computer Interaction
Carnegie Mellon University | 2014-2018

SKILLS
• Mobile: iOS, Android, React Native
• UX: User Research, Wireframing
• Analytics: Amplitude, Firebase
• Tools: Sketch, Figma, JIRA

CONTACT
Sarah Johnson
sarah.j@email.com
(555) 345-6789
Portfolio: sarahjohnson.design`,
    createdAt: new Date('2024-03-12'),
    updatedAt: new Date('2024-03-12')
  },

  // AI Software Engineer Candidates
  {
    id: 'demo-ai-1',
    jobId: '6',
    scrubbedText: `PROFESSIONAL SUMMARY
Software Engineer with 4 years of experience in AI and machine learning.

PROFESSIONAL EXPERIENCE
AI Engineer | Tech Company G | 2021-Present
• Developed ML models for natural language processing
• Improved model accuracy by 25%
• Implemented automated testing pipeline

Software Engineer | Tech Company H | 2019-2021
• Built RESTful APIs for ML services
• Optimized database queries
• Collaborated on CI/CD implementation

EDUCATION
Master of Science in Computer Science
Technical University | 2017-2019
• Focus: Machine Learning

Bachelor of Science in Computer Science
Engineering University | 2013-2017

SKILLS
• Languages: Python, Java, JavaScript
• ML: TensorFlow, PyTorch, scikit-learn
• Cloud: AWS, Docker, Kubernetes
• Tools: Git, JIRA, Jenkins`,
    originalText: `PROFESSIONAL SUMMARY
Software Engineer with 4 years of experience in AI and machine learning.

PROFESSIONAL EXPERIENCE
AI Engineer | Google | 2021-Present
• Developed ML models for natural language processing
• Improved model accuracy by 25%
• Implemented automated testing pipeline

Software Engineer | IBM | 2019-2021
• Built RESTful APIs for ML services
• Optimized database queries
• Collaborated on CI/CD implementation

EDUCATION
Master of Science in Computer Science
MIT | 2017-2019
• Focus: Machine Learning

Bachelor of Science in Computer Science
Georgia Tech | 2013-2017

SKILLS
• Languages: Python, Java, JavaScript
• ML: TensorFlow, PyTorch, scikit-learn
• Cloud: AWS, Docker, Kubernetes
• Tools: Git, JIRA, Jenkins

CONTACT
Alex Wong
alex.wong@email.com
(555) 456-7890
GitHub: github.com/alexwong`,
    createdAt: new Date('2024-03-11'),
    updatedAt: new Date('2024-03-11')
  },
  {
    id: 'demo-ai-2',
    jobId: '6',
    scrubbedText: `PROFESSIONAL SUMMARY
AI Engineer specializing in computer vision and deep learning.

PROFESSIONAL EXPERIENCE
Machine Learning Engineer | Tech Company I | 2020-Present
• Developed computer vision models for object detection
• Reduced inference time by 40%
• Implemented model versioning system

Research Assistant | Tech University | 2018-2020
• Conducted research in deep learning
• Published 3 papers in top conferences
• Developed novel neural network architectures

EDUCATION
Master of Science in Artificial Intelligence
AI University | 2016-2018

Bachelor of Science in Computer Engineering
Engineering University | 2012-2016

SKILLS
• Deep Learning: CNN, RNN, Transformers
• Computer Vision: OpenCV, YOLO
• Languages: Python, C++, CUDA
• Tools: TensorFlow, PyTorch, Docker`,
    originalText: `PROFESSIONAL SUMMARY
AI Engineer specializing in computer vision and deep learning.

PROFESSIONAL EXPERIENCE
Machine Learning Engineer | NVIDIA | 2020-Present
• Developed computer vision models for object detection
• Reduced inference time by 40%
• Implemented model versioning system

Research Assistant | Stanford University | 2018-2020
• Conducted research in deep learning
• Published 3 papers in top conferences
• Developed novel neural network architectures

EDUCATION
Master of Science in Artificial Intelligence
Carnegie Mellon University | 2016-2018

Bachelor of Science in Computer Engineering
UC Berkeley | 2012-2016

SKILLS
• Deep Learning: CNN, RNN, Transformers
• Computer Vision: OpenCV, YOLO
• Languages: Python, C++, CUDA
• Tools: TensorFlow, PyTorch, Docker

CONTACT
Priya Patel
priya.patel@email.com
(555) 567-8901
GitHub: github.com/priyapatel`,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },

  // Account Manager Candidates
  {
    id: 'demo-am-1',
    jobId: '7',
    scrubbedText: `PROFESSIONAL SUMMARY
Account Manager with 5 years of experience in B2B sales and client relations.

PROFESSIONAL EXPERIENCE
Senior Account Manager | Tech Company J | 2021-Present
• Managed portfolio of 20 enterprise clients
• Increased client retention by 35%
• Led quarterly business reviews

Account Manager | Tech Company K | 2019-2021
• Handled 15 mid-market accounts
• Exceeded sales targets by 25%
• Developed client success strategies

EDUCATION
Bachelor of Business Administration
Business University | 2015-2019

SKILLS
• Sales: Negotiation, Pipeline Management
• CRM: Salesforce, HubSpot
• Communication: Client Presentations, Proposals
• Analysis: Sales Metrics, Forecasting`,
    originalText: `PROFESSIONAL SUMMARY
Account Manager with 5 years of experience in B2B sales and client relations.

PROFESSIONAL EXPERIENCE
Senior Account Manager | Oracle | 2021-Present
• Managed portfolio of 20 enterprise clients
• Increased client retention by 35%
• Led quarterly business reviews

Account Manager | SAP | 2019-2021
• Handled 15 mid-market accounts
• Exceeded sales targets by 25%
• Developed client success strategies

EDUCATION
Bachelor of Business Administration
NYU Stern | 2015-2019

SKILLS
• Sales: Negotiation, Pipeline Management
• CRM: Salesforce, HubSpot
• Communication: Client Presentations, Proposals
• Analysis: Sales Metrics, Forecasting

CONTACT
James Wilson
james.wilson@email.com
(555) 678-9012
LinkedIn: linkedin.com/in/jameswilson`,
    createdAt: new Date('2024-03-09'),
    updatedAt: new Date('2024-03-09')
  },
  {
    id: 'demo-am-2',
    jobId: '7',
    scrubbedText: `PROFESSIONAL SUMMARY
Strategic Account Manager with expertise in enterprise software sales.

PROFESSIONAL EXPERIENCE
Enterprise Account Manager | Tech Company L | 2020-Present
• Managed $5M+ enterprise accounts
• Developed strategic account plans
• Led cross-functional account teams

Sales Representative | Tech Company M | 2018-2020
• Generated new business opportunities
• Built relationships with key stakeholders
• Achieved 120% of sales quota

EDUCATION
Master of Business Administration
Business University | 2016-2018

Bachelor of Science in Marketing
Marketing University | 2012-2016

SKILLS
• Enterprise Sales: Strategic Planning, Negotiation
• CRM: Salesforce, Microsoft Dynamics
• Communication: Executive Presentations
• Analysis: Account Planning, Forecasting`,
    originalText: `PROFESSIONAL SUMMARY
Strategic Account Manager with expertise in enterprise software sales.

PROFESSIONAL EXPERIENCE
Enterprise Account Manager | Microsoft | 2020-Present
• Managed $5M+ enterprise accounts
• Developed strategic account plans
• Led cross-functional account teams

Sales Representative | Dell | 2018-2020
• Generated new business opportunities
• Built relationships with key stakeholders
• Achieved 120% of sales quota

EDUCATION
Master of Business Administration
Harvard Business School | 2016-2018

Bachelor of Science in Marketing
Boston University | 2012-2016

SKILLS
• Enterprise Sales: Strategic Planning, Negotiation
• CRM: Salesforce, Microsoft Dynamics
• Communication: Executive Presentations
• Analysis: Account Planning, Forecasting

CONTACT
Rachel Martinez
rachel.m@email.com
(555) 789-0123
LinkedIn: linkedin.com/in/rachelmartinez`,
    createdAt: new Date('2024-03-08'),
    updatedAt: new Date('2024-03-08')
  },

  // Support Specialist Candidates
  {
    id: 'demo-ss-1',
    jobId: '8',
    scrubbedText: `PROFESSIONAL SUMMARY
Customer Support Specialist with 2 years of experience in technical support.

PROFESSIONAL EXPERIENCE
Technical Support Specialist | Tech Company N | 2022-Present
• Resolved 50+ customer issues daily
• Maintained 95% customer satisfaction
• Created knowledge base articles

Customer Service Representative | Tech Company O | 2021-2022
• Handled customer inquiries via phone and email
• Processed customer orders and returns
• Trained new team members

EDUCATION
Associate's Degree in Information Technology
Community College | 2019-2021

SKILLS
• Technical Support: Troubleshooting, Debugging
• Tools: Zendesk, JIRA, Confluence
• Communication: Customer Service, Documentation
• Software: Windows, macOS, Linux`,
    originalText: `PROFESSIONAL SUMMARY
Customer Support Specialist with 2 years of experience in technical support.

PROFESSIONAL EXPERIENCE
Technical Support Specialist | Apple | 2022-Present
• Resolved 50+ customer issues daily
• Maintained 95% customer satisfaction
• Created knowledge base articles

Customer Service Representative | Best Buy | 2021-2022
• Handled customer inquiries via phone and email
• Processed customer orders and returns
• Trained new team members

EDUCATION
Associate's Degree in Information Technology
Seattle Central College | 2019-2021

SKILLS
• Technical Support: Troubleshooting, Debugging
• Tools: Zendesk, JIRA, Confluence
• Communication: Customer Service, Documentation
• Software: Windows, macOS, Linux

CONTACT
Taylor Brown
taylor.brown@email.com
(555) 890-1234
LinkedIn: linkedin.com/in/taylorbrown`,
    createdAt: new Date('2024-03-07'),
    updatedAt: new Date('2024-03-07')
  },
  {
    id: 'demo-ss-2',
    jobId: '8',
    scrubbedText: `PROFESSIONAL SUMMARY
Customer Support Specialist with expertise in SaaS product support.

PROFESSIONAL EXPERIENCE
Product Support Specialist | Tech Company P | 2022-Present
• Provided technical support for SaaS platform
• Reduced average resolution time by 30%
• Created training materials for customers

Help Desk Technician | Tech Company Q | 2021-2022
• Resolved IT support tickets
• Managed user accounts and permissions
• Documented technical procedures

EDUCATION
Bachelor of Science in Information Technology
Technology University | 2017-2021

SKILLS
• Technical Support: SaaS, Cloud Services
• Tools: Salesforce, ServiceNow, Slack
• Communication: Technical Writing, Training
• Software: AWS, Azure, Google Cloud`,
    originalText: `PROFESSIONAL SUMMARY
Customer Support Specialist with expertise in SaaS product support.

PROFESSIONAL EXPERIENCE
Product Support Specialist | Slack | 2022-Present
• Provided technical support for SaaS platform
• Reduced average resolution time by 30%
• Created training materials for customers

Help Desk Technician | Dropbox | 2021-2022
• Resolved IT support tickets
• Managed user accounts and permissions
• Documented technical procedures

EDUCATION
Bachelor of Science in Information Technology
University of Texas | 2017-2021

SKILLS
• Technical Support: SaaS, Cloud Services
• Tools: Salesforce, ServiceNow, Slack
• Communication: Technical Writing, Training
• Software: AWS, Azure, Google Cloud

CONTACT
Jordan Lee
jordan.lee@email.com
(555) 901-2345
LinkedIn: linkedin.com/in/jordanlee`,
    createdAt: new Date('2024-03-06'),
    updatedAt: new Date('2024-03-06')
  }
]; 