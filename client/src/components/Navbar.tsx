// client/src/components/Navbar.tsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(auth.loggedIn());
  }, []);

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
        {!isLoggedIn ? (
          <li className='nav-item'>
            <Link to='/login'>
              <button type='button'>Login</button>
            </Link>
          </li>
        ) : (
          <li className='nav-item'>
            <button type='button' onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
