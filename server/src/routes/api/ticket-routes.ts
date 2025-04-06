import { Router } from 'express';
import {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
} from '../../controllers/ticket-controller.js';

const router = Router();

// @route   GET /api/tickets
// @desc    Get all tickets (supports query: status, assignedUserId, sortBy, order)
router.get('/', getAllTickets);

// @route   GET /api/tickets/:id
// @desc    Get a ticket by ID
router.get('/:id', getTicketById);

// @route   POST /api/tickets
// @desc    Create a new ticket
router.post('/', createTicket);

// @route   PUT /api/tickets/:id
// @desc    Update a ticket by ID
router.put('/:id', updateTicket);

// @route   DELETE /api/tickets/:id
// @desc    Delete a ticket by ID
router.delete('/:id', deleteTicket);

export { router as ticketRouter };
