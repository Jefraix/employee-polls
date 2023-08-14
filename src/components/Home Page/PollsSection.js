import { connect } from "react-redux";
import PollEntry from "./PollEntry";

const PollsSection = (props) => {
  return (
    <div className="tab-polls">
      {props.userPolls.length !== 0 ? (
        props.userPolls.map((pollId) => (
          <div key={pollId}>
            <PollEntry id={pollId} />
          </div>
        ))
      ) : (
        <h3 style={{ textAlign: "center" }}>No Polls</h3>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, { selectedTab }) => {
  const userAnswers = users[authedUser]?.answers;
  const userPolls = Object.keys(polls)
    .sort((a, b) => polls[b].timestamp - polls[a].timestamp)
    .filter((pollId) =>
      selectedTab === "unanswered"
        ? pollId in userAnswers === false
        : pollId in userAnswers
    );

  return {
    userPolls,
  };
};

export default connect(mapStateToProps)(PollsSection);
