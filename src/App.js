import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, Register } from "./components";

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/" exact>
          <Redirect to="/dashboard"></Redirect>
        </Route>
        <Route path="/dashboard">
          {isAuth ? "Dashboard" : <Redirect to="/login"></Redirect>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
