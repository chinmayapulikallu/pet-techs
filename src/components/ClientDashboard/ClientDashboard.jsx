import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
    root: {
        marginTop: 100,
        marginBottom: 40,
        textAlign: "center",
    },
    cardSearch: {
        width: 300,
        height: 200
    },
    profileCenter: {
        height: 200,
        width: 200,
       marginLeft: 400
    },
     profileImage: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 0,
        paddingTop: 25,
        width: 100,
        height: 100
    },
    buttonMargin: {
        margin: "10px"
    },
    serviceList: {
        width: 300,
        height: 200,
        marginLeft: 700,
        marginBottom: 300

    },
    petTitle: {
        marginBottom: 500
    },
    petList: {
        width: 300,
        height: 200,
        marginRight: 700,
        marginBottom: 400
    }

    
});

class ClientDashboard extends Component {

    //search service provider
    searchProvider = () => {
        alert('link to search page');
    }

    render() {
        const { classes, user, clientInfo, petInfo } = this.props;
        return (
          <Container className={classes.root} maxWidth="md">
            <Grid item xs={12} className={classes.profileCenter}>
                <Card>
                    <CardContent>
                        <div>
                            <Typography variant="h6"><b>CLIENT NAME</b></Typography>
                            <img className={classes.profileImage} src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png" alt="name" height="75" width="75" />     
                        </div>
                     </CardContent>
                </Card>
            </Grid>
            <Card className={classes.cardSearch}>
                <CardContent>
                    <div>                         
                        <img className={classes.profileImage} src="/images/service-provider.png" alt="serviceProviderIcon"
                        height="100" width="100" />
                    </div>
                    <Button color="primary" variant="contained"
                    className={classes.buttonMargin} onClick={this.searchProvider}>Find Service Provider</Button>   
                </CardContent>
            </Card>
                <Card className={classes.serviceList}>
                    <CardContent>
                        <div>
                            <Typography variant="h6">Scheduled Services</Typography>
                        </div>                   
                    </CardContent>
                </Card>
            <div className={classes.petTitle}>
                <Typography variant="h6">Your Pets</Typography>
            </div>
                <Card className={classes.petList}>
                    <CardContent>
                    <Typography variant="h6">Pet anme</Typography>
                    </CardContent>
                </Card>

               

            </Container>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfoReducer,
    petInfo: reduxState.petInfoReducer,
    user: reduxState.userReducer

})
export default (withStyles(useStyles))(withRouter(connect(mapStateToProps)(ClientDashboard)));