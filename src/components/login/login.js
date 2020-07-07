import React, { useRef, useEffect } from "react";
import "./login.css";

import avatar from "../../assets/avatar.svg";
import Layout from "../layout/layout";
import { Checkbox } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  });
  return (
    <Layout>
      <div className="login-content">
        <form>
          <img src={avatar} alt="avatar" />
          <h2 className="title">Welcome back!</h2>
          <div className="input-div one">
            <div className="i">
              <UserOutlined />
            </div>
            <div className="div">
              <input
                type="text"
                className="input"
                placeholder="Email"
                ref={focusRef}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <LockOutlined />
            </div>
            <div className="div">
              <input type="password" className="input" placeholder="Password" />
            </div>
          </div>
          <div className="form-func">
            <Checkbox>Remember me</Checkbox>
            <a href="/" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button className="button login">LOGIN</button>
          <p>Don't have an account?</p>
          <Link to="/register">
            <button className="button register">SIGN UP</button>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
