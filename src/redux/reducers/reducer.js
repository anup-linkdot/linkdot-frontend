import {
  SET_USER_DATA,
  LOGOUT_USER,
  SET_BADGE_ID,
  SET_CREATED_BADGE
} from "../types";

const INITIAL_STATE = {
  user: {},
  badge_id: null,
  badge: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case SET_BADGE_ID:
      return {
        ...state,
        ...action.payload
      }
    case SET_CREATED_BADGE:
      return {
        ...state,
        ...action.payload
      }
    case LOGOUT_USER:
      return {
        user: {},
        badge_id: null,
        badge: {}
      }
    default:
      return INITIAL_STATE;
  }
};