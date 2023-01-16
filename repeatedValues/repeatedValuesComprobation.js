import { repeatValues } from "./repeatedValuesSolution.js";

const testCases = [
  {
    arr: [0, -9, 5, 21],
    repeat: 4,
    expected: [0, 0, 0, 0, -9, -9, -9, -9, 5, 5, 5, 5, 21, 21, 21, 21],
  },
  { arr: [1, 2, 3, 4], repeat: 2, expected: [1, 1, 2, 2, 3, 3, 4, 4] },
  { arr: [1, 2, 3, 4], repeat: 1, expected: [1, 2, 3, 4] },
  { arr: [1, 2, 3, 4], repeat: 0, expected: [] },
];

testCases.forEach(({ arr, repeat, expected }) => {
  const result = repeatValues(arr, repeat);
  const areEqual = JSON.stringify(result) === JSON.stringify(expected);
  console.log(areEqual ? "✅" : "❌", result);
});
