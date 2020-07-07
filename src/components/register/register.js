import React, { useRef, useEffect } from "react";
import "./register.css";

import Layout from "../layout/layout";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const Register = () => {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  });
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
              <input
                type="text"
                className="input"
                placeholder="Name"
                ref={focusRef}
              />
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
              <a href="/register">Terms and Conditions of Use</a>.
            </p>
            <p>
              To learn more about how CV Builder collects, uses, shares and
              protects your personal data please read CV Builder's{" "}
              <a href="/register">Privacy Policy</a>.
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
