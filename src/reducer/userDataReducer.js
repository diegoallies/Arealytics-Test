const userDataReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return action.payload;
      case 'CLEAR_USER_DATA':
        return {};
      default:
        return state;
    }
  };
  