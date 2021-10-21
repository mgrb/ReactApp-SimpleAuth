import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";

// import { Container } from './styles';

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};

export default OtherRoutes;
