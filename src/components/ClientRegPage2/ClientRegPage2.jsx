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
// import DatePicker from 'react-datepicker';

const useStyles = (theme) => ({
    root: {
        marginTop: 50,
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


    //add AnotherPet
    addPets = () => {
        let petsId = Math.max(...this.state.petInfo.pets.map(pet => pet.id)) +1
         console.log("Pet List ::", this.state, petsId)
         this.setState({
            ...this.state,
            petInfo: {...this.state.petInfo, pets:
                [...this.state.petInfo.pets,
                    {
                        id: petsId,
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
                    ]
                }]
            }
        })

    
    }

    //add Medication
    addMedication = (petId) => {
            const currentPet = this.state.petInfo.pets.find(pet => pet.id === petId)
            console.log("medications ::", this.state, petId, currentPet)
            let nextMedicationId = Math.max(...currentPet.medications.map(m => m.id)) + 1
            currentPet.medications.push(
                {
                    id: nextMedicationId,
                    medication_name: '',
                    medication_dosage: '',
                    dosage_time: ''
                }
            )
            
            this.setState({
                ...this.state,
                clientInfo: {...this.state.petInfo, pets:
                    [...this.state.petInfo.pets.filter(pet => pet.id !== petId), currentPet]
                }
            })
    }

    //back to client1
    handleBack = () => {
        this.props.onBack();
    }

    // //Input function to capture input
    // handleChange = (property) => (event) => {
    //     console.log('in handle change', property, event.target.value);
    //     this.setState({
    //         ...this.state,
    //         [property]: event.target.value
    //     })
    // }

    handleChange = (property) => (event) => {
        console.log(property,event.target.value);
        if (event.target.value === "true" || event.target.value === "false") {
            this.setState({
                [property]: event.target.value === "true",
            });
        } else {
            this.setState({
                [property]: event.target.value,
            });
        }
    }

    //sign in page after completing
    handleNext = () => {
        this.props.dispatch({
            type: 'SET_PET',
            payload: {
                ...this.props.petInfo
            }
        })
        this.props.onNext();
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
                {this.state.petInfo.pets && this.state.petInfo.pets.map(pet =>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Pet Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={0}
                                color="secondary"
                                onChange={this.handleChange('pet_type')}
                                label="Pet Type"
                            >
                                <MenuItem value="0">None</MenuItem>
                                <MenuItem value="Dog">Dog</MenuItem>
                                <MenuItem value="Cat">Cat</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Pet Name"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={this.handleChange('pet_name')}
                        />
                    </Grid>
                    <Grid item xs={12}> 
                        <TextField
                            label="If others, please specify"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={this.handleChange('other_pet')}
                        />
                        <TextField
                            label="Weight"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={this.handleChange('weight')}
                        />
                        <TextField
                            label="Age"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={this.handleChange('age')}
                        />
                  </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <RadioGroup defaultValue="male" aria-label="gender" className={classes.radioAlignment}
                                name="customized-radios" onChange={this.handleChange('sex')}>
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
                            onChange={this.handleChange('breed')}
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
                            onChange={this.handleChange('food_brand')}
                        />
                        <TextField
                            label="Feedings per day"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={this.handleChange('feeding_per_day')}
                        />
                        <TextField
                            label="Amount per meal"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            className={classes.inputField}
                            onChange={this.handleChange('amount_per_meal')}
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
                        {pet.medications && pet.medications.map(medication =>
                            <>
                            <TextField
                                label="Medication Name"
                                type="text"
                                variant="outlined"
                                className={classes.inputField}
                                onChange={this.handleChange('medication_name')}
                            />
                            <TextField
                                label="Optional *dosage "
                                type="text"
                                variant="outlined"
                                className={classes.inputField}
                                onChange={this.handleChange('medication_dosage')}
                            />
                            {/* <DatePicker
                                selected="00:00"
                                onChange={this.handleChange('dosage_time')}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"                           
                            /> */}
                            <TextField
                                label="Time Of Day"
                                type="text"
                                variant="outlined"
                                className={classes.inputField} 
                                onChange={this.handleChange('dosage_time')}
                            />
                            <br />
                            </>
                        )}
                    </Grid>
                    
                    <Grid item xs={12} className={classes.itemCenter}>
                        <Button color="primary" variant="contained" 
                        onClick={() => this.addMedication(pet.id)}>Add Medication</Button>
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
                        <Button color="primary" variant="contained"
                            className={classes.buttonMargin} onClick={this.handleBack}>Back</Button>
                        <Button color="primary" variant="contained"
                            className={classes.buttonMargin} onClick={this.addPets}>Add Another Pet</Button>
                        <Button color="primary" variant="contained" 
                        className={classes.buttonMargin} onClick={this.handleNext}>Save and Continue</Button>
                    </Grid>

                </Grid>
                )}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    petInfo: {
        pets: [
            {
                id: 1,
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
                        dosage_time: '00:00'
                    }
                ], 
            }
        ],
         ...state.petInfo
    } 
})

export default (withStyles(useStyles))(withRouter(connect(mapStateToProps)(ClientRegPage2)));
