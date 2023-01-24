import { rotateLeft } from "./leftRotationSolution.js";

const testCases = [
  { arr: [3, 5, 6, 1, 9], shift: 3, expected: [1, 9, 3, 5, 6] },
  { arr: [1, 2, 3, 4, 5], shift: 2, expected: [3, 4, 5, 1, 2] },
  { arr: [1, 2, 3, 4, 5], shift: 3, expected: [4, 5, 1, 2, 3] },
  { arr: [1, 2, 3, 4, 5], shift: 5, expected: [1, 2, 3, 4, 5] },
  { arr: [10, 11, 9, 1, 5], shift: 9, expected: [5, 10, 11, 9, 1] },
];

testCases.forEach((testCase) => {
  const { arr, shift, expected } = testCase;
  const result = rotateLeft(arr, shift);

  const areEqual = JSON.stringify(result) === JSON.stringify(expected); // Parsing to string to compare arrays
  console.log(areEqual ? "✅" : "❌", result);
});
