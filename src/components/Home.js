import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import PollsSection from "./PollsSection";
import { handleReceivePolls } from "../actions/polls";

const Home = (props) => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("unanswered");

  useEffect(() => {
    if (!props.authedUserName) {
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
          >
            Unanswered
          </button>
          <button
            className={applySelectedStyle("answered")}
            onClick={() => handleTabChange("answered")}
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

const mapStateToProps = ({ authedUser, users, polls }) => {
  const authedUserName = users[authedUser]?.name;
  return {
    authedUserName,
    loadingPolls: Object.keys(polls).length === 0,
  };
};

export default connect(mapStateToProps)(Home);
