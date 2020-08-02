import React, { useEffect } from "react";
import "./details-form.css";
import { v4 as uuidv4 } from "uuid";

import moment from "moment";
import { Collapse, Form, Input, DatePicker, Button, Select } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const { Panel } = Collapse;

const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
  new Date()
);
const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
  new Date()
);
const now = `${month} ${year}`;
const dateConfig = {
  rules: [{ required: true, message: "Please select time!" }],
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
  const detailsForm = useSelector((state) => state.detailsForm);
  const dispatch = useDispatch();
  const [educations, setEducations] = React.useState(detailsForm.educations);
  const changeEducation = (event, id) => {
    const { name, value } = event.target;
    const chosenIndex = educations.indexOf((edu) => edu.id === id);
    const newEducations = [...educations];
    newEducations[chosenIndex] = {
      ...newEducations[chosenIndex],
      [name]: value,
    };
    setEducations(newEducations);
    console.log("fired");
  };
  const addEducation = () => {
    const newEdu = {
      id: uuidv4(),
      school: "(Not specified)",
      degree: "",
      startDate: now,
      endDate: now,
      city: "",
      description: "",
    };
    setEducations([...educations, newEdu]);
    dispatch({ type: "detailsForm/addEducation", payload: newEdu });
  };
  const deleteEducation = (educationId) => {
    const deleteHelper = () => {
      dispatch({
        type: "detailsForm/deleteEducation",
        payload: educationId,
      });
      setEducations(
        educations.filter((education) => education.id !== educationId)
      );
    };
    return <CloseCircleOutlined onClick={deleteHelper} />;
  };
  const [skills, setSkills] = React.useState([
    {
      id: uuidv4(),
      skill: "(Not specified)",
      level: "Novice",
    },
  ]);
  const addSkill = () => {
    setSkills([
      ...skills,
      {
        id: uuidv4(),
        skill: "(Not specified)",
        level: "Novice",
      },
    ]);
  };
  const deleteSkill = (skillId) => {
    const removeSkill = () => {
      setSkills(skills.filter((skill) => skill.id !== skillId));
    };
    return <CloseCircleOutlined onClick={removeSkill} />;
  };
  const [experience, setExperience] = React.useState([
    {
      id: uuidv4(),
      jobTitle: "(Not specified)",
      Employer: "",
      startDate: now,
      endDate: now,
      city: "",
      description: "",
    },
  ]);
  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        jobTitle: "(Not specified)",
        employer: "",
        startDate: now,
        endDate: now,
        city: "",
        description: "",
      },
    ]);
  };
  const deleteExperience = (experienceId) => {
    const filterSelectedEducation = () => {
      setExperience(experience.filter((exp) => exp.id !== experienceId));
    };
    return <CloseCircleOutlined onClick={filterSelectedEducation} />;
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Education</h3>
      {educations.length !== 0 ? (
        <Collapse>
          {educations.map((education) => (
            <Panel
              key={education.id}
              header={`${education.school} | ${education.startDate} - ${education.endDate}`}
              extra={deleteEducation(education.id)}
            >
              <div style={{ display: "flex" }}>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="School:">
                    <Input
                      name="school"
                      value={education.school}
                      onChange={(event) => changeEducation(event, education.id)}
                    />
                  </Form.Item>
                  <Form.Item label="Date:" {...dateConfig}>
                    <DatePicker
                      placeholder="Start Date"
                      picker="month"
                      name="startDate"
                      value={moment(education.startDate)}
                      onChange={(event) => changeEducation(event, education.id)}
                    />
                    <DatePicker
                      placeholder="End Date"
                      picker="month"
                      name="endDate"
                      value={moment(education.endDate)}
                      onChange={(event) => changeEducation(event, education.id)}
                    />
                  </Form.Item>
                </Form>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Degree:">
                    <Input
                      name="degree"
                      value={education.degree}
                      onChange={(event) => changeEducation(event, education.id)}
                    />
                  </Form.Item>
                  <Form.Item label="City:">
                    <Input
                      name="city"
                      value={education.city}
                      onChange={(event) => changeEducation(event, education.id)}
                    />
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
                Description:
              </p>
              <TextArea
                rows={4}
                style={{ width: "92%" }}
                placeholder="e.g. PhD in Computer Science with 8 years of experience..."
                name="description"
                value={education.description}
                onChange={(event) => changeEducation(event, education.id)}
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
      {skills.length !== 0 ? (
        <Collapse>
          {skills.map((skill) => (
            <Panel
              key={skill.id}
              header={`${skill.skill} - ${skill.level}`}
              extra={deleteSkill(skill.id)}
            >
              <div style={{ display: "flex" }}>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Skill:">
                    <Input name="skill" />
                  </Form.Item>
                </Form>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Level:">
                    <Select>
                      <Option value="1">Novice</Option>
                      <Option value="2">Beginner</Option>
                      <Option value="3">Skillful</Option>
                      <Option value="4">Experienced</Option>
                      <Option value="5">Expert</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </div>
            </Panel>
          ))}
        </Collapse>
      ) : null}
      <Button
        type="dashed"
        block
        style={{
          marginTop: "1rem",
          color: "#40BCFF",
          borderColor: "#40BCFF",
        }}
        onClick={addSkill}
      >
        + Add skill
      </Button>
      <h3 style={{ marginTop: "1rem" }}>Work Experience</h3>
      {experience.length !== 0 ? (
        <Collapse>
          {experience.map((exp, index) => (
            <Panel
              key={exp.id}
              header={`${exp.jobTitle} | ${exp.startDate} - ${exp.endDate}`}
              extra={deleteExperience(exp.id)}
            >
              <div style={{ display: "flex" }}>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Job title:">
                    <Input name="jobTitle" />
                  </Form.Item>
                  <Form.Item label="Start & End date:" {...dateConfig}>
                    <RangePicker picker="month" />
                  </Form.Item>
                </Form>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Employer:">
                    <Input name="employer" />
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
                placeholder="e.g. Using influxDB for real-time data to reduce efficient cost..."
              />
            </Panel>
          ))}
        </Collapse>
      ) : null}
      <Button
        type="dashed"
        block
        style={{
          marginTop: "1rem",
          color: "#40BCFF",
          borderColor: "#40BCFF",
          marginBottom: "2rem",
        }}
        onClick={addExperience}
      >
        + Add experience
      </Button>
    </div>
  );
};

export default DetailsForm;
