import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestion", () => {
  it("will return the saved question and expected fields when correct data is passed", async () => {
    const testQuestion = {
      optionOneText: "have lunch by 5pm",
      optionTwoText: "have lunch by 2pm",
      author: "sarahedo",
    };
    const result = await _saveQuestion(testQuestion);

    expect(result.author).toEqual(testQuestion.author);
    expect(result.optionOne.text).toEqual(testQuestion.optionOneText);
    expect(result.optionTwo.text).toEqual(testQuestion.optionTwoText);
  });

  it("will return an error if author is not passed", async () => {
    const testQuestion = {
      optionOneText: "have lunch by 5pm",
      optionTwoText: "have lunch by 2pm",
    };

    await expect(_saveQuestion(testQuestion)).rejects.toMatch(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return true when correct data is passed", async () => {
    const data = {
      authedUser: "zoshikanlu",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(data);

    expect(result).toEqual(true);
  });

  it("will return error when incorrect data is passed", async () => {
    const data = {
      qid: "",
    };
    await expect(_saveQuestionAnswer(data)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
