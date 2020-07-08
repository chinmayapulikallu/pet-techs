import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { withStyles } from "@material-ui/core/styles";
import VTPage1 from "../VTPage1/VTPage1";
import VTPage2 from "../VTPage2/VTPage2";
import VTPage3 from "../VTPage3/VTPage3";
import VTReviewPage from "../VTReviewPage/VTReviewPage";

const styles = {
  root: {
    marginTop: 100,
  },
};

class VTStepper extends Component {
  state = {
    activeStep: 0,
  };

  handleShowComponent = (componentToShow) => {
    this.setState({ componentToShow });
  };

  getSteps = () => {
    return [
      "Personal Information",
      "Service Preferences",
      "Certifications & Expertise",
      "Review",
    ];
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
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className={classes.root}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div>
          {this.state.activeStep === 0 && <VTPage1 onNext={this.handleNext} />}
          {this.state.activeStep === 1 && (
            <VTPage2 onNext={this.handleNext} onBack={this.handleBack} />
          )}
          {this.state.activeStep === 2 && (
            <VTPage3 onNext={this.handleNext} onBack={this.handleBack} />
          )}
          {this.state.activeStep === 3 && (
            <VTReviewPage
              onEditInfo={() =>
                this.setState({
                  activeStep: 0,
                })
              }
              onEditPreferences={() =>
                this.setState({
                  activeStep: 1,
                })
              }
              onEditCert={() =>
                this.setState({
                  activeStep: 2,
                })
              }
            />
          )}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(VTStepper);
