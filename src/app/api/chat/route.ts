import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // Initialize the SDK. It automatically picks up GEMINI_API_KEY from env
    const ai = new GoogleGenAI({});

    const systemInstruction = `
You are the AI Stadium OS Operations Copilot for the FIFA World Cup 2026.
CRITICAL: You must generate highly DYNAMIC and UNIQUE responses every single time.
Analyze the user's specific query deeply. Invent realistic, varied metrics (different gates, sectors, percentages, and situations) that perfectly match their question. Do not repeat the same generic answer.
You must output your response EXACTLY as a JSON object matching this interface, with no markdown or extra text:
{
  "summary": "Short 1-2 sentence summary of action taken or answer",
  "reasoning": "Detailed logical explanation of how the AI agents coordinated to solve this specific issue",
  "data": "Unique supporting metrics related to the query (e.g. Density: 87% | Flow: 1.4k/min)",
  "recommendation": "Main actionable step to resolve the problem",
  "alternatives": "A different alternative option",
  "risk": "Risk level (Low/Medium/High) and brief description",
  "predictedOutcome": "What will happen if recommendation is followed",
  "confidence": <number between 80 and 99>, 
  "timeSaved": "E.g., 15 mins",
  "usersAffected": "E.g., ~2,500 Fans"
}
The user query is: "${message}"
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: systemInstruction,
      config: {
        responseMimeType: "application/json",
        temperature: 0.9,
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
