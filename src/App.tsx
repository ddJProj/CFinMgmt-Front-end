// app.tsx
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ROUTER_CONFIG } from "./constants/router.constants";
import { fetchSession, getSession } from "./utils/session";

const App: React.FC = () => {
  const [session, setSession] = useState<{ role: string; permissions: string[] } | null>(null);
  const { token } = getSession();

  useEffect(() => {
    if (token) {
      fetchSession(token)
        .then((data) => setSession(data))
        .catch(() => {
          setSession(null);
          localStorage.clear(); // Log out the user if session fetch fails
        });
    }
  }, [token]);

  const renderRoute = ({ path, element, isProtected, permissions }: any) => {
    if (isProtected) {
      if (!token || !session) {
        return <Navigate to="/login" />;
      }

      if (permissions && !permissions.some((perm: string) => session.permissions.includes(perm))) {
        return <Navigate to="/login" />;
      }
    }

    return element;
  };

  return (
    <Router>
      <Routes>
        {ROUTER_CONFIG.map((route) => (
          <Route key={route.path} path={route.path} element={renderRoute(route)} />
        ))}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

