import { createStore } from "redux";

const initialState = {
  userData: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload
      };
    case "LOGOUT_USER":
      localStorage.removeItem("userData");
      return {
        ...state,
        userData: {}
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);

export const setUserData = userData => {
  return {
    type: "SET_USER_DATA",
    payload: userData
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER"
  };
};
