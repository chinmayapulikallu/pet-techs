import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

import { withRouter } from 'react-router-dom';
import '../ClientProfile/ClientProfile.css';


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
        paddingTop: 85,
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
    editButton: {
        display: 'flex',
        justifyContent: "right",
        marginLeft: '85%',
    }
});


class ClientProfileDetail extends Component {


    state = {
        editable: false,

        id: '',
        client_name: '',
        profile_img: '',
        about_client: '',
        about_home: '',
        pet_type: '',
        pet_name: '',
        breed: '',
        pet_img: '',
        pet_behavior: '',
    }


    componentDidMount() {
        const currentClient = this.props.clientInfo.find(client => client.id === parseInt(this.props.match.params.id))
        console.log("-------------->client profile", currentClient);
        this.setState({
            id: currentClient.id,
            client_name: currentClient.client_name,
            profile_img: currentClient.profile_img,
            about_client: currentClient.about_client,
            about_home: currentClient.about_home,
            pet_type: currentClient.pet_type,
            pet_name: currentClient.pet_name,
            breed: currentClient.breed,
            pet_img: currentClient.pet_img,
            pet_behavior: currentClient.pet_behavior,
        })
        console.log('state:', this.state)
    }




    handleBackButton = () => {
        console.log('clicked');
        this.props.history.push('/clientdashboard');
    }
    handleEditClient = () => {
        console.log('edit clicked!');
        this.setState({
            editable: true,
        });
    }
    handleSaveClient = () => {
        console.log('Save clicked!')
        this.setState({
            editable: false,
        });
    }
    handleInputChangeFor = property => (event) => {
        console.log('input change', property, event.target.value)
        this.setState({
            [property]: event.target.value,
        });
    }

    render() {


        const { classes } = this.props;
        return (
            <div className={classes.root} >
                {/* <h1>{JSON.stringify(this.props.clientInfo)}</h1> */}
                {/* {this.props.clientInfo.map((client) => {
                    return (<h1>{client.client_name} </h1>)
                })} */}

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

                <Container>
                    <Grid container spacing={12} className={classes.paddingTop}>
                        <Grid item xs={6} className={classes.items}>
                            <img src="images/house-icon.png" alt="profile" height="80" width="90" />
                            <table className="about_table">
                                <thead>
                                    <tr>
                                        <th className="table_head">{this.state.client_name}'s Pet Equipment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* I have a kennel for both animals, as well as extra medical equipment for my preecious... */}
                                        <td>{this.state.care_equipment}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={6} className={classes.items}>
                            <img src="images/house-icon.png" alt="profile" height="80" width="90" />
                            <table className="about_table">
                                <thead >
                                    <tr>
                                        <th className="table_head">{this.state.client_name}'s Home Enviroment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.about_home}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.items}>
                        <Button variant="contained" color="primary" onClick={this.handleBackButton}>Back to Dashboard</Button>
                    </Grid>
                </Container>

            </div >
        )
    }

}
const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,
    user: reduxState.user,
})


export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(ClientProfileDetail)));

