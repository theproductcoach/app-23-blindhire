# BlindHire - Anonymous Recruitment Platform

BlindHire is a modern recruitment platform designed to promote fair hiring practices by removing personal identifying information from candidate applications. The platform allows companies to review candidates based solely on their professional experience and skills.

## Features

- **Anonymous Candidate Review**: Personal information is automatically removed from resumes using OpenAI's GPT-4o Assistants
- **Job Posting Management**: Create and manage job listings with detailed requirements
- **Candidate Tracking**: View and manage candidates for each job position
- **Modern Dark Mode UI**: Clean, professional interface with dark mode theme
- **File Processing**: Supports PDF and DOCX file uploads with intelligent text extraction
- **AI-Powered Scrubbing**: Uses OpenAI Assistants to intelligently remove personal information while preserving professional details

## Tech Stack

- **Frontend**: Next.js 15.3, TypeScript, Tailwind CSS 4
- **AI Processing**: OpenAI GPT-4o with Assistants API
- **File Processing**: OpenAI File API, mammoth (for DOCX)
- **Styling**: Tailwind CSS with custom dark mode theme

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API key
- OpenAI Assistant ID (for resume anonymization)

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd app-23-blindhire
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenAI credentials:

```
OPENAI_API_KEY=your_api_key_here
OPENAI_ASSISTANT_ID=your_assistant_id_here
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

### For Recruiters

1. **View Job Listings**: Browse all available positions
2. **Review Candidates**: View scrubbed candidate applications for each position
3. **Filter Candidates**: Filter candidates by job position
4. **View Details**: Click "View Details" to see the scrubbed candidate information

### For Candidates

1. **Select Position**: Choose the job you're applying for
2. **Upload Resume**: Submit your resume (PDF or DOCX)
3. **Automatic Processing**: Your resume will be automatically scrubbed of personal information using OpenAI's GPT-4o
4. **Confirmation**: Receive confirmation of your application

## How It Works

1. **File Upload**: Candidates upload their resumes in PDF or DOCX format
2. **File Processing**:
   - PDFs are processed using OpenAI's File API
   - DOCX files are processed using mammoth
3. **AI Anonymization**: The content is sent to a specialized OpenAI Assistant that:
   - Removes personal information (names, contact details, etc.)
   - Preserves professional experience and skills
   - Maintains document structure
   - Uses placeholders for removed information
4. **Storage**: Anonymized resumes are stored for recruiter review

## Project Structure

```
app/
├── api/              # API routes
│   ├── upload/      # File upload and processing
│   └── scrubber/    # Text anonymization
├── components/       # Reusable components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── page.tsx         # Homepage
├── jobs/            # Job listings
├── candidates/      # Candidate management
└── companies/       # Company information
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
