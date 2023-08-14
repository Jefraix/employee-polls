import { connect } from "react-redux";

const PollStatistic = (props) => {
  return (
    <div className="poll-detail-statistic">
      <div className="poll-detail-statistic-block">Votes: {props.votes}</div>
      <div className="poll-detail-statistic-block">
        Percentage: {props.percentage}
      </div>
    </div>
  );
};

const mapStateToProps = ({ polls }, { pollId, option }) => {
  const poll = polls[pollId];

  const total = poll.optionOne.votes.length + poll.optionTwo.votes.length;
  const votes = poll[option].votes.length;

  let percentage = ((votes / total) * 100).toFixed(2);

  if (percentage.endsWith("00")) {
    percentage = percentage.split(".")[0];
  }

  return {
    votes,
    percentage,
  };
};

export default connect(mapStateToProps)(PollStatistic);
