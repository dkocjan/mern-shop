import { Router } from 'express';
import { userRouter } from './resources/user';
import { apiErrorHandler } from './modules/errorHandler';

export const router = Router();

router.use('/user', userRouter);

// Rest api error handler
router.use(apiErrorHandler);
