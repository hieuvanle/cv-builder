import React from "react";
import "./template1.css";

import { useSelector } from "react-redux";

const FirstTemplate = () => {
  const infoForm = useSelector((state) => state.infoForm);
  const detailsForm = useSelector((state) => state.detailsForm);
  const { educations, skills, experience } = detailsForm;
  return (
    <div className="resume_right">
      <div className="resume_item resume_about">
        <div className="title">
          <p className="bold" style={{ margin: 0, textAlign: "center" }}>
            Thomas Hanson
          </p>
          <h4 style={{ margin: 0, textAlign: "center", fontWeight: "normal" }}>
            Software Engineer
          </h4>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div>
              <span>Phone: </span>
              <span>(612)-433-1354</span>
            </div>
            <div>
              <span>Email: </span>
              <span>thomas.hanson@stthomas.edu</span>
            </div>
          </div>
          <div>
            <div>
              <span>Github: </span>
              <span>
                <a style={{ color: "#0bb5f4" }}>github.com/thomashanson</a>
              </span>
            </div>
            <div>
              <span>Linkedin: </span>
              <span>
                <a style={{ color: "#0bb5f4" }}>linkedin.com/in/thanson</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume_item">
        <div className="title">
          <p className="bold">Work Experience</p>
        </div>
        <ul>
          <li>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                  Target Inc - Software Engineer
                </p>
                <p style={{ marginBottom: 0 }}>2013-2020</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="resume_item">
        <div className="title">
          <p className="bold">Education</p>
        </div>
        <ul>
          <li>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                  University of St.Thomas | B.S in Computer Science
                </p>
                <p style={{ marginBottom: 0 }}>2013-2020</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="resume_item">
        <div className="title">
          <p className="bold">Skills</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ width: "40%", marginBottom: 0, marginLeft: "18px" }}>
            Python
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
              style={{ background: "#1890ff", height: "14px", width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
      {infoForm.summary}
    </div>
  );
};

export default FirstTemplate;
