import { saveQuestion } from "../utils/api";

export const ADD_POLL = "ADD_POLL";

function addPoll(question) {
  return {
    type: ADD_POLL,
    question,
  };
}

export function handleAddPoll(question) {
  return (dispatch) => {
    return saveQuestion(question).then((formattedQuestion) => {
      dispatch(addPoll(formattedQuestion));
    });
  };
}
