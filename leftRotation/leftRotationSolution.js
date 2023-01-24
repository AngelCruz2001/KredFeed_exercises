export const rotateLeft = (arr, n) => {
  const rotated = arr.slice(n); // slice from n to end
  for (let i = 0; i < n; i++) {
    if (arr[i] === undefined) {
      return rotateLeft(arr, n - arr.length); // if n is greater than arr.length repeat the process with n - arr.length
    }
    rotated.push(arr[i]); // add the first n elements to the end
  }
  return rotated;
};
