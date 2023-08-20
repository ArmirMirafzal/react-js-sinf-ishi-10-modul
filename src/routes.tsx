import { Navigate, Outlet, Route, Routes as Switch } from 'react-router-dom'
import { useAuth } from 'modules/auth/context'
import { Auth, Home } from 'pages'

const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Switch>
      <Route path="home" element={isAuthenticated ? <Home /> : <Navigate to="/auth" />} />
      <Route path="auth" element={isAuthenticated ? <Navigate to="/home" /> : <Outlet />}>
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route path="*" index element={<Navigate to="/auth/login" />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Switch>
  )
}

export default Routes
