import { connect } from "react-redux";

const PollsSection = (props) => {
  return (
    <div className="tab-polls">
      {props.userPolls.map((pollId) => (
        <div key={pollId} className="poll-placeholder">
          {pollId}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, { selectedTab }) => {
  const userAnswers = users[authedUser]?.answers;
  const userPolls = Object.keys(polls).filter((pollId) =>
    selectedTab === "unanswered"
      ? pollId in userAnswers === false
      : pollId in userAnswers
  );

  return {
    userPolls,
  };
};

export default connect(mapStateToProps)(PollsSection);
