import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserAnswerNum,
  getUserQuestionNum,
  pollsAreRetrieved,
  sortUsersForLeaderboard,
} from "../../utils/helpers";

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
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>User</th>
                <th>Answers</th>
                <th>Questions</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {props.leaderboardUsers.map((user) => (
                <tr key={user.id}>
                  <td
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={user.avatarURL}
                      alt={`Avatar of ${user.name}`}
                      className="leaderboard-avatar"
                    />
                    <span>{user.name}</span>
                  </td>
                  <td>{getUserAnswerNum(user)}</td>
                  <td>{getUserQuestionNum(user)}</td>
                  <td>{getUserAnswerNum(user) + getUserQuestionNum(user)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }) => {
  const leaderboardUsers = sortUsersForLeaderboard(users);
  return {
    authedUser,
    loadingPolls: !pollsAreRetrieved(polls),
    leaderboardUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
