import { ADD_POLL, ADD_POLL_ANSWER, RECEIVE_POLLS } from "../actions/polls";

function newPollAnswerState(state, { authedUser, qid, answer }) {
  const newAnswer = {
    ...state[qid][answer],
    votes: state[qid][answer].votes.concat([authedUser]),
  };

  const newQuestion = {
    ...state[qid],
    [answer]: newAnswer,
  };

  return {
    ...state,
    [qid]: newQuestion,
  };
}

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_POLL_ANSWER:
      return newPollAnswerState(state, action);
    default:
      return state;
  }
}
