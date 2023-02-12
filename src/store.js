import { createStore } from 'redux';

const initialState = {
  userData: [
    { id: 1, name: 'Jane Doe', age: 32, location: 'New York' }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
};

const setUserData = (data) => {
  return {
    type: 'SET_USER_DATA',
    payload: data
  };
};

const store = createStore(reducer);

export default store;
export { setUserData };
