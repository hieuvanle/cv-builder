import React from "react";
import { Form, Input, Tooltip, AutoComplete, Row, Col, DatePicker } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 30 },
  },
};

const rangeConfig = {
  rules: [{ type: "array", required: true, message: "Please select time!" }],
};

const InfoForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = React.useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      style={{ margin: "auto" }}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="social link"
        label="Social link"
        rules={[
          {
            required: true,
            message: "Please input your social link!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="website"
        label="Website"
        rules={[{ required: true, message: "Please input website!" }]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
          <Input />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        name="education"
        label="Education"
        rules={[
          {
            required: true,
            message: "Please input your education!",
          },
        ]}
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input the captcha you got!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="range-picker" {...rangeConfig}>
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default InfoForm;
