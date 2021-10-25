import { createContext } from "react";
import { useQuery } from "urql";
interface AuthContextData {
  signed: boolean;
  Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const UserQuery = `query findByEmail ($email: String!){
                      user (email: $email){
                        id
                        name
                        email
                      }
                    }`;

export const AuthProvider: React.FC = ({ children }) => {
  async function Login() {
    const response = useQuery({
      query: UserQuery,
      variables: "john.doe@gmail.com",
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
