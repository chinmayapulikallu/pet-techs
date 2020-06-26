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
        // id: '',
        // pet_name: '',
        // age: '',
        // breed: '',
        // pet_behavior: '',
    }


    componentDidMount() {
        // const currentPet = this.props.petInfo.find(pet => pet.id === parseInt(this.props.match.params.id))
        // console.log("-------------->client profile", currentPet);
        // this.setState({
        //     id: currentPet.id,
        //     pet_name: currentPet.pet_name,
        //     age: currentPet.age,
        //     breed: currentPet.breed,
        //     pet_behavior: currentPet.pet_behavior,
        // })
        // console.log('pet state:', this.state)
    }
    handleCarePlanButton = () =>{
        this.props.history.push(`/careplan/${this.props.pet.id}`);
        this.props.dispatch({
            type: 'GET_PET_CARE_PLAN',
            payload: { id: this.props.pet.id}
        })
    }


    render() {


        const { classes } = this.props;
        return (
            <div className={classes.root} >
                
                <Grid item xs={6} >
                    <table className="pet_table">
                        <tbody >
                            <tr className="table_body">
                                <td>
                                    <img src="images/blank-profile-picture.png" alt="profile" height="150" width="150" />
                                </td>
                                <td>
                                    <h4>{this.props.pet.pet_name}</h4>
                                    <p>{this.props.pet.age} years old</p>
                                    <p>{this.props.pet.breed}</p>
                                    <p>{this.props.pet.pet_behavior}</p>
                                </td>
                                <td>
                                    <ColorButton variant="contained" color="info" onClick={this.handleCarePlanButton}>Care Plan</ColorButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Grid>



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

