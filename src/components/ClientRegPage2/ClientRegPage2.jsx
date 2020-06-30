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
import DatePicker from "react-datepicker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Uppy from '@uppy/core';
import DragDrop from '@uppy/react/lib/DragDrop';
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'

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
    petContainer: {
        marginBottom: 40
    }
});

class ClientRegPage2 extends Component {

    state = {
        ...this.props,
    }

    // autoFillForm = () => {
    //     this.setState({
    //         pets: [
    //             {
    //                 id: 1,
    //                 pet_type: 'Cat',
    //                 other_pet: '',
    //                 pet_name: 'Sampson',
    //                 weight: '15',
    //                 age: '5',
    //                 breed: 'f',
    //                 pet_bio: 'I love food',
    //                 sex: 'male',
    //                 food_brand: 'Control weight',
    //                 feeding_per_day: '2',
    //                 amount_per_meal: '1 cup',
    //                 optional_food: 'nope',
    //                 care_equipment: 'cope',
    //                 pet_behavior: 'Good boy',
    //                 medications: [
    //                     {
    //                         id: 1,
    //                         pet_id: '',
    //                         medication_name: 'Nope',
    //                         medication_dosage: 'nope',
    //                         dosage_time: new Date()
    //                     }
    //                 ],
    //             }
    //         ]
    //     })
    // }
    componentDidMount() {
        console.log('componentDidMount :: ', this.state)
    }
    handlePictureChangeFor = (event) => {
        console.log('changing', event.target.files[0])

        this.setState({
            file: event.target.files[0]
        });
    }
    handleSavePicture = (event) => {
        this.props.dispatch({
            type: 'UPLOAD_PICTURE_CLIENT',
            payload: {
                file: this.state.file,
            }
        });
    }

    //add AnotherPet
    addPets = () => {
        let petsId = Math.max(...this.state.petInfo.pets.map(pet => pet.id)) + 1
        console.log("Pet List ::", this.state, petsId)
        this.setState({
            ...this.state,
            petInfo: {
                ...this.state.petInfo, pets:
                    [...this.state.petInfo.pets,
                    {
                        id: petsId,
                        pet_type: '',
                        other_pet: '',
                        pet_name: '',
                        weight: '',
                        age: '',
                        breed: '',
                        pet_bio: '',
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
                                dosage_time: new Date()
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
                pet_id: '',
                medication_name: '',
                medication_dosage: '',
                dosage_time: new Date()
            }
        )

        this.setState({
            ...this.state,
            petInfo: {
                ...this.state.petInfo, pets:
                    [...this.state.petInfo.pets.filter(pet => pet.id !== petId), currentPet]
            }
        })
    }

    //back to client1
    handleBack = () => {
        this.props.onBack();
    }


    handleChange = (petId, property) => (event) => {
        console.log(petId, property, event.target, this.state.petInfo);
        const currentPet = this.state.petInfo.pets.find(pet => pet.id === petId)
        if (event.target.value === "true" || event.target.value === "false") {
            currentPet[property] = (event.target.value === "true")
        } else {
            currentPet[property] = event.target.value
        }
        this.setState({
            ...this.state,
            petInfo: {
                ...this.state.petInfo, pets:
                    [...this.state.petInfo.pets.filter(pet => pet.id !== petId), currentPet]
            }
        })
    }

    handleMedicationChange = (petId, medicationId, property) => (event) => {
        console.log(petId, property, event.target, this.state.petInfo);
        const currentPet = this.state.petInfo.pets.find(pet => pet.id === petId)
        const currentMedication = currentPet.medications.find(med => med.id === medicationId)
        if (event.target.value === "true" || event.target.value === "false") {
            currentMedication[property] = (event.target.value === "true")
        } else {
            currentMedication[property] = event.target.value
        }
        currentPet.medications = [...currentPet.medications.filter(med => med.id != medicationId), currentMedication]
        this.setState({
            ...this.state,
            petInfo: {
                ...this.state.petInfo, pets:
                    [...this.state.petInfo.pets.filter(pet => pet.id !== petId), currentPet]
            }
        })
    }

    //date input for medication 
    handleDateChange = (petId, medicationId, property) => (date) => {
        console.log("handleDateChange", date, this.state.petInfo.pets[0])
        const currentPet = this.state.petInfo.pets.find(pet => pet.id === petId)
        const currentMedication = currentPet.medications.find(med => med.id === medicationId)
        currentMedication[property] = date
        currentPet.medications = [...currentPet.medications.filter(med => med.id != medicationId), currentMedication]
        this.setState({
            ...this.state,
            petInfo: {
                ...this.state.petInfo, pets:
                    [...this.state.petInfo.pets.filter(pet => pet.id !== petId), currentPet]
            }
        })
    }

    //sign in page after completing
    handleNext = () => {
        this.props.dispatch({
            type: 'SET_PET',
            payload: {
                //...this.state
                ...this.state.petInfo
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
                <Typography variant="h4" className={classes.title}>
                    Pet Infomation
          {/* <Button onClick={this.autoFillForm}></Button> */}
                </Typography>


                {this.state.petInfo.pets && this.state.petInfo.pets.map(pet =>
                    <Card key={pet.id} className={classes.petContainer}>
                        <CardContent>
                            <Grid container spacing={3} key={pet.id}>
                                <Grid item xs={12}>

                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Pet Type</InputLabel>
                                        <Select native
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            color="secondary"
                                            value={pet.pet_type}
                                            onChange={this.handleChange(pet.id, 'pet_type')}
                                            label="Pet Type"
                                        >
                                            <option value={"none"}>None</option>
                                            <option value={"dog"}>Dog</option>
                                            <option value={"cat"}>Cat</option>
                                            <option value={"other"}>Other</option>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        label="Pet Name"
                                        type="text"
                                        value={pet.pet_name}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'pet_name')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="If others, please specify"
                                        type="text"
                                        value={pet.other_pet}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'other_pet')}
                                    />
                                    <TextField
                                        label="Weight"
                                        type="number"
                                        value={pet.weight}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'weight')}
                                    />
                                    <TextField
                                        label="Age"
                                        type="number"
                                        value={pet.age}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'age')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <RadioGroup defaultValue="male" aria-label="gender" className={classes.radioAlignment}
                                            name="customized-radios" onChange={this.handleChange(pet.id, 'sex')}>
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        </RadioGroup>
                                    </FormControl>
                                    <TextField
                                        label="Breed"
                                        type="text"
                                        value={pet.breed}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'breed')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Bio about Your Pet "
                                        value={pet.pet_bio}
                                        type="text" variant="outlined" color="secondary"
                                        InputProps={{
                                            className: classes.inputField
                                        }}
                                        fullWidth
                                        onChange={this.handleChange(pet.id, 'pet_bio')}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.itemCenter}>
                                    {/* <Button color="primary" variant="contained"
                                        onClick={this.uploadPhoto}>Upload Photo</Button> */}

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Pet Food Brand"
                                        type="text"
                                        value={pet.food_brand}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'food_brand')}
                                    />
                                    <TextField
                                        label="Feedings per day"
                                        type="number"
                                        value={pet.feeding_per_day}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'feeding_per_day')}
                                    />
                                    <TextField
                                        label="Amount per meal"
                                        type="text"
                                        value={pet.amount_per_meal}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.inputField}
                                        onChange={this.handleChange(pet.id, 'amount_per_meal')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label=" Optional* Other dietary restrictions, supplements, etc."
                                        value={pet.optional_food}
                                        type="text" variant="outlined" color="secondary"
                                        InputProps={{
                                            className: classes.inputField
                                        }}
                                        fullWidth
                                        onChange={this.handleChange(pet.id, 'optional_food')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {pet.medications && pet.medications.map(medication =>
                                        <div key={medication.id}>
                                            <TextField
                                                label="Medication Name"
                                                type="text"
                                                value={medication.medication_name}
                                                variant="outlined"
                                                className={classes.inputField}
                                                onChange={this.handleMedicationChange(pet.id, medication.id, 'medication_name')}
                                            />
                                            <TextField
                                                label="Optional *dosage "
                                                type="text"
                                                variant="outlined"
                                                value={medication.medication_dosage}
                                                className={classes.inputField}
                                                onChange={this.handleMedicationChange(pet.id, medication.id, 'medication_dosage')}
                                            />
                                            <DatePicker
                                                selected={medication.dosage_time}
                                                onChange={this.handleDateChange(pet.id, medication.id, 'dosage_time')}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />
                                            {/* <TextField
                                label="Time Of Day"
                                type="text"
                                variant="outlined"
                                className={classes.inputField} 
                                onChange={this.handleChange('dosage_time')}
                            /> */}
                                            <br />
                                        </div>
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
                                        value={pet.pet_behavior}
                                        InputProps={{
                                            className: classes.fullwidth
                                        }}
                                        fullWidth
                                        onChange={this.handleChange(pet.id, 'pet_behavior')}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputHeading}>
                                    <Typography variant="h5">Care Equipment:</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Type here "
                                        type="text" variant="outlined" color="secondary"
                                        value={pet.care_equipment}
                                        InputProps={{
                                            className: classes.fullwidth
                                        }}
                                        fullWidth
                                        onChange={this.handleChange(pet.id, 'care_equipment')}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                )}


                <Grid item xs={12} className={classes.itemCenter}>
                    <Button color="primary" variant="contained"
                        className={classes.buttonMargin} onClick={this.handleBack}>Back</Button>
                    <Button color="primary" variant="contained"
                        className={classes.buttonMargin} onClick={this.addPets}>Add Another Pet</Button>
                    <Button color="primary" variant="contained"
                        className={classes.buttonMargin} onClick={this.handleNext}>Save and Continue</Button>
                </Grid>

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
                pet_bio: '',
                sex: '',
                food_brand: '',
                feeding_per_day: '',
                amount_per_meal: '',
                optional_food: '',
                care_equipment: '',
                pet_behavior: '',
                medications: [
                    {
                        id: 1,
                        pet_id: '',
                        medication_name: '',
                        medication_dosage: '',
                        dosage_time: new Date()
                    }
                ],
            }
        ],
        ...state.petInfo
    }
})

export default (withStyles(useStyles))(withRouter(connect(mapStateToProps)(ClientRegPage2)));
