import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/register'>Register</Link>
      </nav>
    </div>
  );
}
