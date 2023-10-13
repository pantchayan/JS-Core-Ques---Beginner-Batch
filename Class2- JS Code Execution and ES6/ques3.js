// Question 3: Palindrome Checker

// Problem Description:
// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters which reads the same backward as forward (ignoring spaces, punctuation, and capitalization).

// Example:
// Input: "Madam"
// Output: true

// Solution Approach:

// Convert the string to lowercase.
// Remove all non-alphanumeric characters.
// Compare the string with its reverse.


// Solution

function isPalindrome(str) {
    let cleanedStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z') {
            cleanedStr += str[i].toLowerCase();
        }
    }

    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
}

console.log(isPalindrome("Madam"));  // true


// Test Cases:

// Basic case: isPalindrome("Madam") should return true.
// With spaces and punctuation: isPalindrome("A man, a plan, a canal, Panama!") should return true.
// Non-palindrome: isPalindrome("Hello") should return false.







