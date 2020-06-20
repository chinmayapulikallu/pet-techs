import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';




const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
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
    img:{
        borderRadius: '50%',
    },

});



class VTReg3 extends Component {
    state = {
        ...this.props
    }

    componentDidMount() {
        console.log(this.state.oralMedication)
    }

    handleToggleChangeFor = property => (event) => {
        console.log('switch', property, event.target.checked)
        this.setState({
            [property]: event.target.checked,
        });
    }
    handleInputChangeFor = property => (event) => {
        console.log('input change', property, event.target.value)
        this.setState({
            [property]: event.target.value,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.title}>
                    <h1 className={classes.title}>Tell us about your certifications and expertise:</h1>
                    <img className ={classes.img} src = "images/blank-profile-picture.png" alt="profile-photo" height="150" width="150"/>
                    <h5>Your experise as a veterinary professional what makes you stand apart and what helps pet owners get to know you.</h5>
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
                            onChange={this.handleInputChangeFor("experienceYear")}
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
                    onChange={this.handleInputChangeFor("currentJob")}

                />
                <p>Areas of professional expertise (examples: lab pracedures, animal medicine, hospice care, etc.)</p>
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
                    label="*Optional" variant="outlined" color="secondary"
                    fullWidth
                    multiline
                    onChange={this.handleInputChangeFor("bioYourself")}
                />
                <FormHelperText className={classes.helperText}>500 characters maximum</FormHelperText>
                <br />
                <br />
                <h4>Additional Details:</h4>
                <p>While these details are optional, providing more information about skills and expertise will help pet owners feel more comfotable contacting you.</p>
                <Grid container spacing={12}>

                    <FormControl component="fieldset">
                        {/* <p>Do you know animal CPR/First Aid?</p> */}
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("cpr")} />}
                                label="Do you know animal CPR/First Aid?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("oralMedication")} />}
                                label="Can you administer oral medications?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("injectableMedicaiton")} />}
                                label="Do you have experience with older/senior animals?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("expOlderPet")} />}
                                label="Can you provide daily exercise?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("expSpecialPet")} />}
                                label="Are you willing to work with an animal longer than a week?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("dailyExercise")} />}
                                label="Do you offer diabetic/insulin care?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("petLongerThanAWeek")} />}
                                label="Do you offer diabetic/insulin care?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Switch onChange={this.handleToggleChangeFor("diabeticInsulinCare")} />}
                                label="Do you offer diabetic/insulin care?"
                                labelPlacement="start"
                            />
                        </Grid>
                    </FormControl>


                </Grid>
                <Grid className={classes.itemCenter} alignItems="center"
                    justifyContent="center">
                    <Button className={classes.buttons} variant="contained" color="primary">Save & back to Dashboard</Button>
                    <Button className={classes.buttons} variant="contained" color="primary">Save & Continue</Button>
                </Grid>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    vtInfo: {
        experienceYear: '',
        certifications: '',
        currentJob: '',
        expertise: '',
        bioYourself: '',
        cpr: false,
        oralMedication: false,
        injectableMedicaiton: false,
        expOlderPet: false,
        expSpecialPet: false,
        dailyExercise: false,
        petLongerThanAWeek: false,
        diabeticInsulinCare: false,
        ...state.vtInfo,
    },
    error: state.errors,
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTReg3));
