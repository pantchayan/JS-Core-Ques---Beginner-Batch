// Question 2: Find the Maximum Value in an Array

// Problem Description:
// Write a function that takes in an array of numbers and returns the maximum value in that array.

// Example:
// Input: [1, 4, 2, 7, 5]
// Output: 7

// Solution Approach:

// Initialize a variable maxValue with the value of the first element of the array.
// Traverse through the array.
// If any element is greater than maxValue, update maxValue with that element's value.
// Return maxValue


//Solution


function findMaxValue(arr) {
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log(findMaxValue([1, 4, 2, 7, 5]));  // 7


// Test Cases:

// Basic case: findMaxValue([1, 4, 2, 7, 5]) should return 7.
// Array with negative numbers: findMaxValue([-1, -4, -2, -7, -5]) should return -1.
// Array with one number: findMaxValue([3]) should return 3.




