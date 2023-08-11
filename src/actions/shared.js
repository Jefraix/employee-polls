import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addPoll, addPollAnswer } from "./Polls";
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
    return saveQuestionAnswer(pollAnswer).then(() => {
      dispatch(addPollAnswer(pollAnswer));
      dispatch(addPollAnswerInUser(pollAnswer));
    });
  };
}
