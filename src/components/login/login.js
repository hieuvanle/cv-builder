import React, { useState } from "react";
import "./login.css";
import background from "../../assets/background.svg";
import { Button } from "antd";

const Login = () => {
  return (
    <div className="container">
      <div className="container-left">
        <h2>CV BUILDER</h2>
        <div>
          <h3>Small Change, Big Impact</h3>
          <p>Get you ready for every interview</p>
          <Button type="primary" shape="round" size="large">
            VISIT A DEMO
          </Button>
        </div>
        <img src={background} alt="background"></img>
      </div>

      <div className="container-right">Hello</div>
    </div>
  );
};

export default Login;
