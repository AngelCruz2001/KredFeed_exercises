export const rotateLeft = (arr, n) => {
    const rotated = arr.slice(n); // slice from n to end 
    for (let i = 0; i < n; i++) { // add the first n elements to the end
        rotated.push(arr[i]); 
    }
    return rotated; 
};




