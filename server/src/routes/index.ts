import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// Public route for login
router.use('/auth', authRoutes);

// 🔒 Protect all /api routes with one middleware
router.use('/api', authenticateToken, apiRoutes);

export default router;
