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
const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
  new Date()
);
const now = `${year}-${month}`;
const dateConfig = {
  rules: [{ required: true, message: "Please select time!" }],
};
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

const DetailsForm = () => {
  const detailsForm = useSelector((state) => state.detailsForm);
  const dispatch = useDispatch();
  //Education
  const [educations, setEducations] = React.useState(detailsForm.educations);
  const changeDateEducation = (date, index, property) => {
    const temp = [...educations];
    temp[index] = {
      ...temp[index],
      [property]: date,
    };
    setEducations(temp);
    dispatch({
      type: "detailsForm/inputEducation",
      payload: { index: index, data: temp[index] },
    });
  };
  const changeEducation = (event, index) => {
    const { name, value } = event.target;
    const temp = [...educations];
    temp[index] = {
      ...temp[index],
      [name]: value,
    };
    setEducations(temp);
    dispatch({
      type: "detailsForm/inputEducation",
      payload: { index: index, data: temp[index] },
    });
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
  //Skill
  const [skills, setSkills] = React.useState(detailsForm.skills);
  const changeSkill = (event, index) => {
    const { name, value } = event.target;
    const temp = [...skills];
    temp[index] = {
      ...temp[index],
      [name]: value,
    };
    setSkills(temp);
    dispatch({
      type: "detailsForm/inputSkill",
      payload: { index: index, data: temp[index] },
    });
  };
  const handleSelectSkill = (value, index) => {
    const temp = [...skills];
    temp[index] = {
      ...temp[index],
      level: value,
    };
    dispatch({
      type: "detailsForm/inputSkill",
      payload: { index: index, data: temp[index] },
    });
    setSkills(temp);
  };
  const addSkill = () => {
    const newSkill = {
      id: uuidv4(),
      skill: "(Not specified)",
      level: "Familiar",
    };
    setSkills([...skills, newSkill]);
    dispatch({ type: "detailsForm/addSkill", payload: newSkill });
  };
  const deleteSkill = (skillId) => {
    const deleteHelper = () => {
      dispatch({
        type: "detailsForm/deleteSkill",
        payload: skillId,
      });
      setSkills(skills.filter((skill) => skill.id !== skillId));
    };
    return <CloseCircleOutlined onClick={deleteHelper} />;
  };
  //Experience
  const [experience, setExperience] = React.useState(detailsForm.experience);
  const changeDateExperience = (date, index, property) => {
    const temp = [...experience];
    temp[index] = {
      ...temp[index],
      [property]: date,
    };
    setExperience(temp);
    dispatch({
      type: "detailsForm/inputExperience",
      payload: { index: index, data: temp[index] },
    });
  };
  const changeExperience = (event, index) => {
    const { name, value } = event.target;
    const temp = [...experience];
    temp[index] = {
      ...temp[index],
      [name]: value,
    };
    setExperience(temp);
    dispatch({
      type: "detailsForm/inputExperience",
      payload: { index: index, data: temp[index] },
    });
  };
  const addExperience = () => {
    const newExp = {
      id: uuidv4(),
      jobTitle: "(Not specified)",
      employer: "",
      startDate: now,
      endDate: now,
      city: "",
      description: "",
    };
    setExperience([...experience, newExp]);
    dispatch({ type: "detailsForm/addExperience", payload: newExp });
  };
  const deleteExperience = (experienceId) => {
    const deleteHelper = () => {
      dispatch({
        type: "detailsForm/deleteExperience",
        payload: experienceId,
      });
      setExperience(experience.filter((exp) => exp.id !== experienceId));
    };
    return <CloseCircleOutlined onClick={deleteHelper} />;
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Education</h3>
      {educations.length !== 0 ? (
        <Collapse>
          {educations.map((education, index) => (
            <Panel
              key={index}
              header={`${education.school} | ${education.startDate} - ${education.endDate}`}
              extra={deleteEducation(education.id)}
            >
              <div style={{ display: "flex" }}>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="School:">
                    <Input
                      name="school"
                      value={education.school}
                      onChange={(event) => changeEducation(event, index)}
                    />
                  </Form.Item>
                  <Form.Item label="Date:" {...dateConfig}>
                    <DatePicker
                      placeholder="Start Date"
                      picker="month"
                      name="startDate"
                      value={moment(education.startDate)}
                      onChange={(dateMoment, dateString) =>
                        changeDateEducation(dateString, index, "startDate")
                      }
                    />
                    <DatePicker
                      placeholder="End Date"
                      picker="month"
                      name="endDate"
                      value={moment(education.endDate)}
                      onChange={(dateMoment, dateString) => {
                        changeDateEducation(dateString, index, "endDate");
                      }}
                    />
                  </Form.Item>
                </Form>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Degree:">
                    <Input
                      name="degree"
                      value={education.degree}
                      onChange={(event) => changeEducation(event, index)}
                    />
                  </Form.Item>
                  <Form.Item label="City:">
                    <Input
                      name="city"
                      value={education.city}
                      onChange={(event) => changeEducation(event, index)}
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
                onChange={(event) => changeEducation(event, index)}
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
          {skills.map((skill, index) => (
            <Panel
              key={skill.id}
              header={`${skill.skill} - ${skill.level}`}
              extra={deleteSkill(skill.id)}
            >
              <div style={{ display: "flex" }}>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Skill:">
                    <Input
                      name="skill"
                      value={skill.skill}
                      onChange={(event) => changeSkill(event, index)}
                    />
                  </Form.Item>
                </Form>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Level:">
                    <Select
                      name="level"
                      value={skill.level}
                      onChange={(value) => handleSelectSkill(value, index)}
                    >
                      <Option value="Familiar">Familiar</Option>
                      <Option value="Experienced">Experienced</Option>
                      <Option value="Expert">Expert</Option>
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
                    <Input
                      name="jobTitle"
                      value={exp.jobTitle}
                      onChange={(event) => changeExperience(event, index)}
                    />
                  </Form.Item>
                  <Form.Item label="Date:" {...dateConfig}>
                    <DatePicker
                      placeholder="Start Date"
                      picker="month"
                      name="startDate"
                      value={moment(exp.startDate)}
                      onChange={(dateMoment, dateString) =>
                        changeDateExperience(dateString, index, "startDate")
                      }
                    />
                    <DatePicker
                      placeholder="End Date"
                      picker="month"
                      name="endDate"
                      value={moment(exp.endDate)}
                      onChange={(dateMoment, dateString) => {
                        changeDateExperience(dateString, index, "endDate");
                      }}
                    />
                  </Form.Item>
                </Form>
                <Form layout="vertical" {...formItemLayout}>
                  <Form.Item label="Employer:">
                    <Input
                      name="employer"
                      value={exp.employer}
                      onChange={(event) => changeExperience(event, index)}
                    />
                  </Form.Item>
                  <Form.Item label="City:">
                    <Input
                      name="city"
                      value={exp.city}
                      onChange={(event) => changeExperience(event, index)}
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
                placeholder="e.g. Using influxDB for real-time data to reduce efficient cost..."
                name="description"
                value={exp.description}
                onChange={(event) => changeExperience(event, index)}
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
