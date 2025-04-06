// client/src/api/userAPI.tsx
import Auth from '../utils/auth';
import { UserData } from '../interfaces/UserData';

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${Auth.getToken()}`
});

export const retrieveUsers = async (): Promise<UserData[]> => {
  try {
    const response = await fetch('/api/users', {
      headers: headers()
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('❌ Error retrieving users:', err);
    return [];
  }
};
