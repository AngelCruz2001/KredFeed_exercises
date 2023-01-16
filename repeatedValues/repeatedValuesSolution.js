export const repeatValues = (arr, n) => {
  return arr.reduce((acc, element) => {
    const repeatedElement = Array(n).fill(element); // Creating an array of n elements with the same value as the element
    return acc.concat(repeatedElement); // Concatenating the new array to the accumulator
  }, []);
};
