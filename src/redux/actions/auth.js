import { SET_USER_DATA, LOGOUT_USER } from "../types";

const setUserData = (user) => (dispatch, getState) => {
  try {
    dispatch({
      type: SET_USER_DATA,
      payload: {
        user
      },
    });
  } catch (error) {
    console.log("Error -- ", error);
  }
};


const logoutUser = () => (dispatch, getState) => {
  try {
    dispatch({
      type: LOGOUT_USER,
      payload: {
      },
    });
  } catch (error) {
    console.log("Error -- ", error);
  }
}

export { setUserData, logoutUser }
