import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import FormControl from '@material-ui/core/FormControl'
import FormLabel from "@material-ui/core/FormLabel"
import { FormControlLabel} from '@material-ui/core';
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import FormHelperText from "@material-ui/core/FormHelperText"
import Radio from "@material-ui/core/Radio"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        marginTop: '100px',
    },
    title: {
        textAlign: 'center',
    },
    textbox: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    buttons: {
      
       marginRight: "10px"
    }
})

class VTPage2 extends Component {

    state = {
        ...this.props.vtInfo2
    }

    handleChange = (event, property) => {
        console.log(event.target.value, property);

    }

    handleBackClick = () => {
        console.log("CLICKED BACK");
        this.props.history.push('/vtreg1')
    }

    //THIS WILL TAKE THE VET TECH TO THE 3RD VET TECH REGISTRATION PAGE
    handleContClick = () => {
        console.log("CLICKED CONTINUE");
        // this.props.dispatch({
        //     type: '' ,
        //     payload: this.state.vtInfo2
        // })
        this.props.history.push('/vtreg3')
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.title}>
                <h2>What are your service preferences</h2>
                </div>
                <br />
                <Grid container justify="center" spacing={3}>
                    <FormControl component="fieldset">
                        <FormLabel component="label">What animals will you provide services for?</FormLabel>
                        <FormGroup row="true">
                            <FormControlLabel
                                control={<Checkbox name="dog" />}
                                onChange={(event) => this.handleChange(event, "dogs")}
                                label="Dogs"
                            />
                            <FormControlLabel
                                control={<Checkbox name="cat" />}
                                onChange={(event) => this.handleChange(event, "cats")}
                                label="Cats"
                            />
                            <FormControlLabel
                                control={<Checkbox name="other" />}
                                onChange={(event) => this.handleChange(event, "other")}
                                label="Others"
                            />
                        </FormGroup>
                        <FormHelperText>Please choose all that apply</FormHelperText>
                        <br />
                        <FormLabel component="label">Are you home full time Monday-Friday?</FormLabel>
                        <FormGroup row="true">
                            <FormControlLabel
                                control={<Checkbox name="availYes" />}
                                onChange={(event) => this.handleChange(event, "yes")}
                                label="Yes"
                            />
                            <FormControlLabel
                                control={<Checkbox name="availNo" />}
                                onChange={(event) => this.handleChange(event, "no")}
                                label="No"
                            />
                        </FormGroup>

                        <FormLabel component="label">How often can you take the animal(s) outside?</FormLabel>
                        <FormGroup row="true">
                            <FormControlLabel
                                control={<Checkbox name="hrCheck1" />}
                                onChange={(event) => this.handleChange(event, "0-2")}
                                label="0-2 Hours"
                            />
                            <FormControlLabel
                                control={<Checkbox name="hrCheck2" />}
                                onChange={(event) => this.handleChange(event, "2-4")}
                                label="2-4 Hours"
                            />
                            <FormControlLabel
                                control={<Checkbox name="hrCheck3" />}
                                onChange={(event) => this.handleChange(event, "4-8")}
                                label="4-8 Hours"
                            />
                            <FormControlLabel
                                control={<Checkbox name="hrCheck4" />}
                                onChange={(event) => this.handleChange(event, "N/A")}
                                label="N/A"
                            />
                        </FormGroup>
                        <FormLabel component="label">What size animals are you comfortable hosting?</FormLabel>
                        <FormGroup row="true">
                            <FormControlLabel
                                control={<Checkbox name="smCheck" />}
                                onChange={(event) => this.handleChange(event, "small")} 
                                label="Small"
                            />
                            <FormControlLabel
                                control={<Checkbox name="mdCheck" />}
                                onChange={(event) => this.handleChange(event, "medium")}
                                label="Medium"
                            />
                            <FormControlLabel
                                control={<Checkbox name="lgCheck" />}
                                onChange={(event) => this.handleChange(event, "large")}
                                label="Large"
                            />
                            <FormControlLabel
                                control={<Checkbox name="gtCheck" />}
                                onChange={(event) => this.handleChange(event, "giant")}
                                label="Giant"
                            />
                        </FormGroup>
                        <FormLabel component="label">Will you host animals younger than 1 years old?</FormLabel>
                        <FormGroup row="true">
                            <FormControlLabel
                                control={<Radio name="youngYes" />}
                                onChange={(event) => this.handleChange(event, "yesAge")}
                                name="yesAgeRadio"
                                label="Yes"
                            />
                            <FormControlLabel
                                control={<Radio name="youngNo" />}
                                onChange={(event) => this.handleChange(event, "noAge")}
                                name="noAgeRadio"
                                label="No"
                            />
                        </FormGroup>
                        <FormLabel component="label">Will you host animals from multiple families at once?</FormLabel>
                        <FormGroup row="true">
                            <FormControlLabel
                                control={<Radio name="multiYesRadio" />}
                                onChange={(event) => this.handleChange(event, "yesMulti")}
                                label="Yes"
                            />
                            <FormControlLabel
                                control={<Radio name="multiNoRadio" />}
                                onChange={(event) => this.handleChange(event, "noMulti")}
                                label="No"
                            />
                        </FormGroup>
                        <Grid>
                            <FormLabel component="label">Please provide a list of equipment that will be used when caring for pets: </FormLabel>
                            <br />
                            <div className={classes.textbox}>
                            <TextField type="text" id="outlined-basic" label="Optional" variant="outlined"
                                color="secondary"
                            />
                            </div>
                        </Grid>
                        <Grid alignItems="center" justifyContent="center">
                            <div className={classes.buttons}>
                            <Button variant="contained" color="primary" >Back</Button>
                            <Button variant="contained" color="primary">Continue</Button>
                            </div>
                        </Grid>
                    </FormControl>
                </Grid>

                {/* <div>
                    <h4>What animals will you provide services for?</h4>
                    <input type="checkbox" name="dogCheck" defaultChecked={false} onChange={(event) => this.handleChange(event, "dogs")} /> Dogs
                     <input type="checkbox" name="dogCheck" defaultChecked={false} onChange={(event) => this.handleChange(event, "cats")} /> Cats
                     <input type="checkbox" name="dogCheck" defaultChecked={false} onChange={(event) => this.handleChange(event, "other")} /> Other
           </div>
                <div>
                    <h4>Are you home full time Monday-Friday?</h4>
                    <input type="radio" name="yesRadio" defaultChecked={false} onChange={(event) => this.handleChange(event, "yes")} /> Yes
                    <input type="radio" name="noRadio" defaultChecked={false} onChange={(event) => this.handleChange(event, "no")} /> No
           </div>
                <div>
                    <h4>How frequently can you take dogs outside?</h4>
                    <input type="checkbox" name="hrCheck1" defaultChecked={false} onChange={(event) => this.handleChange(event, "0-2")} /> 0-2 hrs
                    <input type="checkbox" name="hrCheck2" defaultChecked={false} onChange={(event) => this.handleChange(event, "2-4")} /> 2-4 hrs
                    <input type="checkbox" name="hrCheck3" defaultChecked={false} onChange={(event) => this.handleChange(event, "4-8")} /> 4-8 hrs
                    <input type="checkbox" name="hrCheck4" defaultChecked={false} onChange={(event) => this.handleChange(event, "N/A")} /> N/A
                </div>
                <div>
                    <h4>What size animals are you comfortable hosting?</h4>
                    <input type="checkbox" name="smCheck" defaultChecked={false} onChange={(event) => this.handleChange(event, "small")} /> Small
                    <input type="checkbox" name="medCheck" defaultChecked={false} onChange={(event) => this.handleChange(event, "medium")} /> Medium
                    <input type="checkbox" name="lgCheck" defaultChecked={false} onChange={(event) => this.handleChange(event, "large")} /> Large
                    <input type="checkbox" name="gtCheck" defaultChecked={false} onChange={(event) => this.handleChange(event, "giant")} /> Giant
                </div>
                <div>
                    <h4>Will you host animals younger than 1 year old?</h4>
                    <input type="radio" name="yesAgeRadio" defaultChecked={false} onChange={(event) => this.handleChange(event, "yesAge")} /> Yes
                    <input type="radio" name="noAgeRadio" defaultChecked={false} onChange={(event) => this.handleChange(event, "noAge")} /> No
           </div>
                <div>
                    <h4>Will you host animals from more than one family at a time?</h4>
                    <input type="radio" name="multiYesRadio" defaultChecked={false} onChange={(event) => this.handleChange(event, "yesMulti")} /> Yes
                    <input type="radio" name="multiNoRadio" defaultChecked={false} onChange={(event) => this.handleChange(event, "noMulti")} /> No
           </div>
                <div>
                    <h4>Please provide a list of equipment that will be used when caring for pets:</h4>
                    <textarea
                        className="equipment"
                        placeholder="Optional..."
                        rows={5}
                        rowsmax={5}
                        cols={100}
                        onChange={(event) => this.handleChange(event, "equipment")}
                    />

                </div>
               
                <div>
                    <button onClick={this.handleBackClick}>Back</button>
                    <button onClick={this.handleContClick}>Continue</button>
                </div> */}

            </div>
         
        )
    }
}

const mapStateToProps = (state) => ({
    vtInfo2: {
        dog: false,
        cat: false,
        other: false,
        hourSelect1: false,
        hourSelect2: false,
        hourSelect3: false,
        hourSelect4: false,
        small: false,
        medium: false,
        large: false,
        giant: false,
        youngAnimals: '',
        multipleAnimals: '',
        optionalEquipment: '',
        ...state.vtInfo,
    },
    errors: state.errors,
});
// export default
//     connect(mapStateToProps)(VTPage2);

export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(VTPage2)));