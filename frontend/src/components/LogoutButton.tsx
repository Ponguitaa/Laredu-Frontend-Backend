// src/components/LogoutButton.tsx
interface LogoutProps {
    onLogout: () => void;
  }
  
  export default function LogoutButton({ onLogout }: LogoutProps) {
    return (
      <button
        onClick={onLogout}
        className="bg-red-600 text-white p-2 rounded hover:bg-red-500 mt-4"
      >
        Cerrar Sesión
      </button>
    );
  }
  