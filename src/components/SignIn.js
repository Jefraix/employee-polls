import { useState } from "react";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const handleUsernameInputChange = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handlePasswordInputChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
    setLoggingIn(true);

    props.dispatch(
      handleSetAuthedUser(username, password, (success) => {
        if (success) navigate("/");
        else setLoggingIn(false);
      })
    );
  };

  return (
    <div className="sign-in-container">
      <h3>Sign In</h3>
      <form className="sign-in-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameInputChange}
          disabled={loggingIn}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordInputChange}
          disabled={loggingIn}
        />
        {!loggingIn ? <button>SIGN IN</button> : <p>Verifying sign in...</p>}
      </form>
    </div>
  );
};

export default connect()(SignIn);
