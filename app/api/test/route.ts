import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({ 
      success: true,
      message: 'Test route working'
    });
  } catch (error) {
    console.error('Error in test route:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 