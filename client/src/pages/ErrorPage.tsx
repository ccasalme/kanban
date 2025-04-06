// client/src/pages/ErrorPage.tsx

import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💀 404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        The page you’re looking for no longer exists.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        It’s not you, I promise. It’s us.
      </p>
      <h2 style={{ fontSize: '2rem' }}>¯\_(ツ)_/¯</h2>
      <Link to='/' style={{ display: 'inline-block', marginTop: '2rem', fontWeight: 'bold', color: '#007bff' }}>
        🏠 Return to Board
      </Link>
    </section>
  );
};

export default ErrorPage;
