


function ProtectedRoutes  ({isAllowed = false})  {
    if(!isAllowed){
        return <Navigate to="/login"/>
    }
  return <Outlet/>
}

export default ProtectedRoutes
