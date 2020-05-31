import { operate } from "../../js/operations.js";

describe("Operate method", () => {
  it("should sum two numbers", () => {
    expect(operate("plus", 7, 5)).toBe(12);
  });

  it("should substract two numbers", () => {
    expect(operate("minus", 7, 5)).toBe(2);
  });

  it("should multiply two numbers", () => {
    expect(operate("multiply", 7, 5)).toBe(35);
  });

  it("should divide two numbers", () => {
    expect(operate("divide", 7, 5)).toBe(1.4);
  });

  it("should return Infinity on division by zero", () => {
    expect(operate("divide", 7, 0)).toBe(Infinity);
  });

  it("should return second number wout operator", () => {
    expect(operate("", 7, 5)).toBe(5);
  });
});
