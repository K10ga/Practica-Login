import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigate();

  const submit = e => {
    e.preventDefault();
    const loggedInUser = onLogin(user, pass);
    if (loggedInUser) {
      const redirectTo = loggedInUser.role === 'admin' ? '/dashboard' : '/profile';
      nav(redirectTo);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={submit}>
        <Input
          placeholder="Usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <Button type="submit">Ingresar</Button>
      </form>
    </div>
  );
}