import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router"
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"


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
    searchImage: {
        paddingTop: 50
    },
    serviceTitle: {
        paddingTop: 50,
        paddingBottom: 10

    },
    groupCheck: {
        paddingLeft: 150
    },
    serviceType: {
        paddingLeft: 200
    }
})



class SearchPage extends Component {


    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div>
                    <Grid className={classes.title}>
                        <FormControl onSubmit={this.registerUser}>
                            <div>
                                <img className={classes.searchImage} src="/images/search-mag.png" alt="searchIcon" height="75" width="75" />
                            </div>
                            <Typography className={classes.serviceTitle} variant="h4">Find a service provider</Typography>
                        </FormControl>
                        <Typography variant="subtitle1">Filter</Typography>
                        <Grid  container direction={"row"} className= {classes.serviceType}>
                            <Select
                                value={"Sleepover"}
                                color="secondary"
                                label="Service"
                                variant="outlined"
                            >
                                <MenuItem value="Sleepover">Pet Sleepover</MenuItem>
                                <MenuItem value="Boarding">Pet Boarding</MenuItem>
                                <MenuItem value="Drop-In">Drop-In</MenuItem>
                                <MenuItem value="Hospice">Hospice</MenuItem>
                            </Select>
                            <FormGroup className={classes.groupCheck} row={true}>
                                {/* <Typography variant="subtitle1">Type:</Typography> */}
                                <FormControlLabel
                                    control={<Checkbox name="dog" />}
                                
                                    label="Dog"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="cat" />}
                                   
                                    label="Cat"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="other" />}
                                    
                                    label="Other"
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    errors: state.errors,
});


export default withRouter(
    connect(mapStateToProps)(withStyles(styles)(SearchPage))
);