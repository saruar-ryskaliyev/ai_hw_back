import { Router } from 'express';
import aiRouter from './ai/routers/aiRouter';

const globalRouter = Router();
globalRouter.use('/ai', aiRouter);

export default globalRouter;
