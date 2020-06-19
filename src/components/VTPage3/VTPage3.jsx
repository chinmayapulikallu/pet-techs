import React, { Component } from 'react';
import { connect } from 'react-redux';


import Switch from '@material-ui/core/Switch';


class VTReg3 extends Component {
    state = {
        ...this.props
    }


    render() {
        return (
            <div>
                <h1>Tell us about your certifications and expertise:</h1>
                <p>Year of professional experience caring for pets:</p><span><input type="number" /></span>
                <p>Current Job Title:</p>
                <input type="number" />
                <p>Areas of professional expertise:</p>
                <input type="number" />
                <p>Brief bio about yourself:</p>
                <input type="number" />
                <p>Additional Details:</p>
                <p>Do you know animal CPR/First Aid?</p>
                {/* <div>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                    <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                    <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
                    <Switch
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    /> */}
                {/* </div> */}

                <p>Can you administer oral medications?</p>
                <p>Can you administer injectable medications?</p>
                <p>Do you have experience with older/senior animals?</p>
                <p>Can you provide daily exercise?</p>
                <p>Are you willing to work with an animal longer than a week?</p>
                <p>Do you offer diabetic/insulin care?</p>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    vtInfo : {
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
export default connect(mapStateToProps)(VTReg3);
