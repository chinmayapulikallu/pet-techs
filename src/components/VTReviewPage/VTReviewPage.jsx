import React, { Component } from 'react';
import { connect } from 'react-redux';


import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";




const styles = theme => ({
  root: {
    marginTop: '100px',
  },
  title: {
    textAlign: 'center',
  },
  buttons: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  itemCenter: {
    textAlign: 'center',
    justifyContent: "center",
    marginTop: "20px",
  },
  answer:{
    marginLeft: 10,
    color: '#195C60'
  }

})


class VTReviewPage extends Component {
  // state = {
  //   ...this.props.vtInfo,
  // }

  handleEditVTPage1Button = () => {
    console.log('edit clicked!')
    this.props.onEditInfo();
  }
  handleEditVTPage2Button = () => {
    console.log('edit clicked!')
    this.props.onEditPreferences();
  }
  handleEditVTPage3Button = () => {
    console.log('edit clicked!')
    this.props.onEditCert();
  }
  handleSaveButton = () => {
    console.log('save clicked!')
    console.log('send this VT data to saga:', this.state)
    this.props.dispatch({
      type: "VT_REGISTER",
      payload:
      {
        file: this.props.vtInfoPage1.file,
        text: {
          vet_name:this.props.vtInfoPage1.text.vet_name,
          home_address_house:this.props.vtInfoPage1.text.home_address_house,
          apt_suite:this.props.vtInfoPage1.text.apt_suite,
          city:this.props.vtInfoPage1.text.city,
          state:this.props.vtInfoPage1.text.state,
          zip_code:this.props.vtInfoPage1.text.zip_code,
          profile_img:this.props.vtInfoPage1.text.profile_img,
          sleep_over:this.props.vtInfoPage1.text.sleep_over,
          boarding:this.props.vtInfoPage1.text.boarding,
          dropin_care:this.props.vtInfoPage1.text.dropin_care,
          hospice:this.props.vtInfoPage1.text.hospice,
          about_vet:this.props.vtInfoPage1.text.about_vet,
          ...this.props.vtInfoPage2,
          ...this.props.vtInfoPage3
        }


      }
    })
    this.props.history.push("/vtdashboard");
  }


  render() {
    const { classes, vtInfoPage1, vtInfoPage2, vtInfoPage3 } = this.props;
    return (
      <Container className={classes.root} maxWidth="md">
        {/* <h1>{JSON.stringify(vtInfoPage1)}</h1>
        <h1>{JSON.stringify(vtInfoPage2)}</h1> */}
       


        <Typography variant="h3"className={classes.title}>Vet tech review</Typography>
        <Typography variant="h6">
          Your name: < span className = {classes.answer}>{vtInfoPage1.text.vet_name}</span>
        </Typography>
        <Typography variant="h6">
          Home address: < span className = {classes.answer}>{vtInfoPage1.text.home_address_house}</span>
        </Typography>
        <Typography variant="h6">
          Apartment or Suite #: < span className = {classes.answer}>{vtInfoPage1.text.apt_suite}</span>
        </Typography>
        <Typography variant="h6">
          City: < span className = {classes.answer}>{vtInfoPage1.text.city}</span>
        </Typography>
        <Typography variant="h6">
          State: < span className = {classes.answer}>{vtInfoPage1.text.state}</span>
        </Typography>
        <Typography variant="h6">
          Zip Code: < span className = {classes.answer}>{vtInfoPage1.text.zip_code}</span>
        </Typography>
        <Typography variant="h6">
          Bio: < span className = {classes.answer}>{vtInfoPage1.text.about_vet }</span>
        </Typography>

        <Typography variant="h6">
          Pet Sleepover: < span className = {classes.answer}>{vtInfoPage1.text.sleep_over ? "Yes" : 'No' }</span>
        </Typography>
        <Typography variant="h6">
          Pet Boarding: < span className = {classes.answer}>{vtInfoPage1.text.boarding ? "Yes" : "No"}</span>
        </Typography>
        <Typography variant="h6">
          Drop In Care: < span className = {classes.answer}>{vtInfoPage1.text.dropin_care ? "Yes" : "No"}</span>
        </Typography>
        <Typography variant="h6">
          Hospice Care: < span className = {classes.answer}>{vtInfoPage1.text.hospice ? "Yes" : "No"}</span>
        </Typography>
        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleEditVTPage1Button}
          >
            Edit Basic Infomation
              </Button>
        </Grid>

        <Typography variant="h6">
          What animals will you provide services for?{" "}
          < span className = {classes.answer}>{vtInfoPage2.dogs ? "Dogs" : ""}</span> < span className = {classes.answer}>{vtInfoPage2.cats ? "Cats" : ""}</span> < span className = {classes.answer}>{vtInfoPage2.other ? "Other" : ""}</ span>
        </Typography>
        <Typography variant="h6">
          Are you home full time Monday-Friday? < span className = {classes.answer}>{vtInfoPage2.vet_available ? "Yes" : "No"}</span>
        </Typography>
        {/* <Typography variant="h6">How often can you take the animal(s) outside? </Typography> <span>{vtInfoPage2.vet_available ? "Yes" : "No"}</span> */}
        <Typography variant="h6">How often can you take the animal(s) outside? 
        {/* <span>{vtInfoPage2.zero_two ? "Yes" : "No"}</span>  <span>{vtInfoPage2.two_four ? "Yes" : "No"}</span>  <span>{vtInfoPage2.four_eight ? "Yes" : "No"}</span> <span>{vtInfoPage2.not_available ? "Yes" : "No"}</span> */}
        < span className = {classes.answer}>{vtInfoPage2.zero_two ? "0-2 Hours" : ""}</span> < span className = {classes.answer}>{vtInfoPage2.two_four ? "2-4 Hours" : ""}</span>  < span className = {classes.answer}>{vtInfoPage2.four_eight ? "4-8 Hours" : ""}</span> < span className = {classes.answer}>{vtInfoPage2.not_available ? "N/A" : ""}</span> </Typography> 
        <Typography variant="h6">What size animals are you comfortable hosting? < span className = {classes.answer}>{vtInfoPage2.small_dog ? "Small dog" : ""}</span> < span className = {classes.answer}>{vtInfoPage2.medium_dog ? "Medium dog" : ""}</span> < span className = {classes.answer}>{vtInfoPage2.large_dog ? "Large dog" : ""}</span> < span className = {classes.answer}>{vtInfoPage2.giant_dog ? "Giant dog" : ""}</span> </Typography>
        <Typography variant="h6">Will you host animals younger than 1 years old?  < span className = {classes.answer}>{vtInfoPage2.pet_younger_than_one ? "Yes" : "No"}</span> </Typography>
        <Typography variant="h6">Will you host animals from multiple families at once? < span className = {classes.answer}>{vtInfoPage2.pet_more_than_one_family ? "Yes" : "No"}</span> </Typography>
        <Typography variant="h6">
          Please provide a list of equipment that will be used when caring
              for pets:{" "} < span className = {classes.answer}>{vtInfoPage2.equipment_list ? "Yes" : "No"}</span>
        </Typography>
        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleEditVTPage2Button}
          >
            Edit Services
              </Button>
        </Grid>

        <Typography variant="h6">Year of professional experience caring for pets: < span className = {classes.answer}>{vtInfoPage3.experience}</span> </Typography> 
        <Typography variant="h6">Education/Degree/Certifications: < span className = {classes.answer}>{vtInfoPage3.certifications}</span> </Typography> 
        <Typography variant="h6">Current job title: < span className = {classes.answer}>{vtInfoPage3.current_job_title}</span> </Typography>
        <Typography variant="h6">Areas of professional expertise: < span className = {classes.answer}>{vtInfoPage3.expertise}</span> </Typography> 
        <Typography variant="h6">Brief bio about yourself: < span className = {classes.answer}>{vtInfoPage3.bioYourself}</span> </Typography>
        
        <Typography variant="h5">Additional Details: </Typography>
        <Typography variant="h6">Do you know CPR and/or animal first aid?  < span className = {classes.answer} className = {classes.answer}>{vtInfoPage2.CPR_first_aid ? "Yes" : "No"}</span> </Typography>
        <Typography variant="h6">Can you administer oral medications to animals? < span className = {classes.answer}>{vtInfoPage2.oral_medication ? "Yes" : "No"}</span> </Typography> 
        <Typography variant="h6">Can you administer injected medications to animal?  < span className = {classes.answer}>{vtInfoPage2.injectable_medication ? "Yes" : "No"}</span> </Typography> 
        <Typography variant="h6">Do you have experience with caring for older or senior animals?{" "} < span className = {classes.answer}>{vtInfoPage2.exp_older_pet ? "Yes" : "No"}</span></Typography>
        <Typography variant="h6">Do you have experience caring for special needs animals? < span className = {classes.answer}>{vtInfoPage2.exp_special_pet ? "Yes" : "No"}</span></Typography>
        <Typography variant="h6">Can you provied daily exercise for high energy animals orbehavioral needs?{" "} < span className = {classes.answer}>{vtInfoPage2.daily_exercise ? "Yes" : "No"}</span></Typography>
        <Typography variant="h6">Are you willing to accept services that are longer than one week
              with animals?{" "}  < span className = {classes.answer}>{vtInfoPage2.pet_longer_than_a_week ? "Yes" : "No"}</span></Typography>
        <Typography variant="h6">Do you offer diabetic and insulin care? < span className = {classes.answer}>{vtInfoPage2.diabetic_insulin_care ? "Yes" : "No"}</span> </Typography> 
        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleEditVTPage3Button}
          >
            Edit Certifications
              </Button>
        </Grid>

        <Grid className={classes.itemCenter}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={this.handleSaveButton}
          >
            Complete
              </Button>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  vtInfoPage1: reduxState.vtInfoPage1,
  vtInfoPage2: reduxState.vtInfoPage2,
  vtInfoPage3: reduxState.vtInfoPage3,
})
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTReviewPage)));
