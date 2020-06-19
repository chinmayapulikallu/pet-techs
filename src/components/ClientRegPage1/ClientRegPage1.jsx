import React, { Component } from "react";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';

class ClientRegPage1 extends Component {
  state = {
    ...this.props.clientInfo,
  };

  handleChange = (event, property) => {
    console.log("in handleChange", event.target.value);
    this.setState({
      [property]: event.target.value,
    });
  };

  handleClick = () =>{
    this.props.history.push('/creg2')
  }
  render() {
    return (
      <div>
        <h4>All fields required*</h4>
        <input
          type="text"
          placeholder="Home address"
          onChange={(event) => this.handleChange(event, "home_address_house")}
        />
        <input
          type="text"
          placeholder="apt/suite"
          onChange={(event) => this.handleChange(event, "apt_suite")}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          onChange={(event) => this.handleChange(event, "city")}
        />
        <input
          type="text"
          placeholder="State"
          onChange={(event) => this.handleChange(event, "state")}
        />
        <input
          type="text"
          placeholder="Zip"
          onChange={(event) => this.handleChange(event, "zip_code")}
        />
        <br />
        <button>Upload Photo</button>
        <br />
        <textarea
          type="text"
          rows="4"
          cols="50"
          placeholder="Please tell us a little about yourself."
          onChange={(event) => this.handleChange(event, "about_client")}
        />
        <br />
        <textarea
          type="text"
          rows="4"
          cols="50"
          placeholder="Please tell us a little about your house and yard."
          onChange={(event) => this.handleChange(event, "about_home")}
        />
        <br />
        <input
          type="text"
          size="40"
          placeholder="Emergency Contact Name"
          onChange={(event) => this.handleChange(event, "contact_name_1")}
        />
        <br />
        <input
          type="text"
          size="40"
          placeholder="Emergency Contact Email"
          onChange={(event) => this.handleChange(event, "contact_email_1")}
        />
        <input
          type="text"
          size="25"
          placeholder="Emergency Contact Phone"
          onChange={(event) => this.handleChange(event, "contact_phone_1")}
        />
        <br />
        <input
          type="text"
          size="30"
          placeholder="Vet Clinic Name"
          onChange={(event) => this.handleChange(event, "vet_clinic")}
        />
        <input
          type="text"
          placeholder="Vet Clinic Phone"
          onChange={(event) => this.handleChange(event, "clinic_phone")}
        />
        <input
          type="text"
          size="30"
          placeholder="Vet Clinic Address"
          onChange={(event) => this.handleChange(event, "clinic_address")}
        />
        <br />
        <h4>
          Are you Ok with a Vet Tech transporting your animal to the Vet in an
          emergency?
        </h4>
        <br />
        <input
          type="radio"
          id="Yes"
          name="transport"
          value="true"
          onChange={(event) => this.handleChange(event, "transport")}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          id="No"
          name="transport"
          value="false"
          onChange={(event) => this.handleChange(event, "transport")}
        />
        <label>No</label>
        <br />
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  clientInfo: {
    home_address_house: "",
    apt_suite: "",
    city: "",
    state: "",
    zip_code: "",
    about_client: "",
    about_home: "",
    contact_name_1: "",
    contact_phone_1: "",
    contact_email_1: "",
    vet_clinic: "",
    clinic_address: "",
    clinic_phone: "",
    transport: false,
    ...state.clientInfo,
  },
});

export default connect(mapStateToProps)(ClientRegPage1);
