import React, { useState } from "react";
import "./login.css";

import avatar from "../../assets/avatar.svg";
import Layout from "../layout/layout";
import { Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
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
              <input type="text" className="input" placeholder="Email" />
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
          <button className="btn login">LOGIN</button>
          <p>Don't have an account?</p>
          <button className="btn register">SIGN UP</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
