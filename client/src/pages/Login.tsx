// client/src/pages/Login.tsx

import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import { UserLogin } from '../interfaces/UserLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
      navigate('/'); // Redirect after successful login
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          value={loginData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
