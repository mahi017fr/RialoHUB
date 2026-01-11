
import { GoogleGenAI } from "@google/genai";

// Always initialize with named parameter and direct process.env.API_KEY access
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMatchInsight = async (home: string, away: string) => {
  try {
    // Correct usage of generateContent following @google/genai guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a very short, punchy technical preview (max 2 sentences) for the football match: ${home} vs ${away}. Focus on tactical trends or key players.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    // .text is a property, not a method
    return response.text || "Insight unavailable at the moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Tactical analysis pending data verification.";
  }
};
