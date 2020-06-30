const clientInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CLIENT_DATA":
      return action.payload;
      case "UNSET_CLIENT":
          return [];
    default:
      return state;
  }
};

export default clientInfoReducer;
