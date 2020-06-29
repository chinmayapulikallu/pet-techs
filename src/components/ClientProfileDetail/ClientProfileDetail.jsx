import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from '../Pet/Pet';


import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

import { withRouter } from 'react-router-dom';
import '../ClientProfile/ClientProfile.css';
import TextField from '@material-ui/core/TextField';


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
        padding: 15,
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
    },
    contentInTable: {
        padding: '0px 10px',
    },
    textField: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
});



class ClientProfileDetail extends Component {
    state = {
        editable: false,
        id: '',
        client_name: '',
        profile_img: '',
        about_client: '',
        about_equipment: '',
        about_home: '',
        city: '',
        state: '',
        file: null,
    }


    componentDidMount() {
        const currentClient = this.props.clientInfo.find(client => client.user_id === parseInt(this.props.match.params.id))
        console.log("-------------->client profile", currentClient);
        this.setState({
            id: currentClient.user_id,
            client_name: currentClient.client_name,
            profile_img: currentClient.profile_img,
            about_client: currentClient.about_client,
            about_equipment: currentClient.about_equipment,
            about_home: currentClient.about_home,
            city: currentClient.city,
            state: currentClient.state,
        })
        console.log('state:', this.state)

        const currentId = this.props.match.params.id;
        console.log("currentID", currentId)
        this.props.dispatch({
            type: 'GET_PET_DATA',
            payload: { id: currentId }
        })
        console.log('pet data:', this.props.petInfo)

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
        if (this.state.client_name === '' || this.state.city === '' || this.state.state === '' || this.state.about_client === '' || this.state.about_home === '' || this.state.about_equipment === '') {
            alert('Please make sure that you filled all the infomation!')
        } else {
            this.setState({
                editable: !this.state.editable,
            });
        }
    }
    handleInputChangeFor = property => (event) => {
        console.log('input change', property, event.target.value)
        this.setState({
            [property]: event.target.value,
        });
    }

    // handlePictureChangeFor = (event) => {
    //     console.log('changing', event.target.files[0])

    //     this.setState({
    //         file: event.target.files[0]
    //     });
    // }
    // handleSavePicture = (event) => {
    //     this.props.dispatch({
    //         type: 'UPLOAD_PICTURE_CLIENT',
    //         payload: {
    //             file: this.state.file,
    //         }
    //     });
    // }

    render() {


        const { classes } = this.props;
        return (
            <div className={classes.root} >
                {/* <h1>{JSON.stringify(this.props.client.media_url)}</h1> */}

                {/* <Button
                        variant="contained"
                        component="label"
                    >
                        Upload pet's picture
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button> */}
                <div className={classes.title}>
                    <div className={classes.userBasicInfo}>
                        <Grid container spacing={1}>
                            <Grid item xs={5} className={classes.items}>
                                {/* <img className={classes.img} src="images/blank-profile-picture.png" alt="profile" height="150" width="150" /> */}
                                <img className={classes.img} src={this.props.client.profile_img} alt="profile" height="150" width="150" />
                                                                

                            </Grid>

                            <Grid item xs={3} className={classes.clientInfo}>


                                {this.state.editable ?
                                    <>
                                        <p><TextField id="filled-basic"
                                            label="Your name"
                                            color="secondary"
                                            variant="filled"
                                            value={this.state.client_name}
                                            height="10px"
                                            size="small"
                                            onChange={this.handleInputChangeFor("client_name")} /></p>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6} >
                                                <TextField id="filled-basic" label="City" color="secondary" variant="filled" size="small"
                                                    value={this.state.city} onChange={this.handleInputChangeFor("city")} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField id="filled-basic" label="State" color="secondary" variant="filled" size="small"
                                                    value={this.state.state} onChange={this.handleInputChangeFor("state")} />
                                            </Grid>
                                        </Grid>


                                    </>
                                    :
                                    <>
                                        <h3>{this.state.client_name}</h3>
                                        <p>{this.state.city}, {this.state.state}</p>
                                        <Button variant="contained" color="primary" > <a href={`mailto:${this.props.user.user_email}`} target="_blank" className='link'> Contact {this.state.client_name}</a></Button>
                                    </>
                                }

                            </Grid>
                            <Grid item xs={3} className={classes.editButton}>
                                {this.state.editable ?
                                    <>
                                        <img src="images/checkmark.png" alt="save_button" height="50" width="50" onClick={this.handleSaveClient} />
                                        <p>Save</p>
                                    </>
                                    :
                                    <>
                                        <img src="images/edit.png" alt="edit_button" height="50" width="50" onClick={this.handleEditClient} />
                                        <p>Edit profile</p>
                                    </>
                                }
                                {/* <img src="images/edit.png" alt="edit_button" height="50" width="50" onClick={this.handleEditClient} /> */}
                            </Grid>
                        </Grid>
                    </div>
                </div>
                {/* </Container> */}

                <Container className={classes.client_content} maxWidth="lg">
                    <Grid container spacing={3} >
                        <Grid item xs={9}>

                            {this.state.editable ?
                                <>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="About you"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        defaultValue={this.state.about_client}
                                        variant="outlined"
                                        onChange={this.handleInputChangeFor("about_client")}
                                    />
                                </>
                                :
                                <>
                                    <table className="about_table" width="100%" height="150px">
                                        <thead >
                                            <tr>
                                                <th className="table_head">About {this.state.client_name}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className={classes.contentInTable}>{this.state.about_client}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            }
                            {/* <tr><td>ksfdnjksdnfjknsjkfsndkjfnsdkjfnskdjnfkjsdnfjkdsnfkjsdnfkjdsnfkjdsnkfndskjfnksdnfksdnfkjsdnfjknsdkjfnsjkdnfjksdnfksjdnfjksdnfjksdfn</td></tr> */}

                        </Grid>


                    </Grid>

                    <Grid item xs={12} className={classes.name}>
                        <h3>{this.state.client_name}'s Pets</h3>
                    </Grid>
                    {/* <h1>{JSON.stringify(this.props.petInfo)}</h1> */}

                    {this.props.petInfo.map((pet) => {
                        return (
                            <div key={pet.id}>
                                <Grid container spacing={3}>
                                    <Pet
                                        pet={pet}
                                    />
                                </Grid>

                            </div>
                        )
                    })}
                    <Grid container spacing={3} className={classes.paddingTop}>
                        <Grid item xs={6} className={classes.items}>
                            <img src="images/belt.png" alt="profile" height="80" width="130" />
                        </Grid>
                        <Grid item xs={6} className={classes.items}>
                            <img src="images/house-icon.png" alt="profile" height="80" width="90" />
                        </Grid>
                        <Grid item xs={6} className={classes.items}>


                            {this.state.editable ?
                                <>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Pet's equipment"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        defaultValue={this.state.client_name}
                                        variant="outlined"
                                        onChange={this.handleInputChangeFor("client_name")}
                                    />
                                </>
                                :
                                <>
                                    {/* <td className={classes.contentInTable}>I have a kennel for both animals, as well as extra medical equipment for my preecious...I have a kennel for both animals, as well as extra medical equipment for my preecious...I have a kennel for both animals, as well as extra medical equipment for my preecious...I have a kennel for both animals, as well as extra medical equipment for my preecious...</td> */}
                                    <table className="about_table" width="100%" height="150px">
                                        <thead >
                                            <tr>
                                                <th className="table_head">{this.state.client_name}'s Pet Equipment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className={classes.contentInTable}>{this.state.about_equipment}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            }

                        </Grid>
                        <Grid item xs={6} className={classes.items}>

                            {this.state.editable ?
                                <>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Pet's equipment"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        defaultValue={this.state.about_home}
                                        variant="outlined"
                                        onChange={this.handleInputChangeFor("about_home")}
                                    />
                                </>
                                :
                                <>
                                    <table className="about_table" width="100%" height="150px">
                                        <thead >
                                            <tr>
                                                <th className="table_head">{this.state.about_home}'s Home Enviroment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className={classes.contentInTable}>{this.state.about_home}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            }
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

