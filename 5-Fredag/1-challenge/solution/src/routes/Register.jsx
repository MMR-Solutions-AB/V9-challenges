import { Link } from 'react-router-dom';

export default function Register() {
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
      <h2>Register</h2>
      <input type='text' placeholder='username' />
      <input type='text' placeholder='email' />
      <input type='date' placeholder='date of birth' />
      <input type='text' placeholder='password' />
      <input type='password' placeholder='repeat password' />
      <div>
        <input type='checkbox' />
        <label>I agree to the terms and conditions</label>
      </div>
      <button>Register</button>
    </main>
  );
}
