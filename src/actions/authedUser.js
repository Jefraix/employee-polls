import { authenticateUser } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function handleSetAuthedUser(username, password) {
  return (dispatch) => {
    return authenticateUser(username, password)
      .then(({ id }) => {
        dispatch(setAuthedUser(id));
      })
      .catch((e) => {
        console.warn("Error in handleSetAuthedUser", e);
        alert("The password is incorrect or username does not exist");
      });
  };
}
