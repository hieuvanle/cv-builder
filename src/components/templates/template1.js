import React from "react";

import { useSelector } from "react-redux";

const FirstTemplate = () => {
  const infoForm = useSelector((state) => state.infoForm);
  console.log(infoForm);
  return (
    <div>
      <h3>Personal details go here</h3>
      <h3>Professional summary goes here </h3>
      <h3>Education goes here</h3>
      <h3>Technical skills go here</h3>
      <h3>Work experience go here</h3>
    </div>
  );
};

export default FirstTemplate;
