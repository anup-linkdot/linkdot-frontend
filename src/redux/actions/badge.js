import { SET_BADGE_ID, SET_CREATED_BADGE } from "../types";

const setBadgeId = (badge_id) => (dispatch, getState) => {
    try {
        dispatch({
            type: SET_BADGE_ID,
            payload: {
                badge_id
            },
        });
    } catch (error) {
        console.log("Error -- ", error);
    }
};

const saveBadge = (badge) => (dispatch, getState) => {
    try {
        dispatch({
            type: SET_CREATED_BADGE,
            payload: {
                badge
            },
        });
    } catch (error) {
        console.log("Error -- ", error);
    }
};

export { setBadgeId, saveBadge }