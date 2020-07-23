import React from "react";
import "./brief-info.css";

import graduationIcon from "../../assets/graduate.svg";
import workIcon from "../../assets/work.svg";

import { Avatar } from "antd";

const BriefInfo = ({ background, avatar, name, job, education }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={background}
        alt="background"
        style={{ height: "10rem", width: "20rem" }}
      />
      <Avatar
        src={avatar}
        alt="avatar"
        size={100}
        style={{
          marginTop: "-3.5rem",
          border: "4px solid white",
        }}
      />
      <h2 style={{ marginBottom: "0.5rem" }}>{name}</h2>
      <p style={{ marginBottom: "0.5rem" }}>
        {<img src={workIcon} style={{ height: "0.9rem" }} alt="work" />} Worked
        as {job}
      </p>
      <p>
        {<img src={graduationIcon} style={{ height: "1.1rem" }} alt="study" />}{" "}
        Studied at
        {education}
      </p>
    </div>
  );
};

export default BriefInfo;
