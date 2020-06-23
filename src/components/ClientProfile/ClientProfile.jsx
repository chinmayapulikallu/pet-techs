import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
    root: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: '70px',
        flexGrow: 1,
    },
    title: {
        backgroundColor: '#fae6e1',
        paddingTop: 100,
        width: '100%',
    },
    name: {
        textAlign: 'center',
    },
    userBasicInfo: {
        // position: 'relative',

    },
    items: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    img: {
        borderRadius: '50%',
    },

});



class ClientProfile extends Component {


    componentDidMount() {
        console.log('client profile', this.props.user.username)
    }


    render() {
        console.log('client profile', this.props.user)

        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.title}>
                    <div className={classes.userBasicInfo}>
                        <Grid container spacing={3}>
                            <Grid item xs={5} className={classes.items}>
                                <img className={classes.img} src="images/blank-profile-picture.png" alt="profile" height="150" width="150" />
                            </Grid>
                            <Grid item xs={3} >
                                <h5>{this.props.user.username}</h5>
                                <p>2.4 miles away</p>
                                <p>Minneapolis, MN</p>
                            </Grid>
                            
                            
                            

                        </Grid>
                    </div>
                </div>
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
