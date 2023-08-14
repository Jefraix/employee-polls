import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Leaderboard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authedUserName)
      navigate("/signin", { state: { redirect: "/leaderboard" } });
  }, []);

  return (
    <div className="leaderboard-container">
      <h3>Leaderboard</h3>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const authedUserName = users[authedUser]?.name;
  return {
    authedUserName,
  };
};

export default connect(mapStateToProps)(Leaderboard);
