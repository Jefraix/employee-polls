import { getFormattedPercentage } from "../utils/helpers";

describe("getFormattedPercentage", () => {
  it("will return a percentage without decimal digits", () => {
    const numerator = 3;
    const denominator = 4;
    expect(getFormattedPercentage(numerator, denominator)).toBe("75");
  });

  it("will return a percentage with TWO decimal digits", () => {
    const numerator = 2;
    const denominator = 3;
    expect(getFormattedPercentage(numerator, denominator)).toBe("66.67");
  });
});
