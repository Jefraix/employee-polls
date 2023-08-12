import {
  _getUsers,
  _authenticateUser,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getUsers() {
  return _getUsers();
}

export function authenticateUser(username, password) {
  return _authenticateUser(username, password);
}

export function getQuestions() {
  return _getQuestions();
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answeredQuestion) {
  return _saveQuestionAnswer(answeredQuestion);
}
