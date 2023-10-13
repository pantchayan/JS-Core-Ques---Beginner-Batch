// Question 5: Find the Longest Word in a String

// Problem Description:
// Write a function that takes in a string and returns the longest word in that string. If there are multiple words with the same length, return the first one you encounter.

// Example:
// Input: "JavaScript is a fun programming language"
// Output: "programming"

// Solution Approach:

// Split the string into an array of words.
// Initialize a variable to hold the longest word and set it to the first word in the array.
// Traverse through the array. For each word, if its length is greater than the length of the longest word, update the longest word.
// Return the longest word.

// Solution

function findLongestWord(str) {
    let words = [];
    let word = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || i === str.length - 1) {
            if (i === str.length - 1) {
                word += str[i];
            }
            words.push(word);
            word = "";
        } else {
            word += str[i];
        }
    }

    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord("JavaScript is a fun programming language"));  // "programming"


// Test cases

// Test Cases:

// Basic case: findLongestWord("JavaScript is a fun programming language") should return "programming".
// Multiple words with same longest length: findLongestWord("I love apples and bananas") should return "apples".
// One-word input: findLongestWord("Solitude") should return "Solitude".
// Empty string: findLongestWord("") should return "".