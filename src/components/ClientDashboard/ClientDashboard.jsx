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
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const moment = require('moment');

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
        width: 800,
        height: 500,
        // marginLeft: 700,
        marginBottom: 50,
        border: "2px solid #195C60"
    },
    childCard: {
        width: 160,
        height: 150,
        // width: 400,
        // height: 300,
        marginRight: 30,
        marginBottom: 30,
        border: "2px solid #195C60",
        alignItems: 'left'
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
    petCard: {
        width: 400,
        height: 300,
        marginRight: 30,
        marginBottom: 30,
        border: "2px solid #195C60"
    },
    alignServices: {
        alignItems: "left"
    }

});

class ClientDashboard extends Component {

    componentDidMount() {
        console.log('-----> client dashboard :: ', this.props)
        this.props.dispatch({
            type: 'GET_CLIENT_DATA'
        })
        this.props.dispatch({
            type: 'GET_PET_DATA',
            // payload: { id: currentId }
        })
        this.props.dispatch({
            type: 'GET_CLIENT_SERVICE_REQUEST'
            // payload: { id: currentId }
        })
        this.props.dispatch({ type: "GET_ALL_VT_DATA" });
    }

    //search for service provider
    searchProvider = () => {
        this.props.history.push('/search')
    }

    //link to care plan
    carePlan = (petId) => {
        console.log('care plan id ::::', petId)
        this.props.history.push(`/careplan/${petId}`);
        this.props.dispatch({
            type: 'GET_PET_CARE_PLAN',
            payload: { id: petId }
        })
    }

    // redirect to vet tech profile
    vetProfile = (vetId) => {
        console.log("Dashboard to client:::::", vetId)
        this.props.history.push(`/vt-profile/${vetId}`);
    }

    render() {
        const { classes, clientInfo, petInfo, clientRequest } = this.props;
        return (
            <Container className={classes.root} maxWidth="md">
                {clientInfo && clientInfo.length > 0 && clientInfo.map((client) =>
                    <span key={client.user_id}>
                        <Grid item xs={12} className={classes.profileCenter}>
                             <div>
                                <Typography variant="h6"><b>{client.client_name}</b></Typography>
                                     {client.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                                        <>
                                          <img className={classes.img} src="images/blank-profile-picture.png" alt="profile" height="200" width="200" />
                                        </>
                                            :
                                        <img className={classes.img} src={client.media_url} alt={client.profile_img} height="200" width="200" />
                                        }
                             </div>                             
                        </Grid>
                        <Grid container>
                            <Grid item xs={3}>
                                <div>
                                    <img className={classes.profileImage} src="/images/service-provider.png" alt="serviceProviderIcon"
                                        height="100" width="100" />
                                </div>
                                <Button color="primary" variant="contained"
                                    className={classes.buttonMargin} onClick={this.searchProvider}>Find Service Provider</Button>
                                   
                            </Grid>
                            {clientRequest && clientRequest.length > 0 &&
                                <Grid item xs={6} >                          
                                    <Card className={classes.serviceList}>
                                        <CardContent>
                                        <Typography variant="h6">Pending Services ({clientRequest.filter(cr => cr.request_status === 0).length})</Typography>
                                            <Grid container direction="row">
                                            {clientRequest.map(request =>
                                                <div key={request.id}>
                                                    <Grid item xs={12} sm={2}>
                                                    {request.request_status === 0 &&
                                                        <Card variant="outlined" className={classes.childCard}>
                                                            {/* <CardHeader
                                                            avatar={
                                                                <Avatar aria-label="recipe" className={classes.avatar}>
                                                                    <CheckCircleIcon />
                                                                </Avatar>
                                                            }
                                                            action={
                                                                <IconButton aria-label="settings">
                                                                </IconButton>
                                                            }
                                                            title={request.vet_name}
                                                        /> */}
                                                            {/* <CardMedia
                                                            component="img"
                                                            className={classes.media}
                                                            image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                                                        /> */}
                                                        <CardContent className="align-center">
                                                                <Typography variant="body1">VET:{request.vet_name}</Typography>  
                                                                <Typography variant="body1">PET:{request.pet_name}</Typography>   
                                                        <Typography variant="body1">{moment(request.start_date_time).format("MMM Do YYYY")}</Typography>
                                                                <Button color="primary" variant="contained" size="small"
                                                                className={classes.buttonMargin} onClick={() => this.vetProfile(request.vet_id)}>VET Profile</Button>
                                                        </CardContent>
                                                        <CardActions>
                                                        </CardActions>    
                                                        </Card>
                                                    }
                                                    </Grid>
                                                </div>
                                            )} 
                                        </Grid>
                                        </CardContent>        
                                    </Card>                              
                                </Grid>
                            }
                        </Grid>
                        <Grid container>
                            {clientRequest && clientRequest.length > 0 &&
                                <Grid item xs={6}>
                                    <Card className={classes.serviceList}>
                                        <CardContent>
                                        <Typography variant="h6">Accepted Services ({clientRequest.filter(cr => cr.request_status === 1).length})</Typography>

                                            {clientRequest.map(request =>
                                                <div key={request.id}>
                                                    {request.request_status === 1 &&
                                                        <Card variant="outlined" className={classes.childCard}>
                                                            {/* <CardHeader
                                                                avatar={
                                                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                                                        <CheckCircleIcon />
                                                                    </Avatar>
                                                                }
                                                                action={
                                                                    <IconButton aria-label="settings">
                                                                    </IconButton>
                                                                }
                                                                title={request.vet_name}
                                                            /> */}
                                                            {/* <CardMedia
                                                            component="img"
                                                            className={classes.media}
                                                            image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                                                        /> */}
                                                            <CardContent className="align-center">
                                                                <Typography variant="body1">VET NAME:{request.vet_name}</Typography>
                                                                <Typography variant="body1">PET NAME:{request.pet_name}</Typography>
                                                                <Typography variant="body1">{moment(request.start_date_time).format("MMM Do YYYY")}</Typography>
                                                            <Button color="primary" variant="contained" size="small"
                                                                    className={classes.buttonMargin} onClick={() => this.vetProfile(request.vet_id)}>VET Profile</Button>
                                                            </CardContent>
                                                            <CardActions>
                                                            </CardActions>
                                                        </Card>
                                                    }
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                             </Grid>
                            }
                        </Grid>
                        <Grid container>
                            {clientRequest && clientRequest.length > 0 &&
                                <Grid item xs={6}>
                                    <Card className={classes.serviceList}>
                                        <CardContent>
                                            <Typography variant="h6">Declined Services ({clientRequest.filter(cr => cr.request_status === 2).length})</Typography>

                                            {clientRequest.map(request =>
                                                <div key={request.id}>
                                                    {request.request_status === 2 &&
                                                        <Card variant="outlined" className={classes.childCard}>
                                                            {/* <CardHeader
                                                                avatar={
                                                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                                                        <CheckCircleIcon />
                                                                    </Avatar>
                                                                }
                                                                action={
                                                                    <IconButton aria-label="settings">
                                                                    </IconButton>
                                                                }
                                                                title={request.vet_name}
                                                            /> */}
                                                            {/* <CardMedia
                                                            component="img"
                                                            className={classes.media}
                                                            image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                                                        /> */}
                                                            <CardContent className="align-center">
                                                                <Typography variant="body1">VET NAME:{request.vet_name}</Typography>
                                                                <Typography variant="body1">PET NAME:{request.pet_name}</Typography>
                                                                <Typography variant="body1">{moment(request.start_date_time).format("MMM Do YYYY")}</Typography>
                                                                <Button color="primary" variant="contained" size="small"
                                                                    className={classes.buttonMargin} onClick={() => this.vetProfile(request.vet_id)}>VET Profile</Button>
                                                            </CardContent>
                                                            <CardActions>
                                                            </CardActions>
                                                        </Card>
                                                    }
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            }
                        </Grid>
                    </span>
                )}
                <div className={classes.petTitle}>
                    <Typography variant="h6">Your Pets</Typography>
                </div>
                <Grid container>
                    {petInfo && petInfo.length > 0 && petInfo.map(pet =>
                        <Grid item xs={6} key={pet.id}>
                         <Card className={classes.petCard}>
                   
                            <Typography variant="h6">{pet.pet_name}</Typography>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image={pet.media_url}
                            />
                            <CardContent>
                                <Button color="primary" variant="contained"
                                    className={classes.buttonMargin} onClick={() => this.carePlan(pet.id)}>carePlan</Button>
                            </CardContent>
                 </Card>
                     </Grid>
                    )} 
                </Grid>
            </Container>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,
    clientRequest: reduxState.clientRequestReducer,
    user: reduxState.user

})

export default (withStyles(useStyles))(withRouter(connect(putReduxStateOnProps)(ClientDashboard)));