const PollOption = ({
  userSelection,
  isAnswered,
  option,
  optionText,
  handleOptionClick,
}) => {
  const applyStyle = (thisOption) => {
    return userSelection === thisOption
      ? "poll-detail-option-selected"
      : "poll-detail-option-button";
  };

  return (
    <div className="poll-detail-option">
      <button
        className={applyStyle(option)}
        onClick={() => handleOptionClick(option)}
        disabled={isAnswered}
      >
        {optionText}
      </button>
    </div>
  );
};

export default PollOption;
