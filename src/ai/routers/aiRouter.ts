import { Router } from 'express';
import { generateText } from '../controllers/aiController';

const router = Router();

router.post('/generate-text', generateText);

export default router;
