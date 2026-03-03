import "./src/components-styles.css";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react"; 

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import ProtectedRoutes from "./routers/ProtectedRoutes";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
     

     <Route element={<ProtectedRoutes isAllowed={isLoggedIn} />}/>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
      
      {
      }
     
      <Route path="/users" element={<Users />}>
        <Route path="list" element={<UserList />} />
        <Route path=":id" element={<UserFindOne />} />
      </Route>
      {}
      
      <Route path="*" element={<Error404 />} />
    </Routes>
  ); 
}

export default App;