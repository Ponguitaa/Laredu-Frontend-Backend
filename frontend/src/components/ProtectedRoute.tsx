// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // Si el token existe, permite el acceso a las rutas protegidas
  // Si no existe, redirige al usuario a la página de inicio de sesión
  return token ? <Outlet /> : <Navigate to="/" replace />;
}
