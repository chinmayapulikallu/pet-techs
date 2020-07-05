import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';

import { withRouter } from 'react-router-dom';
import '../ClientProfile/ClientProfile.css';

import Uppy, { XHRUpload, DragDrop } from 'uppy'


const styles = theme => ({
    root: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: '30px',
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
    },


    items: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    img: {
        borderRadius: '50%',
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    contentInTable: {
        padding: '0px 10px',
    },
    table: {
        width: "100%",
        // backgroundColor: '#FFC2B4',
        backgroundColor: 'rgb(250, 250, 250)',

    },
    paper: {
        // marginTop: 20,
        borderRadius: "5px",
        // width: "75%",
        border: "2px solid #195C60",
    },
    bgImg: {
        backgroundColor: '#faefec',
    },
    editButton: {
        paddingBottom: '60%',
    },
    progressLoad: {
        position: 'absolute',
        justifyContent: "center",
        // marginLeft: '50%',
        // background: 'rgba(0, 0, 0, 0.5)',
    }


});

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#FFC2B4'),
        backgroundColor: '#FFC2B4',
        '&:hover': {
            backgroundColor: '#FFC2B4',
        },
        boxShadow: '9px 9px 16px #0000004c, -9px -9px 16px rgb(250, 250, 250)'

    },

}))(Button);


class Pet extends Component {
    state = {
        file: '',
        // editPicture: true,
        open: false,
        setLoading: true,


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
            setLoading: false,
            editPicture: !this.state.editPicture,
        })
    }
    handleCancel = () => {
        this.setState({
            ...this.state,
            open: false,
        });
    };

    componentDidMount() {

        this.props.dispatch({
            type: 'GET_PET_PICTURE',
            payload: { petId: this.props.pet.id }
        })
        console.log("pet's id:", this.props.pet.id)

    }
    handleCarePlanButton = () => {
        this.props.history.push(`/careplan/${this.props.pet.id}`);

    }
    handlePictureChangeFor = (event) => {
        console.log('changing', event.target.files[0])
        console.log('this.state.file in pet', this.state.file)
        this.setState({
            file: event.target.files[0]
        });
    }

    handleEditPicture = () => {
        console.log('handleEditPicture clicked', this.state.file)
        this.setState({
            // editPicture: !this.state.editPicture,
            setLoading: false,
        })
    }

    handleSavePicture = () => {
        console.log('handleEditPicture clicked', this.state.file)
        this.setState({
            // editPicture: !this.state.editPicture,
            setLoading: true,

        })
        console.log('set loading', this.state.setLoading)

        this.props.dispatch({
            type: 'UPDATE_PROFILE_PICTURE',
            payload: {
                id: this.props.pet.id,
                file: this.state.file
            }
        })
    }




    render() {


        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.items}>
                        <TableContainer component={Paper} className={classes.paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell scope="row" className={classes.bgImg}>
                                            {this.props.editable ?
                                                <>
                                                    <>
                                                        {this.props.pet.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                                                            <>
                                                                <Avatar className={classes.img} src="images/paw-gress-icon.png" alt="profile" />
                                                            </>
                                                            :

                                                            <Avatar className={classes.img} src={this.props.pet.media_url} alt={this.props.pet.profile_img}  />
                                                        }
                                                        <img src="images/edit.png" alt="edit_button" height="30" width="30" className={classes.editButton} onClick={this.handleClickOpen} />
                                                    </>
                                                    <>
                                                        <Dialog
                                                            open={this.state.open}
                                                            onClose={this.handleClose}
                                                            aria-labelledby="alert-dialog-title"
                                                            aria-describedby="alert-dialog-description"
                                                        >
                                                            <DialogTitle id="alert-dialog-title">{"Edit Your Pet Profile Picture"}</DialogTitle>
                                                            <DialogContent>

                                                                <input type="file" onChange={this.handlePictureChangeFor} />
                                                                {/* <CircularProgress className={classes.progressLoad} /> */}
                                                                <br />
                                                                {this.state.setLoading ?
                                                                    <>
                                                                        <CircularProgress className={classes.progressLoad} />
                                                                    </>
                                                                    :
                                                                    ''
                                                                }
                                                            </DialogContent>

                                                            <DialogActions>
                                                                <Button onClick={this.handleCancel} color="primary">
                                                                    Cancel
                                                  </Button>
                                                                <Button onClick={this.handleSavePicture} color="primary" autoFocus>
                                                                    Upload
                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </>
                                                </>
                                                :
                                                <>
                                                    {this.props.pet.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                                                        <>
                                                            <Avatar className={classes.img} src="images/paw-gress-icon.png" alt="profile"  />
                                                        </>
                                                        :
                                                        <Avatar className={classes.img} src={this.props.pet.media_url} alt={this.props.pet.profile_img}  />
                                                    }
                                                </>
                                            }
                                        </TableCell>
                                        <TableCell align="left"> <h4>{this.props.pet.pet_name}</h4><p>{this.props.pet.age} years old</p> <p>{this.props.pet.breed}</p><p>{this.props.pet.pet_behavior}</p></TableCell>
                                        <TableCell align="left" className={classes.items}><ColorButton variant="contained" color="info" onClick={this.handleCarePlanButton}>Care Plan</ColorButton>
                                            <p>{" "}</p>


                                            <img src="images/Heart.png" alt="profile" height="30" width="30" />

                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>



                    </Grid>
                    {/* ---------Content inside pet picture array when mapping------------ */}
                    <Grid item xs={6} className={classes.items}>
                        {/* <img src="images/camera.png" alt="pet_img" height="130" width="130" className={classes.items} />
                        <img src="images/camera.png" alt="pet_img" height="130" width="130" className={classes.items} />
                        <img src="images/camera.png" alt="pet_img" height="130" width="130" className={classes.items} />
                        <Button variant="contained" color="secondary">More Photos</Button> */}



                        {/* <p>{JSON.stringify(this.props.pet.array_agg)}</p> */}
                        {/* {this.props.pet.array_agg.map((petImg) => {
                        if (petImg === null) {
                            return (
                                <div key={petImg}>
                                    <Button
                                        variant="contained"
                                        component="label"
                                    >
                                        Upload pet's picture
                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                        />
                                    </Button>
                                </div>
                            )
                        } else {
                            return (
                                <div key={petImg}>
                                    <img src={petImg} alt="pet_img" height="100" width="100" />
                                </div>
                            )
                        }

                    })} */}
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


                    </Grid>
                    {/* ---------Content inside pet picture array when mapping------------ */}
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,
    user: reduxState.user,
})


export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Pet)));

