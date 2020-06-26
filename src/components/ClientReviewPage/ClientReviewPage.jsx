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
});

class ClientReviewPage extends Component {

    componentDidMount() {
        console.log('componentDidMount :: ', this.state, this.props)
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
        this.props.history.push('/home')

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
                    <Typography variant="h5" className={classes.inputHeading}>Client Information</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Your Name:</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.username}</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Address:</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.home_address_house}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.apt_suite}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.city}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.state}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.zip_code}</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>About You:</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.about_client}</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>About Your Home:</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.about_home}</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Contact Information:</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.contact_name_1}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.contact_phone_1}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.contact_email_1}</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Vet Tech Information:</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.vet_clinic}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.clinic_address}</Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.clinic_phone}</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>
                        Are you Ok with a Vet Tech transporting your animal to the Vet in an emergency?
                    </Typography>
                    <Typography variant="body1" gutterBottom>{clientInfo.transport ? "True" : "False"}</Typography>
                   
                    <div></div>
                    <Button color="primary" variant="contained"
                        onClick={this.editClientProfile}>Edit Client Profile</Button>               
                    <Typography variant="h5" className={classes.inputHeading}>Pet Information</Typography>
                    {petInfo.pets.map(pet =>
                        <div key={pet.id}>
                        <Typography variant="h6" className={classes.inputHeading}>Pet Type:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.pet_type}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>If Other:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.other_pet}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Pet Name:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.pet_name}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Weight:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.weight}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Age:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.age}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Sex:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.sex}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Breed:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.breed}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Pet Food Brand:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.food_brand}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Feedings per day:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.feeding_per_day}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Amount Per Meal</Typography>
                        <Typography variant="body1" gutterBottom>{pet.amount_per_meal}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Optional dietary:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.optional_food}</Typography>
                        {pet.medications && pet.medications.map(medication =>
                            <div key={medication.id}>
                                <Typography variant="h6" className={classes.inputHeading}>Medication Name:</Typography>
                                <Typography variant="body1" gutterBottom>{medication.medication_name}</Typography>
                                <Typography variant="h6" className={classes.inputHeading}>Dosage:</Typography>
                                <Typography variant="body1" gutterBottom>{medication.medication_dosage}</Typography>
                                <Typography variant="h6" className={classes.inputHeading}>Dosage Time:</Typography>
                                <Typography variant="body1" gutterBottom>{medication.dosage_time.toLocaleTimeString()}</Typography>
                            </div>
                        )}
                        <Typography variant="h6" className={classes.inputHeading}>Pet Behavior:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.pet_behavior}</Typography>
                        <Typography variant="h6" className={classes.inputHeading}>Care Equipment:</Typography>
                        <Typography variant="body1" gutterBottom>{pet.care_equipment}</Typography>
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