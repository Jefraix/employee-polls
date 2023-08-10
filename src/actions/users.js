import { getUsers } from "../utils/api";

export const GET_USERS = "GET_USERS";

function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function handleGetUsers() {
  return (dispatch) => {
    return getUsers().then(({ users }) => {
      dispatch(getUsers(users));
    });
  };
}
