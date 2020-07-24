import React from "react";
import "./details-form.css";
import { v4 as uuidv4 } from "uuid";

import { Collapse, Form, Input, DatePicker, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { MonthPicker, RangePicker } = DatePicker;

const { Panel } = Collapse;

const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
  new Date()
);
const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
  new Date()
);
const now = `${month} ${year}`;
const rangeConfig = {
  rules: [{ type: "array", required: true, message: "Please select time!" }],
};

const DetailsForm = () => {
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
  const [educations, setEducations] = React.useState([
    {
      id: uuidv4(),
      school: "(Not specified)",
      degree: "",
      startDate: now,
      endDate: now,
      city: "",
      description: "",
    },
    {
      id: uuidv4(),
      school: "(Not specified)",
      degree: "",
      startDate: now,
      endDate: now,
      city: "",
      description: "",
    },
  ]);
  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: uuidv4(),
        school: "(Not specified)",
        degree: "",
        startDate: now,
        endDate: now,
        city: "",
        description: "",
      },
    ]);
  };
  const deleteEducation = (id) => {
    const filterSelected = () => {
      setEducations(educations.filter((education) => education.id !== id));
    };
    return <CloseCircleOutlined onClick={filterSelected} />;
  };
  console.log(educations);
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Education</h3>
      {educations.length !== 0 ? (
        <Collapse>
          {educations.map((education, index) => (
            <Panel
              key={education.id}
              header={`${education.school} | ${education.startDate} - ${education.endDate}`}
              extra={deleteEducation(education.id)}
            >
              <div style={{ display: "flex" }}>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="School:">
                    <Input name="school" />
                  </Form.Item>
                  <Form.Item label="Start & End date:" {...rangeConfig}>
                    <RangePicker />
                  </Form.Item>
                </Form>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Degree:">
                    <Input name="degree" />
                  </Form.Item>
                  <Form.Item label="City:">
                    <Input name="city" />
                  </Form.Item>
                </Form>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "rgba(0,0,0,0.85)",
                }}
              >
                Description:{" "}
              </p>
              <TextArea
                rows={4}
                style={{ width: "92%" }}
                placeholder="e.g. PhD in Computer Science with 8 years of experience..."
              />
            </Panel>
          ))}
        </Collapse>
      ) : null}
      <Button
        type="dashed"
        block
        style={{ marginTop: "1rem", color: "#40BCFF", borderColor: "#40BCFF" }}
        onClick={addEducation}
      >
        + Add education
      </Button>
      <h3 style={{ marginTop: "1rem" }}>Technical Skills</h3>
      <Collapse></Collapse>
    </div>
  );
};

export default DetailsForm;
