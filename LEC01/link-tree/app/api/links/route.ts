import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  // TODO: Save the link data to your database here

  // Example response (replace with your DB logic)
  return NextResponse.json({
    id: Math.random().toString(36).substr(2, 9), // fake id
    ...data,
  });
}