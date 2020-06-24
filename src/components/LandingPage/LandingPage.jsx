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
import CardMedia from "@material-ui/core/CardMedia"



const styles = theme => ({
    landingPg: {
        borderRadius: 0,
        width: "100%",
        height: "auto",
        position: "relative"
    },
    btngroup: {
        position: "absolute",
        top: "70%",
        left: "75%",
    },
    btngroup2: {
        position: "absolute",
        top: "70%",
        left: "85%",
    },
    dogText:{
        position: "absolute",
        top: "50%",
        left: "70%"
    },
    catImage: {
        position: "relative",
        borderRadius: 0,
        width: "100%",
        height: "auto",

    },
    test: {
        position: "absolute",
        top: "235%",
        left: "10%"

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
        paddingTop: "50px",

    },
    cards: {
        fontFamily: 'Quicksand',
        margin: "25px",
        textAlign: 'center',
        justifyContent: "center",
        marginBottom: 100,
      
    },
    catText: {
        
        fontFamily: 'Quicksand',
        margin: "25px",
        textAlign: 'center',
        justifyContent: "center",
        marginBottom: 100,
        backgroundColor: "transparent",
        fontSize: 100
    },
    catPaw: {
        position: "absolute",
        top: "0%",
        left: "65%",
        borderRadius: 40
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
    },
    
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    cardService: {
        // height: 400,
        minHeight: 450,
    }
})


class LandingPage extends Component {

    handleJoinClick = () => {
        console.log("ClickedJoin");
        this.props.history.push('/register')
    }

    handSignInClick = () => {
        console.log("ClickedSignIn");
        this.props.history.push('/home')

    }

    serviceProviderClick = () => {
        console.log("clickedSignIn");

        this.props.history.push('/register')
    }





    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                
                <Grid container spacing={3}>
                    <img className={classes.landingPg} src='../images/homeDog.png' />
                   <Typography variant="h3" className={classes.dogText}>Welcome to Pet Techs!</Typography>
                    <Button className={classes.btngroup2}  onClick={this.handleJoinClick} variant="contained" color="primary" >Join</Button>
                    <Button className={classes.btngroup} onClick={this.handSignInClick} variant="contained" color="primary" >Sign In</Button>
                </Grid>

                <div>
                    <Grid >
                        <Grid container spacing={3} >
                            <Typography className={classes.description} variant="h5">You love your pets. We love that you love your pets. Pet Techs is here to make sure you have qualified indviduals to help you take care of them.</Typography>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Typography className={classes.services} variant="h5"><b>Our Services</b></Typography>
                    <Grid container direction="row" justify="center" className={classes.cards} spacing={2}>
                        <Grid item xs={2}>
                            <Card className={classes.cardService}>
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
                            <Card className={classes.cardService}>
                                <CardContent>
                                    <div>
                                        <img className={classes.image} src="/images/boarding-icon.png" alt="boardingIcon" height="75" width="75" />
                                        <Typography variant="h6"><b>Pet Boarding</b></Typography>
                                        <Typography variant="subtitle1">Our care providers have cozy homes for your four legged friends. Have them watched in a providers home with pet boarding.</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={2}>
                            <Card className={classes.cardService}>
                                <CardContent>
                                    <div>
                                        <img className={classes.image} src="/images/drop-in-care-icon.png" alt="dropInCare" height="75" width="75" />
                                        <Typography variant="h6"><b>Drop in Care</b></Typography>
                                        <Typeography variant="subtitle1">Service providers drop by your home to help provide insulin injections, basic medical needs, or routing care.</Typeography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={2}>
                            <Card className={classes.cardService}>
                                <CardContent>
                                    <div>
                                        <img className={classes.image} src="/images/hospice-icon.png" alt="hospiceIcon" height="75" width="75" />
                                        <Typeography variant="h6"><b>Hospice Care</b></Typeography>
                                        <Typography variant="subtitle1">Hospice service centers around providers coming to your home, helping with general hospice comfort, maintenance and care.</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <img className={classes.catImage} src='../images/homeCat.png' />
                        <div className={classes.test}>
                            <Grid item xs={6}>
                            <Card raised={false} className={classes.catText}>
                                <Typography variant="h4">
                                    "I really appreciate the Pet Techs service providers! They've got my back when i need help with my pets, always going above and beyond with their care!"
                                </Typography>
                                <Typography variant="h5">
                                        - James, Eden Prairie Minnesota
                                </Typography>
                            </Card>
                            </Grid>
                            <Grid item>
                                <img src='../images/catPaw.png' className={classes.catPaw} />
                            </Grid>
                        </div>
        



                    </Grid>
                </div>
                <Grid>
                    <div>
                        <img className={classes.servProv} src="/images/service-provider.png" alt="serviceProviderIcon" height="200" width="200" />
                    </div>
                    <div>
                        <Typography className={classes.description} variant="h5">Find the best caretaker for your critter.</Typography>
                    </div>
                    <div>
                        <Button className={classes.button} onClick={this.serviceProviderClick} variant="contained" color="primary" >Find a service provider</Button>
                    </div>
                </Grid>
                <Grid>
                    <div>
                    </div>
                    <div>
                        <Typography className={classes.missionHeader} variant="h3">Our Mission</Typography>
                        <img className={classes.image} src="/images/mission-logo.png" alt="missionLogoIcon" height="300" width="300" />
                    </div>
                    <div>
                        <Typography className={classes.description} variant="h5">We're here to connect vetinary technicians with pet owners who want to hire qualified individuals to help give different kinds of out-of-clinic care. Either in your home or theirs, you want to know your precious animals are in great hands. We are commited to giving quality and professional care and to give you ease of mind. </Typography>
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