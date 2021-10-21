import React from "react";
import { Provider } from "urql";
import { AuthProvider } from "./contexts/auth";

import Routes from "./routes";
import apolloClient from "./services/apolloClient";

function App() {
  return (
    <Provider value={apolloClient}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}

export default App;
