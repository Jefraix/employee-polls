export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

// Poll Helper Methods

/**
 * @description Checks if the poll was answered by given user by their ID
 * @param {Object} poll - Contains poll information
 * @param {string} user - The user to check for
 */
export function isPollAnsweredByUser(poll, user) {
  return (
    poll.optionOne.votes.includes(user) || poll.optionTwo.votes.includes(user)
  );
}

/**
 * @description Gets total votes in a poll
 * @param {Object} poll - Contains poll information
 */
export function getTotalVotes(poll) {
  const { optionOne, optionTwo } = poll;
  return optionOne.votes.length + optionTwo.votes.length;
}

/**
 * @description Gets votes for a specific poll option
 * @param {Object} poll - Contains poll information
 * @param {string} option - The option to check
 */
export function getVotesForOption(poll, option) {
  return poll[option].votes.length;
}

/**
 * @description Outputs a formatted percentage value calculated with given numbers
 * @param {integer} numerator
 * @param {integer} denominator
 */
export function getFormattedPercentage(numerator, denominator) {
  let percentage = ((numerator / denominator) * 100).toFixed(2);

  if (percentage.endsWith("00")) {
    percentage = percentage.split(".")[0];
  }

  return percentage;
}

// Poll State Helper Methods

/**
 * @description Checks if the given poll object has one poll ID or more
 * @param {Object} polls - Object containing no keys or one or more key
 */
export function pollsAreRetrieved(polls) {
  return Object.keys(polls).length !== 0;
}

// User Helper Methods

/**
 * @description Gets the number of questions the given user has answered
 * @param {Object} user
 */
export function getUserAnswerNum(user) {
  return Object.keys(user.answers).length;
}

/**
 * @description Gets the number of questions the given user has created
 * @param {Object} user
 */
export function getUserQuestionNum(user) {
  return user.questions.length;
}

/**
 * @description Calculates the leaderboard score of a given user
 * @param {Object} user
 */
function getLeaderboardScore(user) {
  const { questions, answers } = user;
  return questions.length + Object.keys(answers).length;
}

/**
 * @description Returns an array of users sorted by their leaderboard score
 * @param {Object} users - Object containing users
 */
export function sortUsersForLeaderboard(users) {
  return Object.values(users).sort((userA, userB) => {
    return getLeaderboardScore(userB) - getLeaderboardScore(userA);
  });
}
