import React from "react";
import "./project.css";

import DashBoard from "../dashboard/dashboard";
import WorkSpace from "../work-space/work-space";
import { Button, Card, Steps, message } from "antd";

const { Step } = Steps;

const Project = () => {
  const [step, setStep] = React.useState(0);
  const steps = 3;
  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    setStep(step - 1);
  };
  const onChange = () => {
    setStep(step);
  };

  return (
    <DashBoard title="Projects">
      <div className="project-container">
        <Card className="info-container">
          <div className="workspace-container">
            <Steps current={step} onChange={onChange}>
              <Step title="Step 1" description="Basic information." />
              <Step title="Step 2" description="More about you" />
              <Step title="Step 3" description="Choose a template." />
              <Step title="Step 4" description="Review&Finish." />
            </Steps>
            <WorkSpace step={step} next={next} prev={prev} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {step < steps && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {step === steps && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {step > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={prev}>
                Previous
              </Button>
            )}
          </div>
        </Card>
        <Card className="preview-container">
          <h4>Hello</h4>
        </Card>
      </div>
    </DashBoard>
  );
};

export default Project;
