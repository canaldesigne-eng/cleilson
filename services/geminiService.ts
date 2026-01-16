
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { SYSTEM_INSTRUCTION } from "../constants";

export const getGeminiResponse = async (history: ChatMessage[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Convert history to contents format for Gemini 3
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "Desculpe, não consegui processar sua dúvida agora. Tente novamente em instantes.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Houve um erro na conexão com nosso assistente inteligente.";
  }
};
