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
import Typography from "@material-ui/core/Typography";
// import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
    root: {
        marginTop: 100,
        marginBottom: 40,
        textAlign: "center",
        // flexGrow: 1,
        // marginLeft: theme.spacing(40),
        // marginRight: theme.spacing(20),
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        margin: "10px"
    },
    itemCenter: {
        textAlign: 'center',
        justifyContent: "center",
        marginTop: "20px",
    },
    inputField: {
        margin: "10px"
    },
    radioAlignment: {
        display: "block",
        margin: "10px"
    },
    inputHeading: {
        textAlign: "left"
    },
    buttonMargin: {
        margin: "10px"
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
        this.props.history.push('/creg1')
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
        this.props.history.push('/home')
        //dispatch to reducer
    }

    //upload Photo
    uploadPhoto = () => {
        alert('upload photo');
    }

    

    render() {
        const { classes } = this.props;
        
        return (
            <Container className={classes.root} maxWidth="md">
                <Typography variant="h4">Client Registration Page 2</Typography>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Pet Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                //value={age}
                                onChange={(event) => this.handleChange('pet_type', event)}
                                label="Pet Type"
                            >
                                <MenuItem value="1">Dog</MenuItem>
                                <MenuItem value="2">Cat</MenuItem>
                                <MenuItem value="3">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Pet Name"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('pet_name', event)}
                        />
                    </Grid>
                    <Grid item xs={12}> 
                        <TextField
                            label="If others, please specify"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('other_pet', event)}
                        />
                        <TextField
                            label="Weight"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('weight', event)}
                        />
                        <TextField
                            label="Age"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('age', event)}
                        />
                  </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <RadioGroup defaultValue="male" aria-label="gender" className={classes.radioAlignment}
                                name="customized-radios" onChange={(event) => this.handleChangeFor('sex', event)}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            label="Breed"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('breed', event)}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.itemCenter}>
                        <Button color="primary" variant="contained"
                            onClick={this.uploadPhoto}>Upload Photo</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Pet Food Brand"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('food_brand', event)}
                        />
                        <TextField
                            label="Feedings per day"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('feeding_per_day', event)}
                        />
                        <TextField
                            label="Pet Food Brand"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={(event) => this.handleChange('amount_per_meal', event)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        label=" Optional* Other dietary restrictions, supplements, etc."  
                        type="text" variant="outlined" color="secondary"
                        InputProps={{
                            className: classes.inputField
                        }}
                        fullWidth
                        onChange={this.handleChange('optional_food')}
                    />
                    </Grid>
                    <Grid item xs={12}>
                        {/* {this.state.clientInfo.medications && this.state.clientInfo.medications.map(medication => 
                            <MedicationField medication/>
                            )} */}
                        {this.state.clientInfo.medications && this.state.clientInfo.medications.map(medication =>
                            <>
                            <TextField
                                label="Medication Name"
                                type="text"
                                variant="outlined"
                                className={classes.inputField}
                                onChange={(event) => this.handleChange('medication_name', event)}
                            />
                            <TextField
                                label="Optional *dosage "
                                type="text"
                                variant="outlined"
                                className={classes.inputField}
                                onChange={(event) => this.handleChange('medication_dosage', event)}
                            />
                            <TextField
                                label="Time Of Day"
                                type="text"
                                variant="outlined"
                                className={classes.inputField}
                                onChange={(event) => this.handleChange('dosage_time', event)}
                            />
                            <br />
                            </>
                        )}
                    </Grid>
                    
                    <Grid item xs={12} className={classes.itemCenter}>
                        <Button color="primary" variant="contained" 
                        onClick={this.addMedication}>Add Medication</Button>
                    </Grid>
                    <Grid item xs={12} className={classes.inputHeading}>
                        <Typography variant="h5">Behavioral:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        label="Type here "
                        type="text" variant="outlined" color="secondary"
                        InputProps={{
                            className: classes.fullwidth
                        }}
                        fullWidth
                        onChange={this.handleChange('pet_behavior')}
                    />
                    </Grid>
                    <Grid item xs={12} className={classes.inputHeading}>
                        <Typography variant="h5">Care Equipment:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Type here "
                            type="text" variant="outlined" color="secondary"
                        InputProps={{
                            className: classes.fullwidth
                        }}
                        fullWidth
                            onChange={this.handleChange('care_equipment')}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.itemCenter}>
                        <Button color="secondary" variant="contained"
                            className={classes.buttonMargin} onClick={this.handleBack}>Back</Button>
                        <Button color="secondary" variant="contained"
                            className={classes.buttonMargin}>Add Another Pet</Button>
                        <Button color="secondary" variant="contained" 
                        className={classes.buttonMargin} onClick={this.handleComplete}>Complete</Button>
                    </Grid>

                </Grid>
            </Container>
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
