import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";

const NavigationBar = (props) => {
  const location = useLocation();

  const handleLogoutClick = () => {
    props.dispatch(removeAuthedUser());
  };

  const checkLocation = (currentLocation) => {
    return location.pathname === currentLocation ? "nav-bar-selected" : "";
  };

  return (
    <div className="nav-bar">
      <ul>
        <li className={checkLocation("/")}>
          <Link to="/">Home</Link>
        </li>
        <li className={checkLocation("/leaderboard")}>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li className={checkLocation("/add")}>
          <Link to="/add">New Poll</Link>
        </li>
      </ul>
      <div className="nav-bar-user-options">
        <span id="welcomeMessage">Welcome, {props.authedUserName}!</span>
        <Link to="/signin" onClick={handleLogoutClick}>
          Logout
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const authedUserName = users[authedUser]?.name;
  return { authedUserName };
};

export default connect(mapStateToProps)(NavigationBar);
