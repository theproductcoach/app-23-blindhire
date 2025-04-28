import { NextRequest, NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import OpenAI from 'openai';
import { CandidateStorage } from '../../utils/candidateStorage';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const jobId = formData.get('jobId') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!jobId) {
      return NextResponse.json(
        { error: 'No job ID provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a PDF or DOCX file.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    let extractedText: string;

    try {
      // Extract text based on file type
      if (file.type === 'application/pdf') {
        const pdfData = await pdfParse(buffer);
        extractedText = pdfData.text;
      } else {
        const result = await mammoth.extractRawText({ buffer });
        extractedText = result.value;
      }
    } catch (error) {
      console.error('Error extracting text from file:', error);
      return NextResponse.json(
        { error: 'Failed to extract text from the file. Please ensure the file is not corrupted.' },
        { status: 400 }
      );
    }

    if (!extractedText || extractedText.trim().length === 0) {
      return NextResponse.json(
        { error: 'No text could be extracted from the file.' },
        { status: 400 }
      );
    }

    try {
      // Process text with OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that removes personal identifying information from CVs while preserving professional details."
          },
          {
            role: "user",
            content: `Remove all personal identifying information from the following CV. This includes names, gender references, nationality, university names, email addresses, phone numbers, LinkedIn profiles, addresses, and dates of birth. Keep the work history, job titles, company names, and skills intact.\n\n${extractedText}`
          }
        ],
        temperature: 0.3,
      });

      const scrubbedText = completion.choices[0].message.content;

      if (!scrubbedText) {
        throw new Error('Failed to process text with OpenAI');
      }

      // Create a new candidate entry
      const newCandidate = {
        id: Date.now().toString(),
        jobId,
        scrubbedText,
        originalText: extractedText,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Save to storage
      CandidateStorage.save(newCandidate);

      return NextResponse.json({ 
        success: true,
        candidate: newCandidate
      });
    } catch (error) {
      console.error('Error processing with OpenAI:', error);
      return NextResponse.json(
        { error: 'Failed to process the text with AI. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing the file' },
      { status: 500 }
    );
  }
} 