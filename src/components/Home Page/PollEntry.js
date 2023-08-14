import { connect } from "react-redux";
import { formatDate } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const PollEntry = (props) => {
  const navigate = useNavigate();

  const { poll } = props;

  const handleShowPoll = () => {
    navigate(`/questions/${poll.id}`);
  };

  return (
    <div className="poll-entry">
      <p>
        <span className="poll-author">{poll.author} </span>
        {formatDate(poll.timestamp)}
      </p>
      <button onClick={handleShowPoll}>Show Poll</button>
    </div>
  );
};

const mapStateToProps = ({ polls }, { id }) => {
  const poll = polls[id];
  return {
    poll,
  };
};

export default connect(mapStateToProps)(PollEntry);
