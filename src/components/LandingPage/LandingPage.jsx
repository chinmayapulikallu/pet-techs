import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typeography from "@material-ui/core/Typography"


const styles = theme => ({
    landingPg: {
        borderRadius: 0,
    },
    description: {
        textAlign: "center",
        alignItems: 'center',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 400,
        marginLeft: 400,
        color: '#195C60'
    }

})


class LandingPage extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <img className={classes.landingPg} src='../images/homeDog.png' />
                </Grid>
                <div>
                    <br />
                    <Grid>
                        <Grid container spacing={0} alignItems="center" justify="center">
                            <Typeography className={classes.description} variant="h5">You love your pets. We love that you love your pets. Pet Techs is here to make sure you have qualified indviduals to help you take care of them.</Typeography>
                        </Grid>
                    </Grid>
                </div>
            </div>

        )
    }
}
// export default LandingPage

export default (withStyles(styles)(LandingPage));