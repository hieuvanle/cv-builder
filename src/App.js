import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, Register, DashBoard } from "./components";
function App() {
  const [isAuth, setIsAuth] = React.useState(true);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!isAuth ? <Login /> : <Redirect to="/dashboard"></Redirect>}
        </Route>
        <Route path="/register">
          {!isAuth ? <Register /> : <Redirect to="/dashboard"></Redirect>}
        </Route>
        <Route path="/" exact>
          <Redirect to="/dashboard"></Redirect>
        </Route>
        <Route path="/dashboard">
          {isAuth ? <DashBoard /> : <Redirect to="/login"></Redirect>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
