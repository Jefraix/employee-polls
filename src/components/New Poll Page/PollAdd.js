import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const PollAdd = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authedUserName)
      navigate("/signin", { state: { redirect: "/add" } });
  }, []);

  return (
    <div className="new-poll-container">
      <h3>Add A New Poll</h3>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const authedUserName = users[authedUser]?.name;
  return {
    authedUserName,
  };
};

export default connect(mapStateToProps)(PollAdd);
