import { useContext } from "react";
import AuthContext from "./AuthContext";

// Custom hook to access auth context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
//example usage in 
// import useAuth from "../context/useAuth";

// const Dashboard = () => {
//   const { isAuthenticated, user, loading } = useAuth();

//   if (loading) return <p>Loading...</p>;