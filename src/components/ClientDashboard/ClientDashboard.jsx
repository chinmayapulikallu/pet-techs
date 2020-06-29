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
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
        width: 600,
        height: 400,
        // marginLeft: 700,
        marginBottom: 50
    },
    childCard: {
        width: 200,
        height: 320,
    },
    petTitle: {
        textAlign: "center"
        // marginBottom: 500
    },
    petList: {
        width: 400,
        height: 300,
        marginRight: 700,
        marginBottom: 400
    },
    media: {
        height: 100,
        width: 100,
        padding: 25,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },

    
});

class ClientDashboard extends Component {

    componentDidMount() {
        // console.log('CLient DashboaRd', clientInfo)
        this.props.dispatch({type: 'GET_CLIENT_DASHBOARD'});
    }

    //search service provider
    searchProvider = () => {
        alert('link to search page');
        //push to search service provider page
    }

    render() {
        const { classes, user, clientInfo, petInfo } = this.props;
        return (
          <Container className={classes.root} maxWidth="md">
                {clientInfo.map((client) =>    
                    <span key={client.user_id}>
                        <Grid item xs={12} className={classes.profileCenter}>
                          <Card>
                             <CardContent>
                               <div>
                                <Typography variant="h6"><b>{client.client_name}</b></Typography>
                                 <img className={classes.profileImage} src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png" alt="name" height="75" width="75" />     
                                </div>
                            </CardContent>
                         </Card>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
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
                            </Grid>
                            <Grid item xs={6}>
                                <Card className={classes.serviceList}>
                                    <CardContent>
                                        {/*Map request and services accepted */}
                                        <Typography variant="h6">Scheduled Services</Typography>
                                        <Card variant="outlined" className={classes.childCard}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                                        <CheckCircleIcon />
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                    </IconButton>
                                                }
                                                title="Vet Tech Name"
                                            />
                                            <CardMedia
                                                component="img"
                                                className={classes.media}
                                                image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                                            />
                                            <CardContent className="align-center">
                                                <Typography variant="h6">Service Date</Typography>
                                                <Button color="primary" variant="contained"
                                                    className={classes.buttonMargin} onClick={this.vtProfile}>VT Profile</Button>
                                            </CardContent>
                                            <CardActions>
                                            </CardActions>
                                        </Card>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>                          
                    </span>                   
                )}
                <div className={classes.petTitle}>
                    <Typography variant="h6">Your Pets</Typography>
                </div>
                <Card className={classes.petList}>
                    {petInfo.map(pet =>
                        <span key={pet.id}>
                            <Typography variant="h6">{pet.pet_name}</Typography>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                            />
                            <CardContent>
                                <Button color="primary" variant="contained"
                                    className={classes.buttonMargin} onClick={this.carePlan}>carePlan</Button>
                            </CardContent>
                        </span>
                    )}
                </Card>
          </Container>
        )
    }   
}

const putReduxStateOnProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,

    user: reduxState.user

})

export default (withStyles(useStyles))(withRouter(connect(putReduxStateOnProps)(ClientDashboard)));