// AppInitializer.jsx
import React, { useEffect, useState } from "react";
import App from "./App.jsx";
import Loader from "./components/Loader.jsx";

const AppInitializer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate startup tasks (e.g., session check)
    const init = async () => {
      await new Promise((res) => setTimeout(res, 1500)); // Replace with real logic
      setLoading(false);
    };
    init();
  }, []);

  if (loading) return <Loader />;

  return <App />;
};

export default AppInitializer;
