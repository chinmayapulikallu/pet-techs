import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import MedicationField from '../MedicationField/MedicationField'
// import FormLabel from '@material-ui/core/FormLabel';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 40,
        // flexGrow: 1,
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    title: {
        textAlign: 'center',
    },
    fullwidth: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
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
   


});

class ClientRegPage2 extends Component {

    state = {
        ...this.props,
    }

    componentDidMount() {
        console.log('in component did mount')
    }

    //add Medication
    addMedication = () => {
        let nextMedicationId = Math.max(...this.state.clientInfo.medications.map(m => m.id)) + 1
        console.log("medications ::", this.state, nextMedicationId)
        this.setState({
            ...this.state,
            clientInfo: {...this.state.clientInfo, medications:
                [...this.state.clientInfo.medications,
                    {
                        id: nextMedicationId,
                        medication_name: '',
                        medication_dosage: '',
                        dosage_time: ''
                    }
                ]}
        })
    }

    //back to client1
    handleBack = () => {
        this.props.history.dispatch('/creg1')
    }

    //Input function to capture input
    handleChange = property => (event) => {
        console.log('in handle change', property, event.target.value);
        this.setState({
            ...this.state,
            [property]: event.target.value
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

    //sign in page after completing
    handleComplete = () => {
        this.props.history.dispatch('/home')
    }

    

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <h2 className={classes.title}>Client Registration Page 2</h2>
                    <Grid container spacing={3}>
                    <Grid item xs={3}>
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
                    </Grid>
                    
                    
                  
              
                    <Grid item xs={12}> 
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
                  </Grid>
                    <Grid item xs={12}>
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
                    </Grid>
                <Grid className={classes.itemCenter}>
                    <Button color="primary" variant="contained">Upload Photo</Button>
                    </Grid>
                    <Grid item xs={12}>
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
                    </Grid>
                    <Grid className={classes.optional}>
                    <TextField
                        id="outlined-full-width" label=" Optional* Other dietary restrictions, supplements, etc."  
                        type="text" variant="outlined" color="secondary"
                        InputProps={{
                            className: classes.fullwidth
                        }}
                        fullWidth
                        onChange={this.handleChange('optional_food')}
                    />
                    </Grid>
                    {this.state.clientInfo.medications && this.state.clientInfo.medications.map(medication => 
                            <MedicationField medication/>
                            )}
                    
                <Grid className={classes.itemCenter}>
                        <Button color="primary" variant="contained" 
                        onClick={this.addMedication}>Add Medication</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Behavioral:</h2>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="outlined-full-width" label="Type here "
                        type="text" variant="outlined" color="secondary"
                        InputProps={{
                            className: classes.fullwidth
                        }}
                        fullWidth
                        onChange={this.handleChange('pet_behavior')}
                    />
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Care Equipment:</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-full-width" label="Type here "
                            type="text" variant="outlined" color="secondary"
                        InputProps={{
                            className: classes.fullwidth
                        }}
                        fullWidth
                            onChange={this.handleChange('care_equipment')}
                        />
                    </Grid>
                    <Grid className={classes.itemCenter}>
                        <Button color="secondary" variant="contained" onClick={this.handleBack}>Back</Button>
                        <Button color="secondary" variant="contained">Add Another Pet</Button>
                        <Button color="secondary" variant="contained" onClick={this.handleComplete}>Complete</Button>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    clientInfo: {
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
        optional_food: '',
        care_equipment: '',
        pet_behavior: '',
        medications: [
            {
                id: 1,
                medication_name: '',
                medication_dosage: '',
                dosage_time:''
            }
        ],
        ...state.vtInfo
    }
   
})

export default (withStyles(useStyles, {withTheme: true} ))(withRouter(connect(mapStateToProps)(ClientRegPage2)));
