import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userAPI';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData>({
    id: null,
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: undefined,
    assignedUser: undefined
  });

  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);

  const getAllUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to retrieve user info', err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createTicket(newTicket);
      navigate('/');
    } catch (err) {
      console.error('Error creating ticket:', err);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({
      ...prev,
      [name]: name === 'assignedUserId' ? Number(value) : value
    }));
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <button
          type='button'
          onClick={handleClose}
          style={{
            alignSelf: 'flex-end',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            color: '#fff',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}
          aria-label='Close Create Ticket Form'
        >
          ✖
        </button>

        <h1>Create Ticket</h1>

        <label htmlFor='tName'>Ticket Name</label>
        <textarea
          id='tName'
          name='name'
          value={newTicket.name ?? ''}
          onChange={handleChange}
        />

        <label htmlFor='tStatus'>Ticket Status</label>
        <select
          name='status'
          id='tStatus'
          value={newTicket.status ?? ''}
          onChange={handleChange}
        >
          <option value='Todo'>Todo</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>

        <label htmlFor='tDescription'>Ticket Description</label>
        <textarea
          id='tDescription'
          name='description'
          value={newTicket.description ?? ''}
          onChange={handleChange}
        />

        <label htmlFor='tUserId'>Assign to User</label>
        <select
          name='assignedUserId'
          id='tUserId'
          value={newTicket.assignedUserId ?? ''}
          onChange={handleChange}
        >
          <option value='' disabled>Select a user</option>
          {users.map((user) => (
            <option key={user.id ?? ''} value={user.id ?? ''}>
              {user.username}
            </option>
          ))}
        </select>

        <button type='submit'>Submit Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;
