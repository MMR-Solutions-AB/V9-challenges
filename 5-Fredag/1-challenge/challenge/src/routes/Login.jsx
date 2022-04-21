import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main
      style={{
        padding: '1rem 40%',
        gap: 10,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to='/'>← Go back</Link>
      <h2>Login</h2>
      <input type='text' placeholder='username' />
      <input type='password' placeholder='password' />
      <button>Login</button>
    </main>
  );
}
