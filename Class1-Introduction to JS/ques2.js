// Problem 2: Function to calculate area of Circle
// Description:
// Write a function named calculateArea that takes the radius of a circle as a parameter and returns the area. Call the calculateArea function with the argument 5 and store the result in a variable called circleArea.

// Hints:

// Use the formula for the area of a circle: area = 3.14 * radius^2.
// Call the function with the provided argument.


// Solution Approach:

// Define the function calculateArea.
// Use the formula to calculate the area.
// Call the function with the given argument and store the result in circleArea.


//Complete SOLUTION - >



// Define the function to calculate the area of a circle
function calculateArea(radius) {
    const pi = 3.14;
    return pi * radius ** 2;
}

// Call the function with the argument 5
let circleArea = calculateArea(5);

// Test Case
console.log(circleArea); // Output: 78.5
