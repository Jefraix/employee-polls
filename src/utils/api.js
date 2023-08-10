import {
  _getUsers,
  _authenticateUser,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getUsers(id) {
  return _getUsers(id);
}

export function authenticateUser(username, password) {
  return _authenticateUser(username, password);
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answeredQuestion) {
  return _saveQuestionAnswer(answeredQuestion);
}
