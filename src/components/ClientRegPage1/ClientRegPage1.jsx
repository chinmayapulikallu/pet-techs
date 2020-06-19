import React, { Component } from "react";

class ClientRegPage1 extends Component {

    state ={
        
    }
  render() {
    return (
      <div>
        <h4>All fields required*</h4>
        <input type="text" placeholder="Home address" />
        <input type="text" placeholder="apt/suite" />
        <br />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Zip" />
        <br />
        <button>Upload Photo</button>
        <br />
        <textarea
          type="text"
          rows="4"
          cols="50"
          placeholder="Please tell us a little about yourself."
        />
        <br />
        <textarea
          type="text"
          rows="4"
          cols="50"
          placeholder="Please tell us a little about your house and yard."
        />
        <br />
        <input type="text" size="40" placeholder="Emergency Contact Name" />
        <br />
        <input type="text" size="40" placeholder="Emergency Contact Email" />
        <input type="text" size="25" placeholder="Emergency Contact Phone" />
        <br />
        <input type="text" size="30" placeholder="Vet Clinic Name" />
        <input type="text" placeholder="Vet Clinic Phone" />
        <input type="text" size="30" placeholder="Vet Clinic Address" />
        <br />
        <h4>
          Are you Ok with a Vet Tech transporting your animal to the Vet in an
          emergency?
        </h4>
        <br />
        <input type="radio" id="Yes" name='transport' value="true" />
        <label for="Yes">Yes</label>
        <br />
        <input type="radio" id="No" name='transport' value="false" />
        <label for="No">No</label>
        <br />
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
export default ClientRegPage1;
