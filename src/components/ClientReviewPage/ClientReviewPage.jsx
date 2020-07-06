import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';



const useStyles = (theme) => ({
    root: {
        marginTop: 50,
        marginBottom: 40,
        textAlign: "center",
    },
    inputHeading: {
        textAlign: "left"
    },
    buttonMargin: {
        margin: "10px"
    },
    answer: {
        marginLeft: 10,
        color: '#195C60'
    },
});

class ClientReviewPage extends Component {

    componentDidMount() {
        console.log('componentDidMount :: ', this.state, this.props)
        window.scrollTo(0,0)
    }

    //complete registration
    completeRegistration = () => {
        this.props.dispatch({
            type: 'CLIENT_REGISTER',
            payload: {
                ...this.props.petInfo,
                ...this.props.clientInfo,
                ...this.props.userInfo,
            }
        });
        this.props.history.push('/clientdashboard')

    }


    //editPetProfile
    editPetProfile = () => {
        this.props.onEditPet();
    }

    //edit Client Profile
    editClientProfile = () => {
        this.props.onEditInfo();
    }

    // handleBack = () => {
    //     this.props.history.push('/creg2')
    // }

    render() {
        console.log("review props", this.props)
        const { classes, user, clientInfo, petInfo } = this.props;

        return (
            <Container className={classes.root} maxWidth="md">
                <Typography variant="h3">Client Review Page</Typography>
                <div>
                    <Typography variant="h5" className={classes.inputHeading}>Client Information:</Typography>

                    <Typography variant="h6" className={classes.inputHeading}>Your Name: <span className = {classes.answer}>{clientInfo.text.client_name}</span></Typography>
                    {/* <Typography variant="body1" gutterBottom className = {classes.answer}>{clientInfo.text.client_name}</Typography> */}
                    <Typography variant="h6" className={classes.inputHeading}>Address:  <span className = {classes.answer}>{clientInfo.text.home_address_house}</span> <span className = {classes.answer}>{clientInfo.text.apt_suite}</span> <span className = {classes.answer}>{clientInfo.text.city}</span> <span className = {classes.answer}>{clientInfo.text.state}</span>, <span className = {classes.answer}>{clientInfo.text.zip_code}</span></Typography>
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.home_address_house}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.text.apt_suite}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.text.city}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.text.state}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.text.zip_code}</Typography> */}
                    <Typography variant="h6" className={classes.inputHeading}>About You:  <span className = {classes.answer}>{clientInfo.text.about_client}</span></Typography>
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.about_client}</Typography> */}
                    <Typography variant="h6" className={classes.inputHeading}>About Your Home:  <span className = {classes.answer}>{clientInfo.text.about_home}</span></Typography>
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.about_home}</Typography> */}
                    <Typography variant="h6" className={classes.inputHeading}>Contact Information:  <span className = {classes.answer}>{clientInfo.text.contact_name_1}</span> <span className = {classes.answer}>{clientInfo.text.contact_phone_1}</span> <span className = {classes.answer}>{clientInfo.text.contact_email_1}</span></Typography>
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.contact_name_1}</Typography> */}
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.contact_phone_1}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.text.contact_email_1}</Typography> */}
                    <Typography variant="h6" className={classes.inputHeading}>Vet Tech Information:  <span className = {classes.answer}>{clientInfo.text.vet_clinic}</span>  <span className = {classes.answer}>{clientInfo.text.clinic_address}</span> <span className = {classes.answer}>{clientInfo.text.phone}</span></Typography>
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.vet_clinic}</Typography> */}
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.clinic_address}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.text.clinic_phone}</Typography> */}
                    <Typography variant="h6" className={classes.inputHeading}>
                        Are you Ok with a Vet Tech transporting your animal to the Vet in an emergency?  <span className = {classes.answer}>{clientInfo.text.transport ? "Yes" : "No"}</span>
                    </Typography>
                    {/* <Typography variant="body1" gutterBottom>{clientInfo.text.transport ? "True" : "False"}</Typography> */}

                    <div></div>
                    <Button color="primary" variant="contained"
                        onClick={this.editClientProfile}>Edit Client Profile</Button>
                    <Typography variant="h5" className={classes.inputHeading}>    Pet Information:</Typography>
                    {petInfo.pets.map(pet =>
                        <div key={pet.id}>
                            <Typography variant="h6" className={classes.inputHeading}>Pet Type: <span className = {classes.answer}>{pet.pet_type}</span> </Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.pet_type}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>If Other: <span className = {classes.answer}>{pet.other_pet}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.other_pet}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Pet Name: <span className = {classes.answer}>{pet.pet_name}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.pet_name}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Weight: <span className = {classes.answer}>{pet.weight}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.weight}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Age: <span className = {classes.answer}>{pet.age}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.age}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Sex: <span className = {classes.answer}>{pet.sex}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.sex}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Breed: <span className = {classes.answer}>{pet.breed}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.breed}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Pet Food Brand: <span className = {classes.answer}>{pet.food_brand}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.food_brand}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Feedings per day: <span className = {classes.answer}>{pet.feeding_per_day}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.feeding_per_day}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Amount Per Meal <span className = {classes.answer}>{pet.amount_per_meal}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.amount_per_meal}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Optional dietary: <span className = {classes.answer}>{pet.optional_food}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.optional_food}</Typography> */}
                            {pet.medications && pet.medications.map(medication =>
                                <div key={medication.id}>
                                    <Typography variant="h6" className={classes.inputHeading}>Medication Name: <span className = {classes.answer}>{medication.medication_name}</span></Typography>
                                    {/* <Typography variant="body1" gutterBottom>{medication.medication_name}</Typography> */}
                                    <Typography variant="h6" className={classes.inputHeading}>Dosage:  <span className = {classes.answer}>{medication.dosage}</span></Typography>
                                    {/* <Typography variant="body1" gutterBottom>{medication.medication_dosage}</Typography> */}
                                    <Typography variant="h6" className={classes.inputHeading}>Dosage Time:  <span className = {classes.answer}>{medication.dosage_time.toLocaleTimeString()}</span></Typography>
                                    {/* <Typography variant="body1" gutterBottom>{medication.dosage_time.toLocaleTimeString()}</Typography> */}
                                </div>
                            )}
                            <Typography variant="h6" className={classes.inputHeading}>Pet Behavior: <span className = {classes.answer}>{pet.pet_behavior}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.pet_behavior}</Typography> */}
                            <Typography variant="h6" className={classes.inputHeading}>Care Equipment: <span className = {classes.answer}>{pet.care_equipment}</span></Typography>
                            {/* <Typography variant="body1" gutterBottom>{pet.care_equipment}</Typography> */}
                            <br />
                        </div>
                    )}

                    <Button color="primary" variant="contained"
                        onClick={this.editPetProfile} className={classes.buttonMargin}>Edit Pet Profile</Button>
                    <Button color="primary" variant="contained"
                        onClick={this.completeRegistration} className={classes.buttonMargin}>Complete</Button>
                </div>
            </Container>
        )
    }
}



const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,
    user: reduxState.user

})

export default (withStyles(useStyles))(withRouter(connect(mapStateToProps)(ClientReviewPage)));