import Table from '../components/Table';
import Button from '../components/Button';
export default function Dashboard({ users, onLogout }) {
  const headers = ['Usuario', 'Nombre', 'Rol'];
  const data = users.map(u => ({
    usuario: u.user,
    nombre: u.name,
    rol: u.role
  }));

  return (
    <div className="page">
      <h1>Panel de administrador</h1>
      <Table headers={headers} data={data} />
      <Button onClick={onLogout}>Cerrar sesión</Button>
    </div>
  );
}