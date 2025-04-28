import { NextRequest, NextResponse } from 'next/server';
import { Candidate } from '../../types/candidate';

export async function POST(request: NextRequest) {
  try {
    const { text, jobId } = await request.json();

    if (!text || !jobId) {
      return NextResponse.json(
        { error: 'Text and job ID are required' },
        { status: 400 }
      );
    }

    // Send the text to GPT for scrubbing (mocked for now)
    const scrubbedText = await scrubWithGPT(text);

    // Create a new candidate with scrubbed text
    const candidate: Candidate = {
      id: crypto.randomUUID(),
      jobId,
      scrubbedText,
      originalText: text,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Return the candidate for client-side storage
    return NextResponse.json({ candidate });
  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json(
      { error: 'Failed to process the file' },
      { status: 500 }
    );
  }
}

// Mock GPT call (replace with OpenAI API call in production)
async function scrubWithGPT(text: string): Promise<string> {
  // TODO: Replace this with a real OpenAI API call
  return `APPLICANT #${Math.floor(Math.random() * 1000)}\n` + text;
} 