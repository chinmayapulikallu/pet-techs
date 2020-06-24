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

const styles = theme => ({
    root: {
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        marginTop: '100px',
    },
    title: {
        textAlign: 'center',
    },
    helperText: {
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
    }
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
                                <Typography variant="h6">Please select service:</Typography>
                                <br />
                                <FormControl variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Pet Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={0}
                                        color="secondary"
                                        label="Service"
                                    >
                                        <MenuItem value="0">Pet Sleepover</MenuItem>
                                        <MenuItem value="Dog">Pet Boarding</MenuItem>
                                        <MenuItem value="Cat">Drop-In</MenuItem>
                                        <MenuItem value="Other">Hospice</MenuItem>
                                    </Select>
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