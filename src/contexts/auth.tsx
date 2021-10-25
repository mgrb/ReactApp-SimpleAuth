import { createContext } from "react";
import apolloClient from "../services/apolloClient";
interface AuthContextData {
  signed: boolean;
  Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const UserQuery = `query findByEmail ($ID: Int!){
                      user (id: $ID){
                        id
                        name
                        email
                      }
                    }`;

export const AuthProvider: React.FC = ({ children }) => {
  async function Login() {
    let response;
    apolloClient
      .query(UserQuery, { ID: 1 })
      .toPromise()
      .then((result) => {
        response = result.data;
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
