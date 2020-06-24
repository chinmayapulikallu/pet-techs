import React, { Component } from 'react';
import React, {useState} from 'react';
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
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        margin: "20px 30px 20px 30px",
        height: 45,
        width: 180,
        borderRadius: 12,
    },
})

class ClientServiceRequest extends Component {

    state = {
        startDate: new Date(),
        endDate: new Date()
    }


    handleChange = date => {
        this.setState({
            startDate: date
        })
    }

   
    render() {
        const { classes } = this.props
            
            
           
        return (
            <div className={classes.root}>
               
                <div>
                    <Grid className={classes.title}>
                        <FormControl>
                            <Typography className={classes.title} variant="h3">Request Service</Typography>
                          <div>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Pet Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={0}
                                        color="secondary"
                                        label="Pet Type"
                                    >
                                        <MenuItem value="0">Select</MenuItem>
                                        <MenuItem value="Dog">Dog</MenuItem>
                                        <MenuItem value="Cat">Cat</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                          </div>

                            <div className={classes.boxes}>
                                <TextField id="outlined-basic"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    selectsStart
                                    label="Start Date"
                                    variant="outlined"
                                    name="start_date"
                                    color="secondary"
                                />
                                <TextField id="outlined-basic"
                                    selected={endDate}
                                    onChange={date => endDate(date)}
                                    selectsEnd
                                    label="End Date"
                                    variant="outlined"
                                    name="end_date"
                                    color="secondary"
                                />
                                <div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => startDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                    />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        />
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