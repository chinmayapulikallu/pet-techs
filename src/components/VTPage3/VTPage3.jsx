import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Container from "@material-ui/core/Container";



const styles = theme => ({
    root: {
        // flexGrow: 1,
        // marginLeft: theme.spacing(45),
        // marginRight: theme.spacing(45),
        marginTop: '100px',
    },

    title: {
        textAlign: 'center',
    },
    year: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '15ch',
    },
    fullwidth: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    helperText: {
        textAlign: 'right',
    },
    itemCenter: {
        textAlign: 'center',
        justifyContent: "center",
        marginTop: "20px",
    },
    buttons: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    img: {
        borderRadius: '50%',
    },

});



class VTReg3 extends Component {
    state = {
        ...this.props.vtInfo,
    }

    componentDidMount() {
        console.log(this.state.oralMedication)
    }

    handleToggleChangeFor = property => (event) => {
        console.log('switch', property, event.target.checked)
        this.setState({
            [property]: event.target.checked === true,
        });
    }
    handleInputChangeFor = property => (event) => {
        console.log('input change', property, event.target.value)
        this.setState({
            [property]: event.target.value,
        });
    }
    handleBackButton = () => {
        console.log('back clicked!')
        this.props.history.push('/vtreg2')
    }
    handleReviewButton = () => {
        console.log('clicked!')
        this.props.history.push('/vtreview');
        // this.props.dispatch({
        //     type: "ADD_VT_INFO_PAGE_3",
        //     payload: this.state 
        // })
        console.log('send this VT reg page 3 data to saga:', this.state)

    }

    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root} maxWidth="sm">
            <div className={classes.title}>
                    <h3 className={classes.title}>Tell us about your certifications and expertise:</h3>
                    <img className={classes.img} src="images/blank-profile-picture.png" alt="profile" height="150" width="150" />
                    <h5>Your expertise as a veterinary professional what makes you stand apart and what helps pet owners get to know you.</h5>
                    <h5>Please keep emojis and personal identifiers (last name or workplace) out of your profile.</h5>
                </div>
                <Grid container spacing={12}>
                    <Grid item xs={5}>Year of professional experience caring for pets:</Grid>
                    <Grid item xs={4}>
                        <TextField type="text" id="outlined-basic" label="Year" variant="outlined"
                            color="secondary"
                            InputProps={{
                                className: classes.year
                            }}
                            onChange={this.handleInputChangeFor("experience")}
                        />
                    </Grid>
                </Grid>
                <p>Education/Degree/Certifications(separate with commas)</p>
                <TextField type="text" id="outlined-full-width"
                    label="*Optional" variant="outlined" color="secondary"
                    InputProps={{
                        className: classes.fullwidth
                    }}
                    fullWidth
                    onChange={this.handleInputChangeFor("certifications")}

                />
                <p>Current job title (optional: relevant previous titles) </p>
                <TextField type="text" id="outlined-full-width"
                    label="*Optional" variant="outlined" color="secondary"
                    InputProps={{
                        className: classes.fullwidth
                    }}
                    fullWidth
                    onChange={this.handleInputChangeFor("current_job_title")}

                />
                <p>Areas of professional expertise (examples: lab procedures, animal medicine, hospice care, etc.)</p>
                <TextField type="text" id="outlined-full-width"
                    label="*Optional" variant="outlined" color="secondary"
                    fullWidth
                    multiline
                    rows={3}
                    onChange={this.handleInputChangeFor("expertise")}

                />
                <FormHelperText className={classes.helperText}>500 characters maximum</FormHelperText>
                <p>Brief bio about yourself:</p>
                <TextField type="text"
                    variant="outlined" color="secondary"
                    fullWidth
                    multiline
                    onChange={this.handleInputChangeFor("bioYourself")}
                />
                <FormHelperText className={classes.helperText}>600 characters maximum</FormHelperText>
                <br />
                <br />
                <h4>Additional Details:</h4>
                <p>While these details are optional, providing more information about skills and expertise will help pet owners feel more comfortable contacting you.</p>
                <Grid container spacing={12}>

                    <FormControl component="fieldset">
                        {/* <p>Do you know animal CPR/First Aid?</p> */}
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("CPR_first_aid")} />}
                                label="Do you know CPR and/or animal first aid?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("oral_medication")} />}
                                label="Can you administer oral medications to animals?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("injectable_medication")} />}
                                label="Can you administer injected medications to animals?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("exp_older_pet")} />}
                                label="Do you have experience with caring for older or senior animals?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("exp_special_pet")} />}
                                label="Do you have experience caring for special needs animals?"
                                labelPlacement="start"
                            />
                        </Grid>

                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("daily_exercise")} />}
                                label="Can you provied daily exercise for high energy animals or behavioral needs?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("pet_longer_than_a_week")} />}
                                label="Are you willing to accept services that are longer than one week with animals?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("diabetic_insulin_care")} />}
                                label="Do you offer diabetic and insulin care?"
                                labelPlacement="start"
                            />
                        </Grid>
                    </FormControl>


                </Grid>
                <Grid className={classes.itemCenter} >
                    <Button className={classes.buttons} variant="contained" color="primary" onClick={this.handleBackButton}>Back</Button>
                    <Button className={classes.buttons} variant="contained" color="primary" onClick={this.handleReviewButton}>Review</Button>
                </Grid>

                </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    vtInfo: {
        experience: '',
        certifications: '',
        current_job_title: '',
        expertise: '',
        bioYourself: '',
        CPR_first_aid: false,
        oral_medication: false,
        injectable_medication: false,
        exp_older_pet: false,
        exp_special_pet: false,
        daily_exercise: false,
        pet_longer_than_a_week: false,
        diabetic_insulin_care: false,
        ...state.vtInfo,
    },
    error: state.errors,
})

export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTReg3)));
