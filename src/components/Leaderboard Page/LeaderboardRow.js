import { getUserAnswerNum, getUserQuestionNum } from "../../utils/helpers";

const LeaderboardRow = ({ user }) => {
  const calculateTotal = () => {
    return getUserAnswerNum(user) + getUserQuestionNum(user);
  };

  return (
    <tr>
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
      <td>{calculateTotal()}</td>
    </tr>
  );
};

export default LeaderboardRow;
