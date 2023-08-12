import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import SignIn from "./SignIn";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import PollAdd from "./PollAdd";
import NavigationBar from "./NavigationBar";
import { Fragment } from "react";

const App = (props) => {
  const location = useLocation();
  return (
    <div className="App">
      {props.loading === true ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <Fragment>
          {location.pathname !== "/signin" && <NavigationBar />}
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add" element={<PollAdd />} />
          </Routes>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  loading: Object.keys(users).length === 0,
  authedUser,
});

export default connect(mapStateToProps)(App);
