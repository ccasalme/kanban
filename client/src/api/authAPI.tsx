// client/src/api/authAPI.tsx
import { UserLogin } from '../interfaces/UserLogin';

const login = async (userInfo: UserLogin): Promise<{ token: string }> => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to login');
    }

    return data;
  } catch (err) {
    console.error('Login error:', err);
    return Promise.reject(err);
  }
};

export { login };
