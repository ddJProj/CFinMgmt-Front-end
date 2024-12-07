//src/components/navigation/Navigate.tsx

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to dashboard after login
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
};

