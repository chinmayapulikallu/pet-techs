import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// material UI imports
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class CarePlan extends Component {

    // state = {
    //     id: '',
    //     pet_name: '',
    //     age: '',
    //     breed: '',
    //     pet_behavior: '',
    // }
    componentDidMount = () =>{
        
    }

    render() {
        return (
            <Container>
                <h1>Pet Photo will go here centered</h1>
               
                <Card>
                    <CardContent>
                      
                        <Typography>Pet Feeding Info Will Go Here</Typography>
                        <Typography>Pet Medical Info Will Go Here</Typography>
                        <h3>{this.props.petCarePlan.pet_name}</h3>
                        <Typography>Pet Behavioral Info Will Go Here</Typography>
                        <Typography>Pet Care Equipment Info Will Go Here</Typography>
                        <Typography>Pet Other Info Will Go Here</Typography>
                    </CardContent>
                </Card>

            </Container>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,
    user: reduxState.user,
    petCarePlan: reduxState.petCarePlan,
})
export default withRouter(connect(mapStateToProps)(withStyles({ withTheme: true })(CarePlan)));