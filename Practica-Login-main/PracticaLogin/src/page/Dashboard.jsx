import Table from '../components/Table';
import Button from '../components/Button';
import '../assets/estilodashboard.css';
export default function Dashboard({ users, onLogout }) {
  const headers = ['Usuario', 'Nombre', 'Rol'];
  const data = users.map(u => ({
    usuario: u.user,
    nombre: u.name,
    rol: u.role
  }));

  return (
      <div className="dashboard-container">
        <div className="page">
          <h1>Panel de administrador</h1>
          <Table headers={headers} data={data} />
          <Button onClick={onLogout}>Cerrar sesión</Button>
        </div>
      </div>
  );
}