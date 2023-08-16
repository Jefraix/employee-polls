import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import PollsSection from "./PollsSection";
import { pollsAreRetrieved } from "../../utils/helpers";

const Home = (props) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("unanswered");

  useEffect(() => {
    if (!props.authedUser) {
      navigate("/signin", { state: { redirect: "/" } });
    }
  }, []);

  const handleTabChange = (selectedTab) => {
    if (selectedTab !== activeTab) setActiveTab(selectedTab);
  };

  const applySelectedStyle = (selectedTab) => {
    return activeTab === selectedTab ? "selected-tab" : "tab";
  };

  return (
    <div className="home-container">
      <h3>Home</h3>
      <div className="polls-container">
        <div className="section-tabs">
          <button
            className={applySelectedStyle("unanswered")}
            onClick={() => handleTabChange("unanswered")}
            data-testid="unansweredTab"
          >
            Unanswered
          </button>
          <button
            className={applySelectedStyle("answered")}
            onClick={() => handleTabChange("answered")}
            data-testid="answeredTab"
          >
            Answered
          </button>
        </div>
        {props.loadingPolls ? (
          <div>Loading Polls...</div>
        ) : (
          <PollsSection selectedTab={activeTab} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls }) => {
  return {
    authedUser,
    loadingPolls: !pollsAreRetrieved(polls),
  };
};

export default connect(mapStateToProps)(Home);
