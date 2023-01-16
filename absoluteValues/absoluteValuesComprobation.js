import { getAbsoluteValues } from "./absoluteValuesSolution.js";

const testCases = [
  { arr: [0, -9, 5, -21, 1, -1], expected: [0, 9, 5, 21, 1, 1] },
  { arr: [-1, -2, -3, -4, -5], expected: [1, 2, 3, 4, 5] },
  { arr: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { arr: [1, 2, -3, -4, 5], expected: [1, 2, 3, 4, 5] },
];

testCases.forEach((testCase) => {
  const { arr, expected } = testCase;
  const result = getAbsoluteValues(arr);
  const areEqual = JSON.stringify(result) === JSON.stringify(expected); // Parsing to string to compare arrays
  console.log(areEqual ? "✅" : "❌", result);
});
