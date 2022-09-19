const { divide, multiply, subtract, sum } = require("./math");

describe("Math", () => {
it("should sum 2 + 2 to be 4", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
    expect(result).toBeGreaterThan(3);
});

it("should multiply 3 * 3 to result to 9", () => {
    const result = multiply(3, 3);
    expect(result).toBe(9);
});

it("should subtract 5 - 2 to be 3", () => {
    const result = subtract(5, 2);
    expect(result).toBe(3);
});

it("should divide 6 / 2 to result to 3", () => {
    const result = divide(6, 2);
    expect (result).toBe(2);
   });

   it("should be falsy", () => {
    expect(undefined).not.toBe()
   });
});

describe("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"];
    expect(days).toContain("Tuesday");
    expect(days).notContain("Friday");
});