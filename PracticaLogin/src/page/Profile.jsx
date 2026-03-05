import '../assets/estiloprofile.css';
import Button from '../components/Button';

export default function Profile({ user, onLogout }) {
  return (
    <div className="profile-page">
      <h1>Perfil</h1>
      <p>Bienvenido {user?.name}</p>
      <Button onClick={onLogout}>Cerrar sesión</Button>
    </div>
  );
}