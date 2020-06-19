import React, { Component } from 'react';

class VTPage2 extends Component {
    render() {
        return (
            <div>

                <div>
                    <h2>What are your service preferences</h2>
                </div>
                <div>
                    <h4>What animals will you provide services for?</h4>
                    <input type="checkbox" name="dogCheck" /> Dogs
                     <input type="checkbox" name="catCheck" /> Cats
               <input type="checkbox" name="otherCheck" /> Other
           </div>
                <div>
                    <h4>Are you home full time Monday-Friday?</h4>
                    <input type="radio" name="yesRadio" /> Yes
                    <input type="radio" name="noRadio" /> No
           </div>
                <div>
                    <h4>How frequently can you take dogs outside?</h4>
                    <input type="checkbox" name="hrCheck1" /> 0-2 hrs
                    <input type="checkbox" name="hrCheck2" /> 2-4 hrs
                    <input type="checkbox" name="hrCheck3" /> 4-8 hrs
                    <input type="checkbox" name="hrCheck4" /> N/A
                </div>
                <div>
                    <h4>What size animals are you comfortable hosting?</h4>
                    <input type="checkbox" name="smCheck" /> Small
                    <input type="checkbox" name="medCheck" /> Medium
                    <input type="checkbox" name="lgCheck" /> Large
                    <input type="checkbox" name="gtCheck" /> Giant
                </div>
                <div>
                    <h4>Will you host animals younger than 1 year old?</h4>
                    <input type="radio" name="yesAgeRadio" /> Yes
                    <input type="radio" name="noAgeRadio" /> No
           </div>
                <div>
                    <h4>Will you host animals from more than one family at a time?</h4>
                    <input type="radio" name="multiYesRadio" /> Yes
                    <input type="radio" name="multiNoRadio" /> No
           </div>
                <div>
                    <h4>Please provide a list of equipment that will be used when caring for pets:</h4>
                    <textarea
                        className="equipment"
                        placeholder="Optional..."
                        rows={5}
                        rowsmax={5}
                        cols={100}
                    />
                </div>
                <div>
                    <button>Back</button>
                    <button>Continue</button>
                </div>



            </div>
        )
    }
}
export default VTPage2;