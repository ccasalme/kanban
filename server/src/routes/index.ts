import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();
// Public route (no token required)
router.use('/auth', authRoutes);

router.use('/api', authenticateToken, apiRoutes); // ✅ token-locked


export default router;
