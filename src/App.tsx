import React from "react";
import { AuthProvider } from "./contexts/auth";

import Routes from "./routes";

function App() {
  return (
    // <Provider value={apolloClient}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    // </Provider>
  );
}

export default App;
