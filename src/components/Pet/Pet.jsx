import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

import { withRouter } from 'react-router-dom';
import '../ClientProfile/ClientProfile.css';

import Uppy, { XHRUpload, DragDrop } from 'uppy'


const styles = theme => ({
    root: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: '30px',
        flexGrow: 1,
    },


    items: {
        padding: theme.spacing(2),
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        borderRadius: '50%',

    },
    contentInTable: {
        padding: '0px 10px',
    }

    // block:{
    //     display: 'block',
    //     border: '2px solid #195C60',
    //     borderRadius: '10px',
    //     // border-collapse: collapse;
    //     // text-align: left;
    //     // padding-left: 5px;
    //     overflowWrap: 'break-word'   
    //  }
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
        editPicture: true,
    }

    componentDidMount() {

        this.props.dispatch({
            type: 'GET_PET_PICTURE',
            payload: { petId: this.props.pet.id }
        })
        console.log("pet's id:", this.props.pet.id)

    }
    handleCarePlanButton = () => {
        this.props.history.push(`/careplan/${this.props.pet.id}`);
        this.props.dispatch({
            type: 'GET_PET_CARE_PLAN',
            payload: { id: this.props.pet.id }
        })
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
            editPicture: !this.state.editPicture
        })
        this.props.dispatch({
            type: 'UPDATE_PROFILE_PICTURE',
            payload: {
                id: this.props.pet.id,
                file: "this.state.file"
            }
        })
    }





    render() {


        const { classes } = this.props;
        return (
            <div className={classes.root} >

                <Grid item xs={6} className={classes.items}>
                    <table className="pet_table" width="100%" height="150px">
                        <tbody >
                            <tr className="table_body">
                                <td className={classes.contentInTable}>
                                    <img className={classes.img} src="images/blank-profile-picture.png" alt="profile" height="150" width="150" />
                                    {this.state.editPicture ?
                                        <>
                                            <img className={classes.img} src={this.props.pet.age} alt="profile" height="150" width="150" />
                                            <input type="file" onChange={this.handlePictureChangeFor} onClick={this.handleEditPicture} />

                                        </>
                                        :
                                        <button onClick={this.handleEditPicture}>Save</button>
                                    }

                                    {/* <input type="file" onChange={this.handlePictureChangeFor} /> */}

                                </td>
                                <td className={classes.contentInTable}>
                                    <h4>{this.props.pet.pet_name}</h4>
                                    <p>{this.props.pet.age} years old</p>
                                    <p>{this.props.pet.breed}</p>
                                    <p>{this.props.pet.pet_behavior}</p>
                                </td>
                                <td className={classes.contentInTable}>
                                    <ColorButton variant="contained" color="info" onClick={this.handleCarePlanButton}>Care Plan</ColorButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </Grid>
                {/* ---------Content inside pet picture array when mapping------------ */}
                <Grid item xs={6}>
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
            </div >
        )
    }

}
const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,
    user: reduxState.user,
})


export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Pet)));

