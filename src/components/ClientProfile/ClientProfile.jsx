import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

import { withRouter } from 'react-router-dom';
import './ClientProfile.css';


const styles = theme => ({
    root: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: '70px',
        flexGrow: 1,
    },
    paddingTop: {
        paddingTop: 50,
    },
    title: {
        backgroundColor: '#faefec',
        paddingTop: 130,
        width: '100%',
    },
    name: {
        textAlign: 'center',
    },

    items: {
        padding: theme.spacing(2),
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        borderRadius: '50%',
        position: 'absolute',
        top: 170,
        left: 100,
    },
    clientInfo: {
        marginBottom: 0,
        position: 'absolute',
        top: 160,
        left: 330,
    },
    client_content: {
        marginTop: 200,

    },

});



class ClientProfile extends Component {


    componentDidMount() {
        console.log('client profile', this.props.user.username)
    }
    handleBackButton = () => {
        console.log('clicked');
        this.props.history.push('/clientdashboard');
    }


    render() {
        console.log('client profile', this.props.user)

        const { classes } = this.props;
        return (

            <div className={classes.root} >
                {/* <Container maxWidth="md"> */}
                <div className={classes.title}>
                    <div className={classes.userBasicInfo}>
                        <Grid container spacing={1}>
                            <Grid item xs={5} className={classes.items}>
                                <img className={classes.img} src="images/blank-profile-picture.png" alt="profile" height="150" width="150" />
                            </Grid>
                            <Grid item xs={3} className={classes.clientInfo}>
                                <h4>{this.props.user.username}</h4>
                                <p>2.4 miles away</p>
                                <p>Minneapolis, MN</p>
                                <Button variant="contained" color="primary" > <a href={`mailto:webmaster@example.com`} className='link'> Contact to {this.props.user.username}</a></Button>
                                {/* <Button variant="contained" color="primary" className='link ><a href={`mailto:${this.props.clientInfo.user_email}`}>Contact to {this.props.user.username}</a></Button> */}
                            </Grid>
                        </Grid>
                    </div>
                </div>
                {/* </Container> */}

                <Container className={classes.client_content} maxWidth="md">
                    <Grid container spacing={3} >
                        <Grid item xs={6}>
                            <table className="about_table">
                                <thead >
                                    <tr>
                                        <th className="table_head">About {this.props.user.username}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            ksldafjls sdkjfnskjnf skljdnfskjdnf weijriowe slsndsdkjnf
                                            ksldafjls sdkjfnskjnf skljdnfskjdnf weijriowe slsndsdkjnf
                                            ksldafjls sdkjfnskjnf skljdnfskjdnf weijriowe slsndsdkjnf
                                            ksldafjls sdkjfnskjnf skljdnfskjdnf weijriowe slsndsdkjnf

                                    {/* <td>{this.props.clientInfo.about_client}</td> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} className={classes.name}>
                        <h4>{this.props.user.username}'s Pets</h4>
                    </Grid>
                    {/* ---------Content inside pet info array when mapping------------ */}

                    <Grid container spacing={3} className={classes.items}>
                        <Grid item xs={6} >
                            <table className="pet_table">
                                <tbody >
                                    <tr className="table_body">
                                        <td>
                                            <img src="images/blank-profile-picture.png" alt="profile" height="150" width="150" />
                                        </td>
                                        <td>
                                            <h4>Pet's name</h4>
                                            <p>8 years old</p>
                                            <p>Daschund</p>
                                            <p>Goodest Boy</p>
                                        </td>
                                        <td>
                                            <Button variant="contained" color="info" onClick={this.handleContactButton}>Care Plan</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                        {/* ---------Content inside pet info array when mapping------------ */}
                    </Grid>
                    <Grid container spacing={12} className={classes.paddingTop}>
                        <Grid item xs={6} className={classes.items}>
                            <img src="images/house-icon.png" alt="profile" height="80" width="90" />
                            <table className="about_table">
                                <thead>
                                    <tr>
                                        <th className="table_head">{this.props.user.username}'s Pet Equipment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            I have a kennel for both animals, as well as extra medical equipment for my preecious...
                                    {/* <td>{this.props.petInfo.care_equipment}</td> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={6} className={classes.items}>
                            <img src="images/house-icon.png" alt="profile" height="80" width="90" />
                            <table className="about_table">
                                <thead >
                                    <tr>
                                        <th className="table_head">{this.props.user.username}'s Home Enviroment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            I have a kennel for both animals, as well as extra medical equipment for my preecious...
                                    {/* <td>{this.props.clientInfo.about_home}</td> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.items}>
                        <Button variant="contained" color="primary" onClick={this.handleBackButton}>Back to Dashboard</Button>
                    </Grid>
                </Container>

            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfoReducer,
    petInfo: reduxState.petInfoReducer,
    user: reduxState.user
})

export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(ClientProfile)));

