import React, { useEffect, useState } from "react";
import "./info-form.css";

import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "antd";

const { TextArea } = Input;

const InfoForm = ({ someProps }) => {
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
  const infoForm = useSelector((state) => state.infoForm);
  const dispatch = useDispatch();

  const [personalDetails, setPersonalDetails] = useState(infoForm);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };
  useEffect(() => {
    dispatch({ type: "infoForm/inputInfo", payload: personalDetails });
  }, [dispatch, personalDetails]);

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
          <Form.Item label="Github:">
            <Input
              name="github"
              value={personalDetails.github}
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
          <Form.Item label="Linkedin:">
            <Input
              name="personalSite"
              value={personalDetails.personalSite}
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
        name="summary"
        value={personalDetails.summary}
        onChange={handleChange}
      />
    </div>
  );
};

export default InfoForm;
