import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typeography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    landingPg: {
        borderRadius: 0,
        width: "100%",
        height: "auto"
    },
    description: {
        textAlign: "center",
        fontFamily: 'Quicksand',
        alignItems: 'center',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 400,
        marginLeft: 400,
        color: '#195C60',
        paddingTop: 20,
        paddingBottom: 20
    },
    services: {
        textAlign: "center",
        fontFamily: 'Quicksand',
        alignItems: 'center',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 400,
        marginLeft: 400,
        paddingTop: "50px"
    },
    cards: {
        fontFamily: 'Quicksand',
        margin: "25px",
        textAlign: 'center',
        justifyContent: "center"
    },
    image: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 0,
        paddingTop: 25,
        width: 200,
        height: 200

    },
    servProv: {
        paddingTop: 35,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",

    },
    button: {
        height: 50,
        width: 200,
        borderRadius: 12,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 2
    },

    missionHeader: {
        textAlign: "center",
        fontFamily: 'Quicksand',
        alignItems: 'center',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 400,
        marginLeft: 400,
        paddingTop: 100,
        paddingBottom: 20
    },
    btn: {
        height: 50,
        width: 200,
        borderRadius: 12,
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        marginTop: 25
    }
})


class LandingPage extends Component {

    handleJoinClick = () => {
        console.log("ClickedJoin");
        this.props.history.push('/vtreg1')
    }

    handSignInClick = () => {
        console.log("ClickedSignIn");
        this.props.history.push('/vtreg1')

    }

    serviceProviderClick = () => {
        console.log("clickedSignIn");
        this.props.history.push('/vtreg1')
    }





    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <img className={classes.landingPg} src='../images/homeDog.png' />
                </Grid>
                <div>
                    <Grid >
                        <Grid container spacing={3} >
                            <Typeography className={classes.description} variant="h5">You love your pets. We love that you love your pets. Pet Techs is here to make sure you have qualified indviduals to help you take care of them.</Typeography>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Typeography className={classes.services} variant="h5"><b>Our Services</b></Typeography>
                    <Grid container direction="row" className={classes.cards} spacing={2}>
                        <Grid item xs={2}>
                            <Card>
                                <CardContent>
                                    <div>
                                        <img className={classes.image} src="/images/sleepover-icon.png" alt="sleepoverIcon" height="75" width="75" />
                                        <Typeography variant="h6"><b>Pet Sleepovers</b></Typeography>
                                        <Typeography variant="subtitle1">We love slumber parties! Providers watch your pet in the comfort of your own home. Jo need for you to pack up and transport!</Typeography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={2}>
                            <Card>
                                <CardContent>
                                    <div>
                                        <img className={classes.image} src="/images/boarding-icon.png" alt="boardingIcon" height="75" width="75" />
                                        <Typeography variant="h6"><b>Pet Boarding</b></Typeography>
                                        <Typeography variant="subtitle1">Our care providers have cozy homes for your four legged friends. Have them watched in a providers home with pet boarding.</Typeography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={2}>
                            <Card>
                                <CardContent>
                                    <div>
                                        <img className={classes.image} src="/images/drop-in-care-icon.png" alt="dropInCare" height="75" width="75" />
                                        <Typeography variant="h6"><b>Drop in Care</b></Typeography>
                                        <Typeography variant="subtitle1">Service providers drop by your home to help provide insulin injections, basic medical needs, or routing care.</Typeography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={2}>
                            <Card>
                                <CardContent>
                                    <div>
                                        <img className={classes.image} src="/images/hospice-icon.png" alt="hospiceIcon" height="75" width="75" />
                                        <Typeography variant="h6"><b>Hospice Care</b></Typeography>
                                        <Typeography variant="subtitle1">Hospice service centers around providers coming to your home, helping with general hospice comfort, maintenance and care.</Typeography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>
                    <Grid container spacing={3}>

                        <img className={classes.landingPg} src='../images/homeCat.png' />


                    </Grid>
                </div>
                <Grid>
                    <div>
                        <img className={classes.servProv} src="/images/service-provider.png" alt="serviceProviderIcon" height="200" width="200" />
                    </div>
                    <div>
                        <Typeography className={classes.description} variant="h5">Find the best caretaker for your critter.</Typeography>
                    </div>
                    <div>
                        <Button className={classes.button} onClick={this.serviceProviderClick} variant="contained" color="primary" >Find a service provider</Button>
                    </div>
                </Grid>
                <Grid>
                    <div>
                    </div>
                    <div>
                        <Typeography className={classes.missionHeader} variant="h3">Our Mission</Typeography>
                        <img className={classes.image} src="/images/mission-logo.png" alt="missionLogoIcon" height="300" width="300" />
                    </div>
                    <div>
                        <Typeography className={classes.description} variant="h5">We're here to connect vetinary technicians with pet owners who want to hire qualified individuals to help give different kinds of out-of-clinic care. Either in your home or theirs, you want to know your precious animals are in great hands. We are commited to giving quality and professional care and to give you ease of mind. </Typeography>
                    </div>
                    <Grid>
                        <div>
                            <Button className={classes.btn} onClick={this.handleJoinClick} variant="contained" color="primary" >Join</Button>
                            <Button className={classes.btn} onClick={this.handSignInClick} variant="contained" color="primary" >Sign In</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>




        )
    }
}
// export default LandingPage

export default (withStyles(styles)(LandingPage));