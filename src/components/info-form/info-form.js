import React from "react";
import "./info-form.css";

import { Form, Input } from "antd";

const { TextArea } = Input;

const InfoForm = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const [personalDetails, setPersonalDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
    console.log(personalDetails);
  };
  return (
    <div style={{ marginTop: "1rem", marginLeft: "4rem" }}>
      <h3>Personal Details</h3>
      <div style={{ display: "flex" }}>
        <Form layout="vertical" {...formItemLayout}>
          <Form.Item label="First name:">
            <Input
              name="firstName"
              value={personalDetails.firstName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Email:">
            <Input
              name="email"
              value={personalDetails.email}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Job title:">
            <Input
              name="jobTitle"
              value={personalDetails.email}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
        <Form layout="vertical" {...formItemLayout}>
          <Form.Item label="Last name:">
            <Input
              name="lastName"
              value={personalDetails.lastName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Phone:">
            <Input
              name="phone"
              value={personalDetails.phone}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Personal site:">
            <Input
              name="personalSite"
              value={personalDetails.phone}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </div>
      <h3 style={{ marginBottom: "1rem" }}>Professional Summary</h3>
      <TextArea
        rows={4}
        style={{ width: "92%" }}
        placeholder="e.g. PhD in Computer Science with 8 years of experience..."
      />
    </div>
  );
};

export default InfoForm;
