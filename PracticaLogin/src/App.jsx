import "./components-styles.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";

import Home from "./page/Home";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import Profile from "./page/Profile";
import Error404 from "./page/Error404";
import ProtectedRoutes from "./routers/ProtectedRoutes";

import usersData from './data/users';

function App() {
  const [users] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (user, pass) => {
    const u = users.find(x => x.user === user && x.password === pass);
    if (u) {
      setCurrentUser(u);
      return u;
    }
    return false;
  };

  const logout = () => setCurrentUser(null);

  const isLoggedIn = !!currentUser;

  return (
    <Routes>
      {/* ruta pública */}
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to={currentUser?.role === 'admin' ? '/dashboard' : '/profile'} />
          ) : (
            <Login onLogin={login} />
          )
        }
      />

      {/* rutas protegidas */}
      <Route element={<ProtectedRoutes isAllowed={isLoggedIn} />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile user={currentUser} onLogout={logout} />}
        />
        <Route
          path="/dashboard"
          element={
            currentUser?.role === 'admin' ? (
              <Dashboard users={users} />
            ) : (
              <Navigate to="/profile" />
            )
          }
        />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;