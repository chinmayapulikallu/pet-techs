import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarePlan extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    clientInfo: reduxState.clientInfo,
    petInfo: reduxState.petInfo,
    user: reduxState.user,
})
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CarePlan)));