import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authedUserName) navigate("/signin");
  }, []);

  const handleLogoutClick = () => {
    props.dispatch(removeAuthedUser());
    navigate("/signin");
  };

  return (
    <div className="welcome-container">
      <h3>Home</h3>
      <p>Welcome, {props.authedUserName}</p>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const authedUserName = users[authedUser]?.name;
  return {
    authedUserName,
  };
};

export default connect(mapStateToProps)(Home);
