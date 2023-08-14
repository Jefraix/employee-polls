const PollOption = ({
  userSelection,
  isAnswered,
  option,
  optionText,
  handleOptionClick,
}) => {
  return (
    <div className="poll-detail-option">
      <button
        className={
          userSelection === option
            ? "poll-detail-option-selected"
            : "poll-detail-option-button"
        }
        onClick={() => handleOptionClick(option)}
        disabled={isAnswered}
      >
        {optionText}
      </button>
    </div>
  );
};

export default PollOption;
