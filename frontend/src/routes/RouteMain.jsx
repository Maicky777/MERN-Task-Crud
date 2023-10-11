import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Proyectos } from '../pages/Proyectos'

export const RouteMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/projects"
          element={<Proyectos />}
        />
      </Routes>
    </BrowserRouter>
  )
}
