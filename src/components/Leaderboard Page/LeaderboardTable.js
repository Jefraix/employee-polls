import { connect } from "react-redux";
import { sortUsersForLeaderboard } from "../../utils/helpers";

import LeaderboardRow from "./LeaderboardRow";

const LeaderboardTable = (props) => {
  return (
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
          <LeaderboardRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ users }) => {
  const leaderboardUsers = sortUsersForLeaderboard(users);
  return { leaderboardUsers };
};

export default connect(mapStateToProps)(LeaderboardTable);
