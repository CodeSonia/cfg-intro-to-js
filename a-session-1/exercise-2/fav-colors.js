// Exercise 2.0
// Create a programme that lists your favourite colours as an array. Use the console.log()
// statement to show the first element and the last element.

const favColours = ["pink", "black", "white"];

console.log(favColours[0]);
console.log(favColours[2]);
// pink
// white

// Exercise 2.1
// Let’s modify this programme to get a new colour from the user and add it to our array.
// Using the prompt() input, get a new colour from the user and then use the push()
// command to add this new variable to the favourite colours array. Then use
// console.log() to show that this change has been made correctly.
let userInput = prompt("Provide a new colour: ");
favColours.push(userInput);
console.log(favColours);
// (4) ['pink', 'black', 'white', 'blue']

// Exercise 2.2
// Let’s change our minds and remove that last colour from the array. Do this using the
// pop() method.
favColours.pop();
console.log(favColours);
// (3) ['pink', 'black', 'white']