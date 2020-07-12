import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, Register, Home } from "./components";
function App() {
  const [isAuth, setIsAuth] = React.useState(true);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!isAuth ? <Login /> : <Redirect to="/home"></Redirect>}
        </Route>
        <Route path="/register">
          {!isAuth ? <Register /> : <Redirect to="/home"></Redirect>}
        </Route>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          {isAuth ? <Home /> : <Redirect to="/login"></Redirect>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
