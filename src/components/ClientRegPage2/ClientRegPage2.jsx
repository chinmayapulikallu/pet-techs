import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = (theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 40,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        width: '90ch',
    },

});

class ClientRegPage2 extends Component {

    state = {
        pet_type: '',
        other_pet: '',
        pet_name: '',
        weight: '',
        age: '',
        breed: '',
        sex: '',
        food_brand: '',
        feeding_per_day: '',
        amount_per_meal: '',
        other_food: '', 
        optional_food: ''  
    }

    //Input function to capture input
    handleChange = (name, event) => {
        console.log('in handle change', name, event.target.value);
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }

    handleChangeFor = (name, event) => {
        console.log(name,event.target.value);
        if (event.target.value === "true" || event.target.value === "false") {
            this.setState({
                [name]: event.target.value === "true",
            });
        } else {
            this.setState({
                [name]: event.target.value,
            });
        }
    }


    render() {
        const { classes } = this.props;  
        return (
            <div>
                <Container maxWidth="lg" className={classes.root}>
                <h2>Client Registration Page 2</h2>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Pet Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event) => this.handleChange('pet_type', event)}
                            label="Pet Type"
                        >
                            {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                            <MenuItem value={1}>Dog</MenuItem>
                            <MenuItem value={2}>Cat</MenuItem>
                            <MenuItem value={3}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-password-input"
                        label="Pet Name"
                        type="text"
                        variant="outlined"
                        onChange={(event) => this.handleChange('pet_name', event)}
                    />
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="If others, please specify"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('other_pet', event)}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Weight"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('weight', event)}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Age"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('age', event)}
                        />
                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup defaultValue="male" aria-label="gender" 
                                name="customized-radios" onChange={(event) => this.handleChangeFor('sex', event)}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            id="outlined-password-input"
                            label="Breed"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('breed', event)}
                        />
                    </div>
                    <div>
                        <Button color="primary" variant="contained">Upload Photo</Button>
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="Pet Food Brand"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('food_brand', event)}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Feedings per day"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('feeding_per_day', event)}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Pet Food Brand"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('amount_per_meal', event)}
                        />
                    </div>
                    <div className={classes.optional}>
                        <TextField
                            id="outlined-password-input"
                            label="Optional * Other dietary restrictions, supplements etc."
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('optional_food', event)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="Medication Name"
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('medication_name', event)}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Optional *dosage "
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('medication_name', event)}
                        />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Time of Day</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                //value={age}
                                onChange={(event) => this.handleChange('dosage_time', event)}
                                label="Pet Type"
                            >
                                {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                                <MenuItem value={1}>Dog</MenuItem>
                                <MenuItem value={2}>Cat</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Button color="primary" variant="contained">Add Medication</Button>
                    </div>
                    <div>
                        <h2>Behavioral:</h2>
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="Type here "
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('behavioral', event)}
                        />
                    </div>
                    <div>
                        <h2>Care Equipment:</h2>
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="Type here "
                            type="text"
                            variant="outlined"
                            onChange={(event) => this.handleChange('care_equipment', event)}
                        />
                    </div>
                    <div>
                        <Button color="secondary" variant="contained">Back</Button>
                        <Button color="secondary" variant="contained">Add Another Pet</Button>
                        <Button color="secondary" variant="contained">Complete</Button>
                    </div>

                </Container>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
   
})

export default (withStyles(useStyles))(withRouter(connect(putReduxStateOnProps)(ClientRegPage2)));
