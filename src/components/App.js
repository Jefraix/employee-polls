import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import SignIn from "./SignIn";
import Home from "./Home";

const App = (props) => {
  return (
    <div className="App">
      {props.loading === true ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  loading: Object.keys(users).length === 0,
  authedUser,
});

export default connect(mapStateToProps)(App);
