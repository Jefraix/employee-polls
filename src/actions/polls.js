import { getQuestions } from "../utils/api";

export const ADD_POLL = "ADD_POLL";
export const ADD_POLL_ANSWER = "ADD_POLL_ANSWER";
export const RECEIVE_POLLS = "RECEIVE_POLLS";

export function addPoll(question) {
  return {
    type: ADD_POLL,
    question,
  };
}

export function addPollAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_POLL_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

function receivePolls(questions) {
  return {
    type: RECEIVE_POLLS,
    questions,
  };
}

export function handleReceivePolls() {
  return (dispatch) => {
    return getQuestions().then(({ questions }) => {
      dispatch(receivePolls(questions));
    });
  };
}
