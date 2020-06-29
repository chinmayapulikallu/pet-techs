// TODO: remove mock data


const vtInfo = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VT_DATA':
      console.log('in vt reducer:', action.payload)
      return action.payload;
    case 'GET_VT_DATA_SUCCESSFUL':
      return action.payload;
    default:
      return state;
  }
};
export default vtInfo;
