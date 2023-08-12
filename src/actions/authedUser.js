import { authenticateUser } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER,
  };
}

export function handleSetAuthedUser(username, password, success) {
  return (dispatch) => {
    return authenticateUser(username, password)
      .then(({ id }) => {
        dispatch(setAuthedUser(id));
        success(true);
      })
      .catch((e) => {
        console.warn("Error in handleSetAuthedUser", e);
        success(false);
        alert("The password is incorrect or username does not exist");
      });
  };
}
