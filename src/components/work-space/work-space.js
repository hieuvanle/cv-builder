import React from "react";
import "./work-space.css";

import InfoForm from "../info-form/info-form";
import DetailsForm from "../details-form/details-form";

const WorkSpace = ({ step, next, prev }) => {
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
            Choose template
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
