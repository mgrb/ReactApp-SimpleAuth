import { createContext } from "react";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  async function Login() {
    const response = await api.post("/login", {
      email: "exemple@email.com",
      password: "123123",
    });

    console.log(response);
  }

  return (
    <AuthContext.Provider value={{ signed: true, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
