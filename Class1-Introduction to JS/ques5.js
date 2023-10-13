// Problem 6: Objects
// Description:
// Create an object called book with properties title, author, and publishedYear. Write a sentence using the properties of the book object.

// Hints:

// Use the object literal notation to create the object.
// Access properties using dot notation.
// Solution Approach:

// Create an object called book.
// Assign values to the properties.
// Write a sentence using the properties.


// Problem 6 Solution

// Create an object representing a book
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
};

// Write a sentence using the properties of the book object
let bookSentence = `${book.title} by ${book.author} was published in ${book.publishedYear}.`;

// Test Case
console.log(bookSentence); // Output: The Great Gatsby by F. Scott Fitzgerald was published in 1925.
