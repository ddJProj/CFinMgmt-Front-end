// src/hooks/useLogin.ts
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    const result = await login(email, password);
    if (result) {
      navigate("/dashboard");
    }
  };

  return { handleLogin };
};

