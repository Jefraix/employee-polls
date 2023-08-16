export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

// Poll Helper Methods

export function isPollAnsweredByUser(poll, user) {
  return (
    poll.optionOne.votes.includes(user) || poll.optionTwo.votes.includes(user)
  );
}

export function getTotalVotes(poll) {
  const { optionOne, optionTwo } = poll;
  return optionOne.votes.length + optionTwo.votes.length;
}

export function getVotesForOption(poll, option) {
  return poll[option].votes.length;
}

export function getFormattedPercentage(numerator, denominator) {
  let percentage = ((numerator / denominator) * 100).toFixed(2);

  if (percentage.endsWith("00")) {
    percentage = percentage.split(".")[0];
  }

  return percentage;
}

// Poll State Helper Methods

export function pollsAreRetrieved(polls) {
  return Object.keys(polls).length !== 0;
}

// User Helper Methods

export function getUserAnswerNum(user) {
  return Object.keys(user.answers).length;
}

export function getUserQuestionNum(user) {
  return user.questions.length;
}

function getLeaderboardScore(user) {
  const { questions, answers } = user;
  return questions.length + Object.keys(answers).length;
}

export function sortUsersForLeaderboard(users) {
  return Object.values(users).sort((userA, userB) => {
    return getLeaderboardScore(userB) - getLeaderboardScore(userA);
  });
}
