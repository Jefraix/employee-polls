import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pollsAreRetrieved } from "../../utils/helpers";

import LeaderboardTable from "./LeaderboardTable";

const Leaderboard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authedUser)
      navigate("/signin", { state: { redirect: "/leaderboard" } });
  }, []);

  return (
    <div className="leaderboard-container">
      {props.loadingPolls ? (
        <h3>Loading leaderboard...</h3>
      ) : (
        <Fragment>
          <h3>Leaderboard</h3>
          <LeaderboardTable />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls }) => {
  return {
    authedUser,
    loadingPolls: !pollsAreRetrieved(polls),
  };
};

export default connect(mapStateToProps)(Leaderboard);
