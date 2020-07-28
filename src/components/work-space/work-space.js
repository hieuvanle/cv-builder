import React from "react";
import "./work-space.css";

import InfoForm from "../info-form/info-form";
import DetailsForm from "../details-form/details-form";

const WorkSpace = ({ step, next, prev }) => {
  const [userInfo, setUserInfo] = React.useState({
    fullName: "",
    jobTitle: "",
    personalWeb: "",
    email: "",
    gitHub: "",
    workExperience: "",
    skills: "",
    education: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ [name]: value });
  };

  switch (step) {
    case 0:
      return (
        <div
          style={{
            minHeight: "60vh",
          }}
        >
          <InfoForm />
        </div>
      );
    case 1:
      return (
        <div
          style={{
            minHeight: "60vh",
          }}
        >
          <DetailsForm />
        </div>
      );
    case 2:
      return (
        <div style={{ minHeight: "60vh" }}>
          <h1 next={next} prev={prev}>
            Choose a template
          </h1>
        </div>
      );
    case 3:
      return (
        <div style={{ minHeight: "60vh" }}>
          <h1 prev={prev}>Preview&Finish</h1>{" "}
        </div>
      );
    default:
  }
};

export default WorkSpace;
