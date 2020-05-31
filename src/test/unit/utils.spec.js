import { formatNumber } from "../../js/utils.js";

describe("formatNumber method", () => {
  it("should split integers with spaces every 3 figures", () => {
    expect(formatNumber(1234567)).toBe("1 234 567");
    expect(formatNumber(10)).toBe("10");
    expect(formatNumber(1.5)).toBe("1.5");
    expect(formatNumber(1.333333)).toBe("1.333333");
    expect(formatNumber(3333.333333)).toBe("3 333.333333");
  });
});
