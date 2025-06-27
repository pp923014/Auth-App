import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        AuthApp
      </Link>

      <div>
        {user ? (
          <>
            {/* <span className="mr-4 text-gray-700">Hi, {user.email}</span> */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4 text-blue-600 hover:underline">
              Login
            </Link>
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
