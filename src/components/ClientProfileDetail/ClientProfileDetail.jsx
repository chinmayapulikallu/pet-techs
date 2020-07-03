import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from '../Pet/Pet';


import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from "@material-ui/core/Paper";
import { Typography, CardHeader } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

import { withRouter } from 'react-router-dom';
import '../ClientProfile/ClientProfile.css';
import TextField from '@material-ui/core/TextField';

import Uppy from '@uppy/core';
import DragDrop from '@uppy/react/lib/DragDrop';
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'

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
        paddingTop: 30,
        textAlign: 'center',
    },

    items: {
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    itemImg: {
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    header: {
        backgroundColor: fade("#195C60", 0.5),
        paddingTop: 2.5,
        paddingBottom: 2.5,
    },
    paperAbout: {
        marginTop: 20,
        borderRadius: "5px",
        width: "75%",
        border: "2px solid #195C60",
    },
    paperOther: {
        marginTop: 20,
        borderRadius: "5px",
        width: "100%",
        border: "2px solid #195C60",
    },
    contentInTable: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 20,

    }
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
        open: false,
    }
    componentWillReceiveProps = () => {
        this.setState({
            ...this.state,
            open: this.props.open,
        })
    }

    handleClickOpen = () => {
        this.setState({
            ...this.state,
            open: true,
        })
    }

    handleCancel = () => {
        this.setState({
            ...this.state,
            open: false,
        });
    };

    handleSubmitImg = () => {
        this.props.dispatch({
            type: 'UPDATE_CLIENT_PROFILE_PICTURE',
            payload: {
                file: this.state.file
            }
        })
        this.setState({
            ...this.state,
            open: false,
        });
    };

    //-----------------------------------

    uppy = Uppy({
        meta: { type: 'profilePicture' },
        restrictions: { maxNumberOfFiles: 1 },
        autoProceed: true
    })
    reader = new FileReader()



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


        this.uppy.on('upload', file => {
            let fileKey = Object.keys(this.uppy.state.files)[0];
            let fileFromUppy = this.uppy.state.files[fileKey].data;
            this.setImage(fileFromUppy);
        })

        this.reader.onloadend = () => {
            this.setState({
                profile_img: this.reader.result,
            })
        }
        console.log('data from client profile', this.state)
    }

    setImage = file => {
        //reads the file into a local data url
        this.reader.readAsDataURL(file);
        this.setState({
            ...this.state,
            file: file,
        })
    }

    //-----------------------------------






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
            alert('Please make sure that you filled all the information!')
        } else {
            //dispatch
            this.props.dispatch({
                type: "UPDATE_CLIENT_DATA",
                payload: this.state
            });
            this.setState({
                editable: !this.state.editable,
            });
        }
    }
    handleInputChangeFor = (property) => (event) => {
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
                <div className={classes.title}>
                    <div className={classes.userBasicInfo}>
                        <Grid container spacing={1}>
                            <Grid item xs={5} className={classes.items}>

                                {this.state.editable ?
                                    <>
                                        <button onClick={this.handleClickOpen}>Edit</button>
                                        {this.props.client.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                                            <img className={classes.img} src="images/blank-profile-picture.png" alt="blank-profile" height="200" width="200" />
                                            :
                                            <img className={classes.img} src={this.props.client.media_url} alt={this.props.client.profile_img} height="200" width="200" />
                                        }

                                        <Dialog
                                            open={this.state.open}
                                            onClose={this.handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">{"Edit Your Profile Picture"}</DialogTitle>
                                            <DialogContent>
                                                {/* <DialogContentText id="alert-dialog-description"> */}

                                                <DragDrop
                                                    uppy={this.uppy}
                                                />
                                                <img src={this.state.profile_img} alt='profile_picture' height="100%" width="100%" />

                                                {/* </DialogContentText> */}

                                            </DialogContent>

                                            <DialogActions>
                                                <Button onClick={this.handleCancel} color="primary">
                                                    Cancel
                                                  </Button>
                                                <Button onClick={this.handleSubmitImg} color="primary" autoFocus>
                                                    Upload
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </>
                                    :
                                    <>
                                        {this.props.client.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                                            <img className={classes.img} src="images/blank-profile-picture.png" alt="profile" height="200" width="200" />
                                            :
                                            <img className={classes.img} src={this.props.client.media_url} alt={this.props.client.profile_img} height="200" width="200" />
                                        }
                                    </>
                                }
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
                                        <h1>{this.state.client_name}</h1>
                                        <p>{this.state.city}, {this.state.state}</p>
                                        <Button variant="contained" color="primary" > <a href={`mailto:${this.props.user.user_email}`} target="_blank" className='link'> Contact {this.state.client_name}</a></Button>
                                    </>
                                }
                            </Grid>
                            {this.props.isClient && (
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
                            )}

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
                                    <Grid>
                                        <Paper elevation={5} className={classes.paperAbout}>
                                            <div>
                                                <CardHeader
                                                    title={`About ${this.state.client_name}`}
                                                    className={classes.header}
                                                />
                                            </div>
                                            <div >
                                                <Typography variant="subtitle1" className={classes.contentInTable}>
                                                    {this.state.about_client}
                                                </Typography>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </>
                            }
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className={classes.name}>
                        <h2>{this.state.client_name}'s Pets</h2>
                    </Grid>
                    {/* <h1>{JSON.stringify(this.props.petInfo)}</h1> */}

                    {this.props.petInfo.map((pet) => {
                        return (
                            <div key={pet.id}>
                                <Grid container spacing={3}>
                                    <Pet
                                        pet={pet}
                                        editable={this.state.editable}
                                    />
                                </Grid>

                            </div>
                        )
                    })}
                    <Grid container spacing={3} className={classes.paddingTop}>
                        <Grid item xs={6} className={classes.itemImg}>
                            <img src="images/belt.png" alt="profile" height="80" width="130" />
                        </Grid>
                        <Grid item xs={6} className={classes.itemImg}>
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
                                        defaultValue={this.state.about_equipment}
                                        variant="outlined"
                                        onChange={this.handleInputChangeFor("about_equipment")}
                                    />
                                </>
                                :
                                <>

                                    <Grid>
                                        <Paper elevation={5} className={classes.paperOther}>
                                            <div>
                                                <CardHeader
                                                    title={`${this.state.client_name}'s Pet Equipment`}
                                                    className={classes.header}
                                                />
                                            </div>
                                            <div >
                                                <Typography variant="subtitle1" className={classes.contentInTable}>
                                                    {this.state.about_equipment}
                                                </Typography>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </>
                            }

                        </Grid>
                        <Grid item xs={6} className={classes.items}>

                            {this.state.editable ?
                                <>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="About your home"
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

                                    <Grid>
                                        <Paper elevation={5} className={classes.paperOther}>
                                            <div>
                                                <CardHeader
                                                    title={`${this.state.client_name}'s Home Environment`}
                                                    className={classes.header}
                                                />
                                            </div>
                                            <div >
                                                <Typography variant="subtitle1" className={classes.contentInTable}>
                                                    {this.state.about_home}
                                                </Typography>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </>
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.itemImg}>
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
    isClient: reduxState.user.user_type === 0,
})


export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(ClientProfileDetail)));
