import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signup = (email) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (users.find((u) => u.email === email)) {
      toast.error("User already exists!");
      return;
    }

    users.push({ email });
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    setUser({ email });
    localStorage.setItem("authUser", JSON.stringify({ email }));
    toast.success("Account created successfully!");
  };

  const login = (email) => {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const existingUser = users.find((u) => u.email === email);
    if (!existingUser) {
      toast.error("User not found! Please signup first.");
      return;
    }

    setUser({ email });
    localStorage.setItem("authUser", JSON.stringify({ email }));
    toast.success("Logged in successfully!");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook for easy usage
export const useAuth = () => useContext(AuthContext);
