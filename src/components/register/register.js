import React, { useRef, useEffect, useState } from "react";
import "./register.css";

import Layout from "../layout/layout";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";

const Register = () => {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(null);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", user);
      setSuccess(true);
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
      setSuccess(false);
    }
  };
  return (
    <Layout>
      <div className="login-content">
        <form onSubmit={onSubmit}>
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
                name="name"
                value={user.name}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-div one">
            <div className="i">
              <MailOutlined />
            </div>
            <div className="div">
              <input
                type="text"
                className="input"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <LockOutlined />
            </div>
            <div className="div">
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={onChange}
              />
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
