import React, { useState } from "react";
import "./register.css";

import avatar from "../../assets/avatar.svg";
import Layout from "../layout/layout";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const Register = () => {
  return (
    <Layout>
      <div className="login-content">
        <form>
          <h2 className="title">Create Account</h2>
          <div className="input-div one">
            <div className="i">
              <UserOutlined />
            </div>
            <div className="div">
              <input type="text" className="input" placeholder="Name" />
            </div>
          </div>
          <div className="input-div one">
            <div className="i">
              <MailOutlined />
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
          <div className="footer">
            <p>
              By clicking on Sign up, you agree to CV Builder's{" "}
              <a>Terms and Conditions of Use</a>.
            </p>
            <p>
              To learn more about how CV Builder collects, uses, shares and
              protects your personal data please read CV Builder's{" "}
              <a>Privacy Policy</a>.
            </p>
          </div>
          <button className="btn login">SIGN UP</button>
          <p>
            Already have an account? <a href="/login">Log in</a>.
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
