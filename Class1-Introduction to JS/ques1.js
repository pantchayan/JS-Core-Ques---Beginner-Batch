// Problem 1: String Manipulation
// Description:
// Create a function called reverseString that takes a string as input and returns the reversed version. Call the function with the argument "hello" and store the result in a variable called reversed.

// Hints:

// Use the split, reverse, and join array methods for string reversal.
// Solution Approach:

// Define the function reverseString.
// Use array methods to reverse the string.
// Call the function with the provided argument and store the result.


// Problem 7 Solution

// Define a function to reverse a string
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

// Call the function with the argument "hello"
let reversed = reverseString("hello");

// Test Case
console.log(reversed); // Output: olleh
