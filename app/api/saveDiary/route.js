// /app/api/saveDiary/route.js
import { NextResponse } from 'next/server';
// Adjust the path to your DB connection file
; // Adjust the path to your Diary model
import connectMongoDB from '@/lib/mongodb';
import Diary from '@/models/Dairy';
// Handle the POST request
export async function POST(req) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Parse the JSON data from the request body
    const body = await req.json();
    const { date, time, content } = body;
console.log(date, time, content)
    // Create a new diary entry in the database
    const newDiary = new Diary({
      date,
      time,
      content,
    });

    // Save the diary entry to the database
    await newDiary.save();

    // Return the saved diary entry as a response
    return NextResponse.json({ message: 'Diary saved successfully', diary: newDiary }, { status: 201 });
  } catch (error) {
    console.error('Error saving diary:', error);
    return NextResponse.json({ message: 'Error saving diary', error: error.message }, { status: 500 });
  }
}
