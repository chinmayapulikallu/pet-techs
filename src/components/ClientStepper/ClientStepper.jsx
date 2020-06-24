import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { withStyles } from "@material-ui/core/styles";

import ClientRegPage1 from "../ClientRegPage1/ClientRegPage1";
import ClientRegPage2 from "../ClientRegPage2/ClientRegPage2";
import ClientReviewPage from "../ClientReviewPage/ClientReviewPage";

const styles = {
  root: {
    marginTop: 100,
  },
};

class ClientStepper extends Component {
  state = {
    activeStep: 0,
  };

  handleShowComponent = (componentToShow) => {
    this.setState({ componentToShow });
  };

  getSteps = () => {
    return ["Personal Information", "Add Pets", "Review"];
  };

  setActiveStep = (activeStep) => {
    this.setState({ activeStep });
  };

  handleNext = () => {
    this.setActiveStep(this.state.activeStep + 1);
  };

  handleBack = () => {
    this.setActiveStep(this.state.activeStep - 1);
  };

  handleReset = () => {
    this.setActiveStep(0);
  };

  render() {
    const { activeStep } = this.state;
    const steps = this.getSteps();
    const { classes } = this.props;

    return (
      <>
        <div>
          <Stepper activeStep={activeStep} alternativeLabel className={classes.root}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div>
          {this.state.activeStep === 0 && (
            <ClientRegPage1 onNext={this.handleNext} />
          )}
          {this.state.activeStep === 1 && (
            <ClientRegPage2 onNext={this.handleNext} onBack={this.handleBack} />
          )}
          {this.state.activeStep === 2 && (
            <ClientReviewPage
              onEditInfo={() =>
                this.setState({
                  activeStep: 0,
                })
              }
              onEditPet={() =>
                this.setState({
                  activeStep: 1,
                })
              }
            />
          )}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ClientStepper);
