import React, { Component } from 'react';


class VTPage2 extends Component {

    // HANDLE ALL CHECKMARK CHANGES
    // HANDLES THE SELECTION OF THE ANIMALS THE VET TECH IS COMFORTABLE WITH
    onChangeAnimal(event) {
        console.log(event.target.checked, event.target.name);
    }

    //HANDLES IF THE VET TECH IS HOME FULL TIME MON-FRIDAY
    onChangeAvailable(event) {
        console.log(event.target.checked, event.target.name); 
    }

    //HANDLES HOW FREQUENTLY THE VET TECH WILL BE ABLE TO TAKE THE DOG OUTSIDE
    onChangeOutside(event) {
        console.log(event.target.checked, event.target.name);
    }

    //HANDLES THE SIZE ANIMAL THE VET TECH IS COMFORTABLE WITH HANDLING
    onChangeSize(event) {
        console.log(event.target.checked, event.target.name);
    }

    //HANDLES IF THE VET TECH WILL BE HOSTING ANIMALS YOUNGER THAN 1 YEARS OLD
    onChangeAge(event) {
        console.log(event.target.checked, event.target.name);
    }

    //HANDLES IF THE VET TECH WILL BE HOSTING ANIMALS FROM MORE THAN ONE FAMILY AT A TIME
    onChangeMultiple(event){
        console.log(event.target.checked, event.target.name); 
    }

    //BUTTON CLICKS
    //THIS WILL DIRECT THE VET TECH TO THE PREVIOUS PAGE WHERE THEY CAN MAKE EDITS IF NEED BE
    handleBackClick = () => {
        console.log("CLICKED BACK");
    }

    //THIS WILL TAKE THE VET TECH TO THE 3RD VET TECH REGISTRATION PAGE
    handleContClick = () => {
        console.log("CLICKED CONTINUE");
    }

    //EQUIPMENT INPUT HANDLER
    handleChange = (event, property) => {
        console.log(event.target.value);
    }
    
    render() {
        return (
            <div>

                <div>
                    <h2>What are your service preferences</h2>
                </div>
                <div>
                    <h4>What animals will you provide services for?</h4>
                    <input type="checkbox" name="dogCheck" defaultChecked={false} onChange={this.onChangeAnimal} /> Dogs
                     <input type="checkbox" name="catCheck" defaultChecked={false} onChange={this.onChangeAnimal} /> Cats
               <input type="checkbox" name="otherCheck" defaultChecked={false} onChange={this.onChangeAnimal} /> Other
           </div>
                <div>
                    <h4>Are you home full time Monday-Friday?</h4>
                    <input type="radio" name="yesRadio" defaultChecked={false} onChange={this.onChangeAvailable} /> Yes
                    <input type="radio" name="noRadio" /> No
           </div>
                <div>
                    <h4>How frequently can you take dogs outside?</h4>
                    <input type="checkbox" name="hrCheck1" defaultChecked={false} onChange={this.onChangeOutside}/> 0-2 hrs
                    <input type="checkbox" name="hrCheck2" defaultChecked={false} onChange={this.onChangeOutside}/> 2-4 hrs
                    <input type="checkbox" name="hrCheck3" defaultChecked={false} onChange={this.onChangeOutside}/> 4-8 hrs
                    <input type="checkbox" name="hrCheck4" defaultChecked={false} onChange={this.onChangeOutside}/> N/A
                </div>
                <div>
                    <h4>What size animals are you comfortable hosting?</h4>
                    <input type="checkbox" name="smCheck" defaultChecked={false} onChange={this.onChangeSize}/> Small
                    <input type="checkbox" name="medCheck" defaultChecked={false} onChange={this.onChangeSize}/> Medium
                    <input type="checkbox" name="lgCheck" defaultChecked={false} onChange={this.onChangeSize}/> Large
                    <input type="checkbox" name="gtCheck" defaultChecked={false} onChange={this.onChangeSize}/> Giant
                </div>
                <div>
                    <h4>Will you host animals younger than 1 year old?</h4>
                    <input type="radio" name="yesAgeRadio" defaultChecked={false} onChange={this.onChangeAge}/> Yes
                    <input type="radio" name="noAgeRadio" defaultChecked={false} onChange={this.onChangeAge}/> No
           </div>
                <div>
                    <h4>Will you host animals from more than one family at a time?</h4>
                    <input type="radio" name="multiYesRadio" defaultChecked={false} onChange={this.onChangeMultiple}/> Yes
                    <input type="radio" name="multiNoRadio" defaultChecked={false} onChange={this.onChangeMultiple}/> No
           </div>
                <div>
                    <h4>Please provide a list of equipment that will be used when caring for pets:</h4>
                    <textarea
                        className="equipment"
                        placeholder="Optional..."
                        rows={5}
                        rowsmax={5}
                        cols={100}
                        onChange={(event) => this.handleChange(event, "equipment")}
                    />
                </div>
                <div>
                    <button onClick={this.handleBackClick}>Back</button>
                    <button onClick={this.handleContClick}>Continue</button>
                </div>



            </div>
        )
    }
}
export default VTPage2;