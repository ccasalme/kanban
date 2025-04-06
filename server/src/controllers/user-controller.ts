import { Request, Response } from 'express';
import { User } from '../models/user.js';

// GET /users
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// POST /users
export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const existing = await User.findOne({ where: { username } });

    if (existing) {
      return res.status(409).json({ message: 'Username already taken.' });
    }

    const newUser = await User.create({ username, password });
    const safeUser = { id: newUser.id, username: newUser.username };
    return res.status(201).json(safeUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// PUT /users/:id
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (username) user.username = username;
    if (password) user.password = password;

    await user.save();

    const safeUser = { id: user.id, username: user.username };
    return res.json(safeUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();
    return res.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
