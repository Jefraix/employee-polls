import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authedUserName)
      navigate("/signin", { state: { redirect: "/" } });
  }, []);

  return (
    <div className="home-container">
      <h3>Home</h3>
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
