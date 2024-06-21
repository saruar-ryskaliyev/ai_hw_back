import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as any);

export class AIService {
  private model;

  constructor() {
    this.model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async generateText(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}
