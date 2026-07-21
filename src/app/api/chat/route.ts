import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // Initialize the SDK. It automatically picks up GEMINI_API_KEY from env
    const ai = new GoogleGenAI({});

    const systemInstruction = `
You are the AI Stadium OS Operations Copilot for the FIFA World Cup 2026.
You must output your response EXACTLY as a JSON object matching this interface, with no markdown or extra text:
{
  "summary": "Short 1-2 sentence summary of action taken or answer",
  "reasoning": "How the AI agents coordinated to solve this",
  "data": "Supporting metrics (e.g. Density: 80% | Flow: 1.2k/min)",
  "recommendation": "Main action to take",
  "alternatives": "Alternative option",
  "risk": "Risk level and description",
  "predictedOutcome": "What will happen if recommendation is followed",
  "confidence": 95, 
  "timeSaved": "E.g., 12 mins",
  "usersAffected": "E.g., ~1,200 Fans"
}
The user query is: "${message}"
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: systemInstruction,
      config: {
        responseMimeType: "application/json",
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("No text returned from Gemini");
    }

    const data = JSON.parse(responseText);
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate response" },
      { status: 500 }
    );
  }
}
