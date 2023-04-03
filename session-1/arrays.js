let fruits = ["apple", "plum", "cherry"];

// JS arrays are zero-indexed, which means the first element
// of the array has an index of 0, second element has an index
// of 1 and so on:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// output:
// apple
// plum
// cherry

// In JavaScript, the slice() method works by specifying the start and end index of the substring you want to
// extract. The start index is included in the substring, but the end index is not.
// So when you specify an end index of 4, the method will include the characters at indexes 1, 2, 3, but not the
// character at index 4. The character at index 4 is not included in the substring.

let str = "hello";
let substring = str.slice(1, 4);
console.log(substring);
// prints: ell