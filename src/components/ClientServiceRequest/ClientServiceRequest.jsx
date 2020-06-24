import React, { Component } from 'react';
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
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Checkbox from "@material-ui/core/Checkbox"

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
    datePicker: {
        // marginTop: 50
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
    // check: {
    //     textAlign: "center",
    //     marginLeft: "127px"
    // }
})

class ClientServiceRequest extends Component {

    state = {
        startDate: new Date(),
        endDate: new Date()
    }


    handleChange = (event, property) => {
        switch (property) {
            case "start_date":
                return this.setState({
                    [property]: event.target.value
                });
            case "end_date":
                return this.setState({
                    [property]: event.target.value
                })
                case "pet1":
                    return this.setState({
                        [property]: event.target.checked
                    })
        }
    }

    handleInputChange = (event, property) => {
        console.log("Here is state!", this.state)
        if (event.target.value === "true" || event.target.value === "false") {
            this.setState({
                [property]: event.target.checked === true,
            });
        } else {
            console.log(event.target.value)
            this.setState({
                [property]: event.target.value,
            });
        }
    }


    render() {
        const { classes } = this.props
        const startDate = this.state
        const endDate = this.state


        return (
            <div className={classes.root}>

                <div>
                    <Grid className={classes.title}>
                        <FormControl>
                            <Typography className={classes.title} variant="h3">Request Service</Typography>
                            <div>
                                <Typography className={classes.services} variant="h6">Please select service:</Typography>
                                <br />
                                <FormControl variant="outlined">
                                    <InputLabel>Service:</InputLabel>
                                    <Select
                                        
                                        
                                        value={"Sleepover"}
                                        color="secondary"
                                        label="Service"
                                    >
                                        <MenuItem value="Sleepover">Pet Sleepover</MenuItem>
                                        <MenuItem value="Boarding">Pet Boarding</MenuItem>
                                        <MenuItem value="Drop-In">Drop-In</MenuItem>
                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                    </Select>
                                    
                                </FormControl>
                           
                                <Typography className={classes.services} variant="h6">Please indicate which pet:</Typography>
                                <FormControl>
                                <FormGroup row={true}>
                                    <FormControlLabel
                                        control={<Checkbox name="pet1" />}
                                        value={this.state.pet1}
                                        onChange={(event) => this.handleInputChange(event, "pet1")}
                                        label="pet1"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="pet2" />}
                                        value={this.state.pet2}
                                        onChange={(event) => this.handleInputChange(event, "pet2")}
                                        label="pet2"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="pet3" />}
                                        value={this.state.pet2}
                                        onChange={(event) => this.handleInputChange(event, "pet3")}
                                        label="pet3"
                                    />
                                    </FormGroup>
                                </FormControl>
                            </div>
                            <br />
                            <Typography variant="h6">Please select the dates requesting for service:</Typography>
                            <br />
                            <div >
                               

                                <div>

                                    <DatePicker className={classes.datePicker}
                                        selected={this.state.startDate}
                                        onChange={(event) => this.handleChange(event, "start_date")}
                                        selectsStart
                                    //startDate={startDate}
                                    //endDate={endDate}
                                    />
                                    <DatePicker
                                        selected={this.state.endDate}
                                        onChange={(event) => this.handleChange(event, "end_date")}
                                        selectsEnd
                                    // startDate={startDate}
                                    // endDate={endDate}
                                    // minDate={startDate}
                                    />
                                    <TextField className={classes.boxes} id="outlined-basic"
                                        label="Start Date"
                                        variant="outlined"
                                        name="start_date"
                                        color="secondary"
                                    />
                                    <TextField className={classes.boxes} id="outlined-basic"
                                        label="End Date"
                                        variant="outlined"
                                        name="end_date"
                                        color="secondary"
                                    />
                                </div>
                                <div>
                                    <TextField className={classes.info}
                                        fullWidth
                                        multiline
                                        rows={10}
                                        type="text"
                                        id="outlined-basic"
                                        label="info"
                                        variant="outlined"
                                        color="secondary"
                                    />
                                </div>
                                <div>
                                    <TextField className={classes.info}
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
                                    <Button className={classes.button} onClick={this.handleJoinClick} variant="contained" color="primary" >Cancel</Button>
                                    <Button className={classes.button} onClick={this.handSignInClick} variant="contained" color="primary" >Send Request</Button>
                                </div>

                            </div>


                        </FormControl>
                    </Grid>
                </div>

            </div>
        );
    }
}

export default (withStyles(styles)(ClientServiceRequest));