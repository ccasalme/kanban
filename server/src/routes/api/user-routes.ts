import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../../controllers/user-controller.js';

const router = Router();

/**
 * @route   GET /api/users
 * @desc    Fetch all users (excluding passwords)
 */
router.get('/', getAllUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Fetch a user by ID
 */
router.get('/:id', getUserById);

/**
 * @route   POST /api/users
 * @desc    Create a new user
 */
router.post('/', createUser);

/**
 * @route   PUT /api/users/:id
 * @desc    Update an existing user
 */
router.put('/:id', updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user by ID
 */
router.delete('/:id', deleteUser);

export { router as userRouter };


//=================//
// Cyrl's Notes: for future me who is reading this code (and probably laughing now)...
//=================//
// Swapped express.Router() → Router()	Consistent import style with other routes
// Used JSDoc block comments	Editor-friendly + API docs ready
// Matched the structure of ticket-routes.ts	Consistency across routes
