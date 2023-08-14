import { Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import SignIn from "./Sign In Page/SignIn";
import Home from "./Home Page/Home";
import PollDetail from "./Poll Details Page/PollDetail";
import Leaderboard from "./Leaderboard Page/Leaderboard";
import PollAdd from "./New Poll Page/PollAdd";
import NavigationBar from "./NavigationBar";

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
            <Route path="/questions/:id" element={<PollDetail />} />
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
