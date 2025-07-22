import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';
import { MemberProvider } from "./context/MemberContext.jsx";
import AppInitializer from './AppInitializer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MemberProvider>
      <AppInitializer />
      </MemberProvider>
    </AuthProvider>
  </StrictMode>
);
