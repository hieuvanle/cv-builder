import React, { useEffect, useState } from "react";
import "./template1.css";

import { useSelector } from "react-redux";
import Hoek from "@hapi/hoek";

const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
  new Date()
);
const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
  new Date()
);
const now = `${year}-${month}`;

const FirstTemplate = () => {
  const initialInfoForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    github: "",
    personalSite: "",
    summary: "",
  };
  const infoForm = useSelector((state) => state.infoForm);
  const detailsForm = useSelector((state) => state.detailsForm);
  const { educations, skills, experience } = detailsForm;
  const initialEdu = [
    {
      id: educations[0].id,
      school: "(Not specified)",
      degree: "",
      startDate: now,
      endDate: now,
      city: "",
      description: "",
    },
  ];
  const initialSkill = [
    {
      id: skills[0].id,
      skill: "(Not specified)",
      level: "Familiar",
    },
  ];
  const initialExp = [
    {
      id: experience[0].id,
      jobTitle: "(Not specified)",
      employer: "",
      startDate: now,
      endDate: now,
      city: "",
      description: "",
    },
  ];
  const levelConverter = (level) => {
    switch (level) {
      case "Familiar":
        return "20%";
      case "Experienced":
        return "45%";
      case "Advanced":
        return "70%";
      case "Expert":
        return "90%";
      default:
        return level;
    }
  };

  return (
    <div className="resume_right">
      {!Hoek.deepEqual(infoForm, initialInfoForm) ? (
        <div className="resume_item resume_about">
          <div className="title">
            <p className="bold" style={{ margin: 0, textAlign: "center" }}>
              {`${infoForm.firstName} ${infoForm.lastName}`}
            </p>
            <h4
              style={{ margin: 0, textAlign: "center", fontWeight: "normal" }}
            >
              {detailsForm.jobTitle}
            </h4>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {infoForm.phone ? (
                <div>
                  <span>Phone: </span>
                  <span>{infoForm.phone}</span>
                </div>
              ) : null}
              {infoForm.email ? (
                <div>
                  <span>Email: </span>
                  <span>{infoForm.email}</span>
                </div>
              ) : null}
            </div>
            <div>
              {infoForm.github ? (
                <div>
                  <span>Github: </span>
                  <span>
                    <a href={infoForm.github} style={{ color: "#0bb5f4" }}>
                      {infoForm.github}
                    </a>
                  </span>
                </div>
              ) : null}
              {infoForm.personalSite ? (
                <div>
                  <span>Linkedin: </span>
                  <span>
                    <a
                      href={infoForm.personalSite}
                      style={{ color: "#0bb5f4" }}
                    >
                      {infoForm.personalSite}
                    </a>
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      {!Hoek.deepEqual(experience, initialExp) ? (
        <div className="resume_item">
          <div className="title">
            <p className="bold">Work Experience</p>
          </div>
          <ul>
            {experience.map((exp) => (
              <li key={exp.id}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      {exp.employer ? (
                        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                          {exp.employer}
                        </p>
                      ) : null}
                      {exp.city ? (
                        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                          {`, ${exp.city} `}
                        </p>
                      ) : null}
                      {exp.jobTitle !== "(Not specified)" ? (
                        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                          {` - ${exp.jobTitle}`}
                        </p>
                      ) : null}
                    </div>
                    {exp.startDate && exp.endDate !== now ? (
                      <p style={{ marginBottom: 0 }}>
                        {`${exp.startDate}`}
                        {` - ${exp.endDate}`}
                      </p>
                    ) : null}
                  </div>
                  <p>{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {!Hoek.deepEqual(educations, initialEdu) ? (
        <div className="resume_item">
          <div className="title">
            <p className="bold">Education</p>
          </div>
          <ul>
            {educations.map((edu) => (
              <li key={edu.id}>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex" }}>
                      {edu.school !== "(Not specified)" ? (
                        <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                          {edu.school}
                        </p>
                      ) : null}
                      <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                        {edu.degree}
                      </p>
                    </div>
                    {edu.startDate && edu.endDate !== now ? (
                      <p style={{ marginBottom: 0 }}>
                        {`${edu.startDate}`}
                        {` - ${edu.endDate}`}
                      </p>
                    ) : null}
                  </div>
                  <p>{edu.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {!Hoek.deepEqual(skills, initialSkill) ? (
        <div className="resume_item">
          <div className="title">
            <p className="bold">Skills</p>
          </div>
          {skills.map((skill) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ width: "40%", marginBottom: 0, marginLeft: "18px" }}>
                {skill.skill}
              </p>
              <div
                style={{
                  border: "1px solid #69c0ff",
                  width: "10rem",
                  height: "16px",
                  margin: "auto 0",
                }}
              >
                <div
                  style={{
                    background: "#1890ff",
                    height: "14px",
                    width: `${levelConverter(skill.level)}`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FirstTemplate;
