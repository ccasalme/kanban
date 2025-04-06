import { Request, Response } from 'express';
import { Ticket } from '../models/ticket.js';
import { User } from '../models/user.js';
import { FindOptions } from 'sequelize';

// GET /tickets?status=Todo&assignedUserId=1&sortBy=createdAt&order=asc
export const getAllTickets = async (req: Request, res: Response): Promise<Response> => {
  const { status, assignedUserId, sortBy = 'createdAt', order = 'asc' } = req.query;

  const where: any = {};
  if (status) where.status = status;
  if (assignedUserId) where.assignedUserId = Number(assignedUserId);

  const validSortFields = ['name', 'status', 'createdAt', 'updatedAt'];
  const isValidSort = validSortFields.includes(sortBy as string);
  const isValidOrder = ['asc', 'desc'].includes(order as string);

  const findOptions: FindOptions = {
    where,
    include: [{
      model: User,
      as: 'assignedUser',
      attributes: ['username'],
    }],
  };

  if (isValidSort && isValidOrder) {
    findOptions.order = [[sortBy as string, order as string]];
  }

  try {
    const tickets = await Ticket.findAll(findOptions);
    return res.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// GET /tickets/:id
export const getTicketById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findByPk(id, {
      include: [{
        model: User,
        as: 'assignedUser',
        attributes: ['username'],
      }],
    });

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    return res.json(ticket);
  } catch (error) {
    console.error('Error fetching ticket:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// POST /tickets
export const createTicket = async (req: Request, res: Response): Promise<Response> => {
  const { name, status, description, assignedUserId } = req.body;

  if (!name || !status || !description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newTicket = await Ticket.create({ name, status, description, assignedUserId });
    return res.status(201).json(newTicket);
  } catch (error) {
    console.error('Error creating ticket:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// PUT /tickets/:id
export const updateTicket = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { name, status, description, assignedUserId } = req.body;

  try {
    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    if (name) ticket.name = name;
    if (status) ticket.status = status;
    if (description) ticket.description = description;
    if (assignedUserId !== undefined) ticket.assignedUserId = assignedUserId;

    await ticket.save();

    return res.json(ticket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /tickets/:id
export const deleteTicket = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    await ticket.destroy();
    return res.json({ message: 'Ticket deleted' });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
