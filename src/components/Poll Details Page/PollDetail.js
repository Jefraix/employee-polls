import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerPoll } from "../../actions/shared";

import PollOption from "./PollOption";
import PollStatistic from "./PollStatistic";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollDetail = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authedUser) {
      navigate("/signin", {
        state: { redirect: `/questions/${props.questionId}` },
      });
    }
  }, []);

  if (!props.authedUser) return <h3>Redirecting...</h3>;

  const handleOptionClick = (optionPicked) => {
    props.dispatch(
      handleAnswerPoll({
        authedUser: props.authedUser,
        qid: props.pollInfo.id,
        answer: optionPicked,
      })
    );
  };

  return (
    <div className="poll-detail-container">
      {props.loadingPolls ? (
        <h3>Loading poll...</h3>
      ) : props.showNotFound ? (
        <h3>ERROR 404: Requested Poll was not found</h3>
      ) : (
        <Fragment>
          <h3>Poll by {props.pollInfo.authorName}</h3>
          <div className="poll-detail">
            <img
              src={props.pollInfo.authorAvatar}
              alt={`Avatar of ${props.pollInfo.authorName}`}
              className="poll-detail-avatar"
            />
            <h1>Would you rather...</h1>
            <div className="poll-detail-options-container">
              <PollOption
                userSelection={props.userSelection}
                isAnswered={props.isAnswered}
                option={"optionOne"}
                optionText={props.pollInfo.optionOne.text}
                handleOptionClick={handleOptionClick}
              />
              <PollOption
                userSelection={props.userSelection}
                isAnswered={props.isAnswered}
                option={"optionTwo"}
                optionText={props.pollInfo.optionTwo.text}
                handleOptionClick={handleOptionClick}
              />
            </div>
            {props.isAnswered && (
              <Fragment>
                <div className="poll-detail-statistics-container">
                  <PollStatistic
                    pollId={props.pollInfo.id}
                    option={"optionOne"}
                  />
                  <PollStatistic
                    pollId={props.pollInfo.id}
                    option={"optionTwo"}
                  />
                </div>
                <h3>You have answered this poll.</h3>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, props) => {
  const { id } = props.router.params;

  // Check if User is authenticated
  if (!authedUser) {
    return { authedUser, questionId: id };
  }

  // User authenticated, check if polls have been retrieved
  if (Object.keys(polls).length === 0) {
    return { authedUser, loadingPolls: true };
  }

  const poll = polls[id];

  // Polls have been retrieved, check if requested poll exists
  if (!poll) return { authedUser, showNotFound: true };

  const pollAuthor = users[poll.author];
  let userSelection = null;

  const isAnswered =
    poll.optionOne.votes.includes(authedUser) ||
    poll.optionTwo.votes.includes(authedUser);

  if (isAnswered) userSelection = users[authedUser].answers[id];

  return {
    authedUser,
    pollInfo: {
      ...poll,
      authorName: pollAuthor.name,
      authorAvatar: pollAuthor.avatarURL,
    },
    isAnswered,
    userSelection,
  };
};

export default withRouter(connect(mapStateToProps)(PollDetail));
