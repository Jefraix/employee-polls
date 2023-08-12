import { getUsers } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_POLL_IN_USER = "ADD_POLL_IN_USER";
export const ADD_POLL_ANSWER_IN_USER = "ADD_POLL_ANSWER_IN_USER";

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addPollInUser(authedUser, qid) {
  return {
    type: ADD_POLL_IN_USER,
    authedUser,
    qid,
  };
}

export function addPollAnswerInUser({ authedUser, qid, answer }) {
  return {
    type: ADD_POLL_ANSWER_IN_USER,
    authedUser,
    qid,
    answer,
  };
}

export function handleGetUsers() {
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
