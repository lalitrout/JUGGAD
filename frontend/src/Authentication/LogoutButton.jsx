// utils/logoutUser.js
import useAuth from '../context/UseAuth';

export const useLogoutUser = () => {
  const { setIsAuthenticated } = useAuth();

  const logoutUser = async () => {
    try {
      const res = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        setIsAuthenticated(false);
        console.log("Logged out successfully");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return logoutUser;
};
