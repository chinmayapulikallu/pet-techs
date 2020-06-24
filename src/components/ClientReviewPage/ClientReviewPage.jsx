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
        const { classes, user, clientInfo, petInfo } = this.props;

        return (
            <Container className={classes.root} maxWidth="md">
                <Typography variant="h3">Client Review Page</Typography>
                <div>
                    <Typography variant="h5" className={classes.inputHeading}>Client Information</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Your Name:</Typography>
                    <Typography variant="body1" gutterBottom >NAME</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Address:</Typography>
                    <Typography variant="body1" gutterBottom>ADDRESS</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>About You:</Typography>
                    <Typography variant="body1" gutterBottom>ABOUT YOU</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>About Your Home:</Typography>
                    <Typography variant="body1" gutterBottom>ABOUT YOUR HOME</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Contact Information:</Typography>
                    <Typography variant="body1" gutterBottom>CONTACT INFO</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Vet Tech Information:</Typography>
                    <Typography variant="body1" gutterBottom>VET TECH INFO</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>
                        Are you Ok with a Vet Tech transporting your animal to the Vet in an emergency?
                    </Typography>
                    <Typography variant="body1" gutterBottom>YES/NO</Typography>
                    <Button color="primary" variant="contained"
                        onClick={this.editClientProfile}>Edit Client Profile</Button>
                    <Typography variant="h5" className={classes.inputHeading}>Pet Information</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Pet Type:</Typography>
                    <Typography variant="body1" gutterBottom>PET TYPE</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>If Other:</Typography>
                    <Typography variant="body1" gutterBottom>IF OTHER</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Pet Name:</Typography>
                    <Typography variant="body1" gutterBottom>PET NAME</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Weight:</Typography>
                    <Typography variant="body1" gutterBottom>WEIGHT</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Age:</Typography>
                    <Typography variant="body1" gutterBottom>AGE</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Sex:</Typography>
                    <Typography variant="body1" gutterBottom>SEX</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Breed:</Typography>
                    <Typography variant="body1" gutterBottom>BREED</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Pet Food Brand:</Typography>
                    <Typography variant="body1" gutterBottom>PET FOOD BRAND</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Feedings per day:</Typography>
                    <Typography variant="body1" gutterBottom>FEEDINGS PER DAY</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Amount Per Meal</Typography>
                    <Typography variant="body1" gutterBottom>AMOUNT PER MEAL</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Optional dietary:</Typography>
                    <Typography variant="body1" gutterBottom>OPTIONAL DIETARY</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Medication Name:</Typography>
                    <Typography variant="body1" gutterBottom>MEDICATION NAME</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Dosage:</Typography>
                    <Typography variant="body1" gutterBottom>DOSAGE</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Dosage Time:</Typography>
                    <Typography variant="body1" gutterBottom>DOSAGE TIME</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Pet Behavior:</Typography>
                    <Typography variant="body1" gutterBottom>PET BEHAVIOR</Typography>
                    <Typography variant="h6" className={classes.inputHeading}>Care Equipment:</Typography>
                    <Typography variant="body1" gutterBottom>CARE EQUIPMENT</Typography>
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
    clientInfo: reduxState.clientInfoReducer,
    petInfo: reduxState.petInfoReducer,
    user: reduxState.userReducer
    
})

export default (withStyles(useStyles))(withRouter(connect(mapStateToProps)(ClientReviewPage)));