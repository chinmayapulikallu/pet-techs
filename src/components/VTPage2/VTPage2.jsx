import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import Grid from '@material-ui/core/Grid'
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from "@material-ui/core/Radio"
import FormGroup from "@material-ui/core/FormGroup"




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
        return (
            <div>
                <div>
                    <h2>What are your service preferences</h2>
                </div>
                <div>
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
                </div>

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
export default
    connect(mapStateToProps)(VTPage2);