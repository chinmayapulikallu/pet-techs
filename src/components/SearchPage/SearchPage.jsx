import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router"
import { Typography, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import { ButtonBase } from "@material-ui/core"


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
        paddingLeft: 125
    },
    serviceType: {
        paddingLeft: 200,
        display: "flex"
    },
    results: {
        paddingTop: 50
    },
    viewProf: {
        height: 40,
        width: 100,
        textAlign: "center",
        fontSize: 10,

    },
    profPic: {

    },
    details1: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 10,
        marginLeft: 100
    },
    details2: {
        display: "flex",

        marginLeft: 70,
        marginTop: 50
    },
    card: {
        display: "flex",
        paddingBottom: 20,
        paddingTop: 20,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },



})



class SearchPage extends Component {

    handleChange = (event, property) => {
        console.log(event.target.value, "#####")
        this.setState({
            [property]: event.target.value
        })
    }

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
                        <Grid container direction={"row"} className={classes.serviceType}>
                            <Select
                                value={"Sleepover"}
                                color="secondary"
                                label="Service"
                                variant="outlined"
                                onChange={(event) => this.handleChange(event, "service_select")}
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
                        {/* <Grid justify="center">
                            <Card className>
                                <CardContent   >
                                    <Typography variant="h6">Name</Typography>
                                    <img src="/images/blank-profile-picture.png" alt="profilePic" height="75" width="75" />
                                    <Button variant="contained" color="primary" >View Profile</Button>
                                    <div >
                                        Bio
                                    </div>
                                    <div >
                                        Services and Skills
                                    </div>
                                </CardContent>


                            </Card>

                            <Card className={classes.about}>
                                <CardContent   >
                                    <Typography variant="h6">Name</Typography>
                                    
                                    <img className={classes.details1} src="/images/blank-profile-picture.png" alt="profilePic" height="75" width="75"/>
                                    
                                    <Button className={classes.details2} variant="contained" color="primary" >View Profile</Button>
                                   
                                  
                                </CardContent>
                            </Card>


                        </Grid> */}


                        <Grid>
                            <Grid container spacing={2}>
                               
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src="/images/blank-profile-picture.png" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" >
                                        <Grid item>
                                            <Typography gutterBottom variant="subtitle1">
                                                Name
                                                </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Certs
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                              About
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                View Profile
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                   
                            </Grid>
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