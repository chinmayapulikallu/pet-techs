import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class MedicationField extends Component {
    render() {
        return (
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
                    onChange={(event) => this.handleChange('medication_dosage', event)}
                />
                <FormControl variant="outlined">
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
        )
    }
}
export default MedicationField;