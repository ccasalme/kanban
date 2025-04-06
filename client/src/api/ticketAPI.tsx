// client/src/api/ticketAPI.tsx
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import Auth from '../utils/auth';

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${Auth.getToken()}`
});

export const retrieveTickets = async (): Promise<TicketData[]> => {
  try {
    const response = await fetch('/api/tickets/', {
      headers: headers()
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('❌ Error retrieving tickets:', err);
    return [];
  }
};

export const retrieveTicket = async (id: number | null): Promise<TicketData> => {
  if (!id) return Promise.reject('Ticket ID is required');

  try {
    const response = await fetch(`/api/tickets/${id}`, {
      headers: headers()
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('❌ Error retrieving single ticket:', err);
    return Promise.reject('Could not fetch ticket');
  }
};

export const createTicket = async (body: TicketData): Promise<TicketData> => {
  try {
    const response = await fetch('/api/tickets/', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('❌ Error creating ticket:', err);
    return Promise.reject('Could not create ticket');
  }
};

export const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
  try {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('❌ Error updating ticket:', err);
    return Promise.reject('Update failed');
  }
};

export const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
  try {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: 'DELETE',
      headers: headers()
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('❌ Error deleting ticket:', err);
    return Promise.reject('Could not delete ticket');
  }
};
