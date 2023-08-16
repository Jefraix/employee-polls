import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddPoll } from "../../actions/shared";
import { pollsAreRetrieved } from "../../utils/helpers";

import { Fragment } from "react";

const PollAdd = (props) => {
  const navigate = useNavigate();

  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [pollSubmitted, setPollSubmitted] = useState(false);

  useEffect(() => {
    if (!props.authedUser) navigate("/signin", { state: { redirect: "/add" } });
  }, []);

  const handleFirstOptionInputChange = (e) => {
    const optionText = e.target.value;
    setFirstOption(optionText);
  };

  const handleSecondOptionInputChange = (e) => {
    const optionText = e.target.value;
    setSecondOption(optionText);
  };

  const handlePollFormSubmit = (e) => {
    e.preventDefault();

    if (firstOption === "" || secondOption === "") {
      alert("Please fill all form items before submitting.");
      return;
    }

    setFirstOption("");
    setSecondOption("");
    setPollSubmitted(true);

    props.dispatch(
      handleAddPoll(
        {
          optionOneText: firstOption,
          optionTwoText: secondOption,
          author: props.authedUser,
        },
        () => {
          setPollSubmitted(false);
          navigate(`/`);
        }
      )
    );
  };

  return (
    <div className="new-poll-container">
      {pollSubmitted ? (
        <h1>Poll was submitted! Going to home...</h1>
      ) : (
        <Fragment>
          <h3>Add A New Poll</h3>
          <div className="new-poll-form-container">
            <h5>Create Your Own Poll Below</h5>
            <h1>Would You Rather...</h1>
            <form onSubmit={handlePollFormSubmit}>
              <label>First Option</label>
              <input
                name="firstOption"
                placeholder="Enter your first option"
                value={firstOption}
                onChange={handleFirstOptionInputChange}
              />
              <label>Second Option</label>
              <input
                name="secondOption"
                placeholder="Enter your second option"
                value={secondOption}
                onChange={handleSecondOptionInputChange}
              />
              <button>Submit New Poll</button>
            </form>
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls }) => {
  return {
    authedUser,
    loadingPolls: !pollsAreRetrieved(polls),
  };
};

export default connect(mapStateToProps)(PollAdd);
