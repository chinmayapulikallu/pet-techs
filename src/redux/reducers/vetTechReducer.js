// TODO: remove mock data
const initialState = { username: "Natalie Hummel" };

const vtInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VT_DATA":
      console.log("in vt reducer:", action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default vtInfo;
