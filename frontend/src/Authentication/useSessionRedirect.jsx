// useSessionRedirect.js
import { useEffect } from "react";

const useSessionRedirect = (navigate) => {
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth-status", {
          credentials: "include",
        });
        const data = await res.json();
        if (data.isAuthenticated) {
          navigate("/");
        }
      } catch (err) {
        console.log("No session found.");
      }
    };

    checkSession();
  }, [navigate]);
};

export default useSessionRedirect;
