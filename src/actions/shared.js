import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addPoll, addPollAnswer } from "./polls";
import { addPollAnswerInUser, addPollInUser } from "./users";

export function handleAddPoll(question) {
  return (dispatch) => {
    return saveQuestion(question).then((formattedQuestion) => {
      dispatch(addPoll(formattedQuestion));
      dispatch(addPollInUser(formattedQuestion.author, formattedQuestion.id));
    });
  };
}

export function handleAnswerPoll(pollAnswer) {
  return (dispatch) => {
    dispatch(addPollAnswer(pollAnswer));
    dispatch(addPollAnswerInUser(pollAnswer));
    return saveQuestionAnswer(pollAnswer).then(() => {
      console.log("Answer was updated in the backend");
    });
  };
}
