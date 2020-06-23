const vtInfo = (state = {}, action) => {
    switch (action.type) {
      case 'SET_VT_DATA':
          console.log('in vt reducer:',action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  export default vtInfo;
  