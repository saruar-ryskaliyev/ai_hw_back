import { Request, Response } from 'express';
import { AIService } from '../services/aiService';

const aiService = new AIService();

export const generateText = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const text = await aiService.generateText(prompt);
    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate text' });
  }
};
