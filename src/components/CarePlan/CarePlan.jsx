import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// material UI imports
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';


const useStyles = (theme) => ({
    root: {
        marginTop: 100,
        marginBottom: 40,
        textAlign: "center",
    },
    cardSearch: {
        width: 300,
        height: 200,
    },
    profileCenter: {
        height: 200,
        // width: 600,
        //    marginLeft: 300,
        textAlign: "center",
    },
    profileImage: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 0,
        paddingTop: 25,
        // width: 100,
        // height: 100,
    },
    container: {
        marginTop: 50,
    },
    itemCenter: {
        textAlign: 'center',
        justifyContent: "center",
        marginTop: "20px",
    },
});

class CarePlan extends Component {
    state = {
        isEditing: false,
        ...this.props.petCarePlan
    };
    componentDidMount() {
        // const currentPet = this.props.careplan.find(client => client.user_id === parseInt(this.props.match.params.id))
        this.props.dispatch({
            type: 'GET_PET_CARE_PLAN',
            payload: { id: this.props.match.params.id }
        })
        this.setState({
            pet_name: this.props.petCarePlan.pet_name,
            feeding_per_day: this.props.petCarePlan.feeding_per_day,
            food_brand: this.props.petCarePlan.food_brand,
            amount_per_meal: this.props.petCarePlan.amount_per_meal,
            pet_behavior: this.props.petCarePlan.pet_behavior,
            care_equipment: this.props.petCarePlan.care_equipment,
            sex: this.props.petCarePlan.sex,
            breed: this.props.petCarePlan.breed,
            weight: this.props.petCarePlan.weight,
            age: this.props.petCarePlan.age,
        })
        console.log('------------>state:', this.state)
        console.log('------------>reducer:', this.props.match.params.id)

       
    }

    backToProfile = () => {
        this.props.history.goBack();
    };

    handleEditToggle = () => {

        console.log(
            "In edit/save toggle",
            this.state,
            "redux state",
            this.props.petCarePlan
        );
        this.props.dispatch({
            type: "SAVE_PET_DETAILS",
            payload: {
                id: this.props.match.params.id,
                ...this.state
            },
        });
        this.setState({
            isEditing: !this.state.isEditing,
            pet_bio:'',
            feeding_per_day: '',
            food_brand: '',
            amount_per_meal: '',
            pet_behavior: '',
            care_equipment: '',
            sex: '',
            breed: '',
            weight: '',
            age: '',
        });
    };
    handleEditButton = () => {
        this.setState({
            isEditing: !this.state.isEditing,
        });
    }

    handleInputChange = (property) => (event) => {
        console.log("in handleinputchange", event.target.value, property);
        this.setState({
            [property]: event.target.value
        })
    };
    

    render() {
        const { classes, } = this.props;

        return (
            <Container className={classes.container}>
                <br />
                <br />
                <br />
                {/* {this.props.petCarePlan.map((carePlan) => {
          return ( */}
                <div>
                    <img
                        className={this.props.classes.profileImage}
                        src={this.props.petCarePlan.media_url}
                        alt={this.props.petCarePlan.profile_img}
                        height="150" width="150"
                    />
                    <br />
                    {/* <p>{JSON.stringify(this.props.petCarePlan)}</p> */}

                    <Typography variant="h2" className={this.props.classes.profileCenter}>
                        Care plan for {this.props.petCarePlan.pet_name}!
        </Typography>
                    <Card>
                        <CardContent>
                            <div>
                                <Grid className={classes.itemCenter}>
                                    <Button
                                        variant="contained"
                                        onClick={this.backToProfile}
                                    >
                                        Back to Profile
                                </Button>
                                </Grid>

                                <Typography>
                                    General Info:
                                {this.state.isEditing ? (
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            color="secondary"
                                            label="Pet info"
                                            size="small"
                                            value={this.state.pet_bio}
                                            onChange={this.handleInputChange("pet_bio")}
                                        />
                                    ) : (
                                            this.props.petCarePlan.pet_bio
                                        )}
                                </Typography>
                            </div>
                            <br />
                            <Typography>
                                Pet Feeding Info: I like to eat{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Feedings Per Day"
                                        size="small"
                                        value={this.state.feeding_per_day}
                                        onChange={this.handleInputChange("feeding_per_day")}
                                    />
                                ) : (
                                        this.props.petCarePlan.feeding_per_day
                                    )}{" "}
              meals per day, and my favorite food is{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Pet Food Brand"
                                        size="small"
                                        value={this.state.food_brand}
                                        onChange={this.handleInputChange("food_brand")}
                                    />
                                ) : (
                                        this.props.petCarePlan.food_brand
                                    )}
              .
            </Typography>
                            <br />
                            <Typography>
                                Please feed me{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Amount of food per meal"
                                        size="small"
                                        value={this.state.amount_per_meal}
                                        onChange={this.handleInputChange("amount_per_meal")}
                                    />
                                ) : (
                                        this.props.petCarePlan.amount_per_meal
                                    )}{" "}
              for each meal!
            </Typography>
                            <br />
                            <Typography>
                                Pet Behavior Info:{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="General Pet Behavior"
                                        size="small"
                                        value={this.state.pet_behavior}
                                        onChange={this.handleInputChange("pet_behavior")}
                                    />
                                ) : (
                                        this.props.petCarePlan.pet_behavior
                                    )}
              .
            </Typography>
                            <br />
                            <Typography>
                                Pet Equipment Info:{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Special Care Equipment"
                                        size="small"
                                        value={this.state.care_equipment}
                                        onChange={this.handleInputChange("care_equipment")}
                                    />
                                ) : (
                                        this.props.petCarePlan.care_equipment
                                    )}
              .
            </Typography>
                            <br />
                            <Typography>
                                Pet Stats: I am a{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Gender"
                                        size="small"
                                        value={this.state.sex}
                                        onChange={this.handleInputChange("sex")}
                                    />
                                ) : (
                                        this.props.petCarePlan.sex
                                    )}{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Breed"
                                        size="small"
                                        value={this.state.breed}
                                        onChange={this.handleInputChange("breed")}
                                    />
                                ) : (
                                        this.props.petCarePlan.breed
                                    )}
              . I weight{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Weight"
                                        size="small"
                                        value={this.state.weight}
                                        onChange={this.handleInputChange("weight")}
                                    />
                                ) : (
                                        this.props.petCarePlan.weight
                                    )}{" "}
              pounds and I am{" "}
                                {this.state.isEditing ? (
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        color="secondary"
                                        label="Age"
                                        size="small"
                                        value={this.state.age}
                                        onChange={this.handleInputChange("age")}
                                    />
                                ) : (
                                        this.props.petCarePlan.age
                                    )}{" "}
              years old.{" "}
                            </Typography>



                            <Grid className={classes.itemCenter}>
                                {this.state.isEditing ?
                                    <>
                                        <Button
                                            variant="contained"
                                            onClick={this.handleEditButton}
                                        >Cancel </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleEditToggle}
                                        >Save </Button>
                                    </>

                                    :
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleEditButton}
                                    >Edit </Button>

                                }
                            </Grid>
                        </CardContent>
                    </Card>

                </div>



            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    petCarePlan: {
        pet_name: '',
        feeding_per_day: '',
        food_brand: '',
        amount_per_meal: '',
        pet_behavior: '',
        care_equipment: '',
        sex: '',
        breed: '',
        weight: '',
        age: '',
        ...state.petCarePlan[0], // overrides default with any existing vt values
    },
    errors: state.errors,

});
export default withStyles(useStyles)(
    withRouter(connect(mapStateToProps)(CarePlan))
);
