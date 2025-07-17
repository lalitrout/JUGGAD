import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Authentication/Firebase";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();

          const res = await axios.post(
            "http://localhost:5000/auth-status",
            { token },
            { withCredentials: true }
          );

          if (res.data.isAuthenticated) {
            setIsAuthenticated(true);
            setUser(firebaseUser);
          } else {
            setIsAuthenticated(false);
            setUser(null);
          }
        } catch (err) {
          console.error("Auth check failed:", err.message);
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
