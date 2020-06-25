const clientInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CLIENT_DATA":
      console.log("client Info Reducer----->", action.payload);

      return action.payload;
    default:
      return state;
  }
};

export default clientInfoReducer;
