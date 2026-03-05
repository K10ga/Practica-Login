import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes({ isAllowed = false, redirectTo = '/login' }) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
}

export default ProtectedRoutes
