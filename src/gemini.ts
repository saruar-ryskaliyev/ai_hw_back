import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as any);

async function run() {
  const model = genAi.getGenerativeModel({model: "gemini-1.5-flash"});

  const prompt = "Once upon a time";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

}


export { run };