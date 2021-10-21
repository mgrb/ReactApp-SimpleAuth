import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";

// import { Container } from './styles';

const Login: React.FC = () => {
  const context = useContext(AuthContext);
  console.log(context);

  function handleLogin() {
    context.Login();
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
