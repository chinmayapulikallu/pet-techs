import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import vtInfo from './vetTechReducer';
import clientInfo from './clientInfoReducer';
import petInfo from './petInfoReducer';
import petCarePlan from './petCarePlanReducer';
import vtInfoPage1 from './vetTechReducerPage1';
import vtInfoPage2 from './vetTechReducerPage2';
import vtInfoPage3 from './vetTechReducerPage3';
import dogVetReducer from './getDogVetReducer'




// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  clientInfo,
  petInfo,
  vtInfo,
  petCarePlan,
  vtInfoPage1,
  vtInfoPage2,
  vtInfoPage3,
  dogVetReducer,
});

export default rootReducer;
