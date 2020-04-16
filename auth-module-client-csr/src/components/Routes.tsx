import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../pages/Login";

export default () => (
  <Router>
    <Route path="/" component={Login} />
  </Router>
);
