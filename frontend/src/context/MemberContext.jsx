// context/MemberContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [isMember, setIsMember] = useState(null); // null means "not checked yet"
  const [loading, setLoading] = useState(true);

  const fetchMembership = async () => {
    try {
      const res = await axios.get("http://localhost:5000/membership", {
        withCredentials: true,
      });
      setIsMember(res.data.isMember);
    } catch (err) {
      console.error("Error checking membership:", err.message);
      setIsMember(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembership();
  }, []);

  return (
    <MemberContext.Provider value={{ isMember, setIsMember, loading }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMember = () => useContext(MemberContext);
