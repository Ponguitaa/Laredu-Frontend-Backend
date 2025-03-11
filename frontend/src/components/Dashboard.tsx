// src/components/Dashboard.tsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Bienvenido a Laredu</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Link
          to="/courses"
          className="p-5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all transform hover:scale-105"
        >
          📚 Ver Cursos
        </Link>
        <Link
          to="/subjects"
          className="p-5 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-all transform hover:scale-105"
        >
          🏫 Ver Asignaturas
        </Link>
        <Link
          to="/assignments"
          className="p-5 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-500 transition-all transform hover:scale-105"
        >
          ✏️ Ver Tareas
        </Link>
        <Link
          to="/submissions"
          className="p-5 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105"
        >
          📤 Ver Entregas
        </Link>
        <Link
          to="/messages"
          className="p-5 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition-all transform hover:scale-105"
        >
          💬 Ver Mensajes
        </Link>
      </div>
    </div>
  );
}
