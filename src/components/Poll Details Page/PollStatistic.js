import { connect } from "react-redux";
import {
  getFormattedPercentage,
  getTotalVotes,
  getVotesForOption,
} from "../../utils/helpers";

const PollStatistic = ({ votes, percentage }) => {
  return (
    <div className="poll-detail-statistic">
      <div className="poll-detail-statistic-block">Votes: {votes}</div>
      <div className="poll-detail-statistic-block">
        Percentage: {percentage}
      </div>
    </div>
  );
};

const mapStateToProps = ({ polls }, { pollId, option }) => {
  const total = getTotalVotes(polls[pollId]);
  const votes = getVotesForOption(polls[pollId], option);

  return {
    votes,
    percentage: getFormattedPercentage(votes, total),
  };
};

export default connect(mapStateToProps)(PollStatistic);
