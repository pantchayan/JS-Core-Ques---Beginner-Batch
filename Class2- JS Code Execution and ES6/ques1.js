// Question 1: Count the Number of Vowels

// Problem Description:
// Write a function that takes in a string and returns the count of vowels in that string. Consider the vowels to be a, e, i, o, u (both uppercase and lowercase).

// Example:
// Input: "Hello World"
// Output: 3 (Because there are 2 'o's and 1 'e')

// Solution Approach:

// Initialize a counter to zero.
// Traverse through each character in the string.
// If the character is a vowel, increase the counter.
// Return the counter.


// Solution 

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World"));  // 3


// test cases

// Test Cases:

// Basic case: countVowels("Hello World") should return 3.
// String with no vowels: countVowels("bcd") should return 0.
// Empty string: countVowels("") should return 0.


