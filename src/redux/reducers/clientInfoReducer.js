const clientInfoReducer = (state = [], action) => {
  console.log("client Info Reducer----->", action.payload);
  switch (action.type) {
    case "SET_CLIENT_DATA":
      return action.payload.text;
    default:
      return state;
  }
};

export default clientInfoReducer;
