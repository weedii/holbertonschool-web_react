import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import { bindActionCreators } from "redux";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));

    return fetch("../../dist/login-success.json")
      .then((response) => {
        if (response.ok) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  };
};

export const boundUIActionCreators = (dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
      loginSuccess,
      loginFailure,
      loginRequest,
    },
    dispatch
  );
