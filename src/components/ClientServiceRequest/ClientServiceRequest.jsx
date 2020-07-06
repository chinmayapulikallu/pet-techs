import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from "@material-ui/core/Checkbox"
import Swal from 'sweetalert2'



const styles = theme => ({
    root: {
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        marginTop: '100px',
    },
    title: {
        textAlign: 'center',
    },
    boxes: {
        marginLeft: 20,
        marginTop: 15
    },
    button: {
        margin: "20px 30px 20px 30px",
        height: 45,
        width: 180,
        borderRadius: 12,
    },
    info: {
        marginTop: 20
    },
    services: {
        marginTop: 20
    },
    formControl: {
        width: 150
    }
})

class ClientServiceRequest extends Component {

    state = {
        ...this.props.clientRequest,
        vet_id: this.props.vetProfile.user_id
    };

    componentDidMount() {
        console.log("clientservicerequest mount :: ", this.state)
        window.scrollTo(0, 0)
    }

    handleDateChange = (event, property) => {
        this.setState({
            [property]: event,
        })
    }

    handleChange = (event, property) => {
        console.log(event.target.value, "#####")
        this.setState({
            [property]: event.target.value
        })
    }

    handleChecks = (event, property) => {
        console.log(event.target.value, property);
        if (event.target.value === "true" || event.target.value === "false") {
            this.setState({
                [property]: event.target.value === "true",
            });
        } else {
            console.log(":::::", event.target.value)
            this.setState({
                [property]: [...this.state.pet_id, event.target.value],
            });
        }
    };

    handleCancel = () => {
        this.props.history.goBack();
    }

    handleSendRequest = () => {
        console.log("Clicked Send Request", this.props.user)
        Swal.fire({
            text: `Request sent to ${this.props.vetProfile.vet_name} via email!`,
            width: 400,
            padding: '1em',
            background: '#fff url()',
            showConfirmButton: false,
            timer: 5000,
        })
        this.props.dispatch({ type: 'SET_CLIENT_SERVICE_REQUEST', payload: this.state })
        this.props.history.push("/clientDashboard")
    }

    // consoleLog = () => {
    //     console.log("Clicked Send Request", this.props.user)
    //     this.props.dispatch({type: 'SET_CLIENT_SERVICE_REQUEST', payload: this.state})
    //     // this.props.history.push("/clientDashboard")
    // }

    render() {
        const { classes } = this.props
        return (
            <>


                <div className={classes.root}>
                    <div>
                        <Grid className={classes.title}>
                            <FormControl>
                                <Typography className={classes.title} variant="h3">Request Service</Typography>
                                <div>

                                </div>
                                <div>
                                    <Typography className={classes.services} variant="h6">Please select service:</Typography>
                                    <br />
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel>Service:</InputLabel>
                                        <Select
                                            onChange={(event) => this.handleChange(event, "service_select")}
                                            value={this.props.service_select}
                                            color="secondary"
                                            label="Service"
                                        >
                                            <MenuItem value="Pet Sleepover">Pet Sleepover</MenuItem>
                                            <MenuItem value="Pet Boarding">Pet Boarding</MenuItem>
                                            <MenuItem value="Drop-In Care">Drop-In</MenuItem>
                                            <MenuItem value="Hospice Care">Hospice</MenuItem>
                                        </Select>

                                    </FormControl>

                                    <Typography className={classes.services} variant="h6">Please indicate which pet:</Typography>
                                    <FormControl>
                                        <FormGroup row={true}>
                                            {this.props.petInfo.map(pet =>
                                                <FormControlLabel
                                                    control={<Checkbox name={pet.pet_name} />}
                                                    value={pet.id}
                                                    onChange={(event) => this.handleChecks(event, "pet_id")}
                                                    label={pet.pet_name}
                                                />
                                            )}
                                            {/* <FormControlLabel
                                            control={<Checkbox name="pet1" />}
                                            //value={this.state.pet1}
                                            onChange={(event) => this.handleChecks(event, "pet1")}
                                            label="pet1"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="pet2" />}
                                            //value={this.state.pet2}
                                            onChange={(event) => this.handleChecks(event, "pet2")}
                                            label="pet2"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="pet3" />}
                                            //value={this.state.pet2}
                                            onChange={(event) => this.handleChecks(event, "pet3")}
                                            label="pet3"
                                        /> */}
                                        </FormGroup>
                                    </FormControl>
                                </div>
                                <br />
                                <Typography variant="h6">Please select the dates requesting for service:</Typography>
                                <br />
                                <div >


                                    <div>
                                        <Typography variant="subtitle1">Start Date</Typography>
                                        <DatePicker

                                            selected={this.state.start_date_time}
                                            onChange={(event) => this.handleDateChange(event, "start_date_time")}
                                        />
                                        <Typography variant="subtitle1">End Date</Typography>
                                        <DatePicker

                                            selected={this.state.end_date_time}
                                            onChange={(event) => this.handleDateChange(event, "end_date_time")}
                                        />
                                    </div>
                                    <div>
                                        <TextField className={classes.info}
                                            onChange={(event) => this.handleChange(event, "input_info")}
                                            fullWidth
                                            multiline
                                            rows={10}
                                            type="text"
                                            id="outlined-basic"
                                            label="Instructions"
                                            variant="outlined"
                                            color="secondary"
                                        />
                                    </div>
                                    <div>
                                        <TextField className={classes.info}
                                            onChange={(event) => this.handleChange(event, "add_info")}
                                            fullWidth
                                            multiline
                                            type="text"
                                            id="outlined-basic"
                                            label="Any additional information?"
                                            variant="outlined"
                                            color="secondary"
                                        />
                                    </div>
                                    <div>
                                        <Button className={classes.button} onClick={this.handleCancel} variant="contained" color="primary" >Cancel</Button>
                                        <Button className={classes.button} onClick={this.handleSendRequest} variant="contained" color="primary" >Send Request</Button>
                                        {/* <Button className={classes.button} onClick={this.consoleLog} variant="contained" color="primary" >Console Log</Button> */}
                                    </div>

                                </div>


                            </FormControl>
                        </Grid>
                    </div>

                </div>
            </>
        );
    }
}


const mapStateToProps = (reduxState, ownProps) => {
    const vetId = Number(ownProps.match.params.id);
    const vetProfile = reduxState.vtInfo.filter(
        (vet) => vet.user_id === vetId
    )[0];

    return {
        vetProfile,
        user: reduxState.user,

        clientRequest: {
            start_date_time: new Date(),
            end_date_time: new Date(),
            service_select: '',
            input_ino: '',
            add_info: '',
            pet_id: [],
            // pet2: false,
            // pet3: false

        },
        petInfo: reduxState.petInfo,
    };
};



export default withRouter(
    connect(mapStateToProps)(withStyles(styles)(ClientServiceRequest))
);


